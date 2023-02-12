<!--
 * @Author: orange
 * @Date: 2022-10-24 15:56:57
 * @LastEditors: orange
 * @LastEditTime: 2022-11-29 17:00:30
 * @FilePath: \nuxt-naive\admin\src\views\home\index.vue
 * @Description: 首页
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<template>
  <div id="ArticleList" class="content">
    <div class="content-search">
      <!-- 搜索栏 -->
      <el-form :inline="true" :model="articleForm">
        <el-form-item label="标题">
          <el-input
            v-model="articleForm.articleName"
            placeholder="请输入文章标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            v-model="articleForm.time"
            type="daterange"
            value-format="YYYY-MM-DD"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            @change="handleChangeTime"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <!-- 单击表格一行，预览文章内容，以弹出框形式展示 -->
    <div class="content-table">
      <el-table :data="tableData" stripe>
        <el-table-column prop="id" label="序号" width="60" />
        <el-table-column prop="name" label="姓名" />

        <el-table-column prop="tags" label="标签" width="200">
          <template #default="scope">
            <el-tag
              round
              v-for="(tag, index) in scope.row.tags.split(' ')"
              :key="index"
              class="ml-2"
              effect="dark"
            >
              {{ tag }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="author" label="作者" width="200" />
        <el-table-column prop="createTime" label="创作时间" width="200" />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button
              type="primary"
              :icon="Edit"
              circle
              @click="handleEdit(scope.row)"
            />
            <el-button
              type="danger"
              :icon="Delete"
              circle
              @click="handleDelete(scope.row)"
            />
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <Pagination
        :pageConfig="pageConfig"
        @SIZE_CHANGE="handleSizeChnage"
        @CURRENT_CHANGE="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped></style>
