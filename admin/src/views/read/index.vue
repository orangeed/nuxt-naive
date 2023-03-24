<!-- Read -->
<template>
  <div id="Read" class="content">
    <!-- 搜索 -->
    <div class="content-search">
      <el-form :inline="true" :model="readForm">
        <el-form-item label="名称">
          <el-input v-model="readForm.title" placeholder="请输入图书名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Plus" @click="handleCreate">上架</el-button>
          <el-button type="primary" :icon="Search" @click="handleSearch">搜书</el-button>
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
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="author" label="作者" width="200" />
        <el-table-column prop="createTime" label="时间" width="300" />
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button type="primary" :icon="Edit" circle @click="handleEdit(scope.row)" />
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
        <el-form-item label="图书名称：">
          <el-input v-model="createForm.name" placeholder="请输入图书名称" />
        </el-form-item>
        <el-form-item label="作者：" class="mt-4">
          <el-input v-model="createForm.author" placeholder="请输入图书作者" />
        </el-form-item>
        <el-form-item label="时间：" class="mt-4">
          <el-date-picker v-model="createForm.time" type="date" value-format="YYYY-MM-DD" placeholder="请选择时间" style="width: 100%" />
        </el-form-item>
        <el-form-item label="封面：" class="mt-4">
          <el-input v-model="createForm.img" placeholder="请输入图书封面" />
          <el-image
            style="width: 100px; height: 100px"
            class="mt-4"
            :src="createForm.img"
            :zoom-rate="1.2"
            :preview-src-list="[createForm.img]"
            fit="cover"
          />
        </el-form-item>
        <el-form-item label="简介：" class="mt-4">
          <el-input
            v-model="createForm.introduction"
            placeholder="请输入图书简介"
            maxlength="300"
            :autosize="{ minRows: 5 }"
            type="textarea"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="读后感：" class="mt-4">
          <el-input
            v-model="createForm.content"
            placeholder="请输入读后感"
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
          <el-button type="primary" @click="handleCreateEnter">上架</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
#Read {
  :deep(.el-input__wrapper) {
    width: 100%;
  }
}
</style>
