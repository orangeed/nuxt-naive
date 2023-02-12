<!-- editArticle -->
<template>
  <div id="editArticle">
    <div class="content-search">
      <!-- 搜索栏 -->
      <el-form :inline="true" :model="markDownInfo">
        <el-form-item label="文章名称">
          <el-input
            v-model="markDownInfo.title"
            placeholder="请输入文章名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="作者名称">
          <el-input
            v-model="markDownInfo.author"
            placeholder="请输入作者名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <!-- <el-date-picker
            v-model="markDownInfo.time"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="请输入创作时间"
          /> -->
          <el-select
            v-model="markDownInfo.tags"
            multiple
            placeholder="请选择分类"
            style="width: 240px"
          >
            <el-option
              v-for="item in tagList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content-table">
      <MarkdownEditor
        ref="markdownEditor"
        :editorText="editorText"
        @MARKDOWM_HTML="handleGetHtml"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped></style>
