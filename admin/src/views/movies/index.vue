<!-- movies -->
<template>
  <div id="movies" class="content">
    <!-- 搜索 -->
    <div class="content-search">
      <el-form :inline="true" :model="moviesForm">
        <el-form-item label="名称：">
          <el-input v-model="moviesForm.title" placeholder="请输入电影/电视剧名称"></el-input>
        </el-form-item>
        <el-form-item label="类型：">
          <el-select v-model="moviesForm.type" placeholder="请选择类型">
            <el-option label="电影" value="1" />
            <el-option label="电视剧" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" :icon="Plus" @click="handleCreate">上架</el-button>
          <el-button type="warning" :icon="Search" @click="handleSearch">搜剧</el-button>
          <el-button :icon="Refresh" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <div class="content-table">
      <el-table :data="tableData" stripe :max-height="fullScreen.fullHeight.value - 300">
        <el-table-column prop="id" label="序号" width="60" />
        <el-table-column label="封面" width="90">
          <template #default="scope">
            <el-image style="width: 60px" :src="scope.row.img" :teleported="true" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="200" />
        <el-table-column prop="type" label="标签" width="100">
          <template #default="scope">
            <div v-if="scope.row.type">
              <el-tag round class="ml-2" effect="dark"> {{ scope.row.type == 1 ? "电影" : "电视剧" }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="introduction" label="简介" />
        <el-table-column prop="time" label="观影时间" width="300" />
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button type="warning" :icon="Edit" circle @click="handleEdit(scope.row)" />
            <el-button type="danger" :icon="Delete" circle @click="handleDelete(scope.row)" />
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <Pagination :pageConfig="pageConfig" @SIZE_CHANGE="handleSizeChnage" @CURRENT_CHANGE="handleCurrentChange" />
    </div>
    <!-- 抽屉 -->
    <el-drawer v-model="showDrawer" :title="drawerTitle">
      <el-form :model="createForm" label-width="90px">
        <el-form-item label="名称：" required>
          <el-input v-model="createForm.name" placeholder="请输入电影/电视剧名称" />
        </el-form-item>
        <el-form-item label="类型：" required class="mt-4">
          <el-select class="w-full" v-model="createForm.type" placeholder="请选择类型">
            <el-option label="电影" value="1" />
            <el-option label="电视剧" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="时间：" class="mt-4" required>
          <el-date-picker v-model="createForm.time" type="date" value-format="YYYY-MM-DD" placeholder="请选择时间" style="width: 100%" />
        </el-form-item>
        <el-form-item label="评分：" class="mt-4" required>
          <div class="flex">
            <el-input-number
              style="width: 100px"
              :min="0"
              :max="5"
              controls-position="right"
              :precision="1"
              :step="0.1"
              v-model="createForm.score"
              placeholder="请输入电影/电视剧名称"
            />
            <el-rate class="ml-4" v-model="createForm.score" disabled show-score text-color="#ff9900" score-template="{value} 分" />
          </div>
        </el-form-item>
        <el-form-item label="封面：" class="mt-4" required>
          <el-input v-model="createForm.img" placeholder="请输入电影/电视剧封面" />
          <el-image
            style="width: 100px"
            class="mt-4"
            :src="createForm.img"
            :zoom-rate="1.2"
            :preview-src-list="[createForm.img]"
            fit="cover"
          />
        </el-form-item>
        <el-form-item label="简介：" class="mt-4" required>
          <el-input
            v-model="createForm.introduction"
            placeholder="请输入电影/电视剧简介"
            maxlength="300"
            :autosize="{ minRows: 5 }"
            type="textarea"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="观后感：" class="mt-4">
          <el-input
            v-model="createForm.content"
            placeholder="请输入观后感"
            maxlength="1000"
            :autosize="{ minRows: 10 }"
            type="textarea"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="warning" @click="handleCreateEnter">上架</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
#movies {
  :deep(.el-input__wrapper) {
    width: 100%;
  }
}
</style>
