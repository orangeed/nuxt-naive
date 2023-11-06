<!-- project -->
<template>
  <div id="project" class="content">
    <!-- 搜索 -->
    <div class="content-search">
      <el-form :inline="true" :model="projectForm">
        <el-form-item label="名称">
          <el-input v-model="projectForm.name" placeholder="请输入项目名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" :icon="Plus" @click="handleCreate">新增</el-button>
          <el-button type="warning" :icon="Search" @click="handleSearch">查询</el-button>
          <el-button :icon="Refresh" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <div class="content-table">
      <el-table :data="tableData" stripe :max-height="fullScreen.fullHeight.value - 300">
        <el-table-column prop="id" label="序号" width="60" />
        <el-table-column label="截图" width="90">
          <template #default="scope">
            <el-image style="width: 60px" :src="scope.row.img" :teleported="true" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="120" />
        <el-table-column prop="type" label="分类" width="120">
          <template #default="scope">
            {{ scope.row.type === "1" ? "个人项目" : "参与项目" }}
          </template>
        </el-table-column>
        <el-table-column prop="introduction" label="简介" />
        <el-table-column prop="author" label="作者" width="100" />
        <el-table-column prop="createTime" label="时间" width="200" />
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button type="warning" :icon="Edit" circle @click="handleEdit(scope.row)" />
            <el-button type="warning" :icon="Delete" circle @click="handleDelete(scope.row)" />
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <Pagination :pageConfig="pageConfig" @SIZE_CHANGE="handleSizeChnage" @CURRENT_CHANGE="handleCurrentChange" />
    </div>
    <!-- 抽屉 -->
    <el-drawer v-model="showDrawer" :title="drawerTitle">
      <el-form :model="createForm" label-width="90px">
        <el-form-item label="项目名称：">
          <el-input v-model="createForm.name" placeholder="请输入项目名称" />
        </el-form-item>
        <el-form-item label="项目分类：" class="mt-4">
          <el-select v-model="createForm.type" class="w-full" placeholder="请选择项目分类">
            <el-option label="个人作品" value="1" />
            <el-option label="参与作品" value="参与" />
          </el-select>
        </el-form-item>
        <el-form-item label="作者：" class="mt-4">
          <el-input v-model="createForm.author" placeholder="请输入项目作者" />
        </el-form-item>
        <el-form-item label="截图：" class="mt-4">
          <el-input v-model="createForm.img" placeholder="请输入项目截图" />
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
            placeholder="请输入项目简介"
            maxlength="300"
            :autosize="{ minRows: 5 }"
            type="textarea"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="warning" @click="handleCreateEnter">添加</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
#project {
  :deep(.el-input__wrapper) {
    width: 100%;
  }
}
</style>
