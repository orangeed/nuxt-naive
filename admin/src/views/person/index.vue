<!-- 个人中心 -->
<template>
  <div id="person" class="content">
    <div class="content-card flex justify-center">
      <el-form class="w-1/2" :model="userForm" label-width="120px">
        <div class="flex justify-center">
          <img :src="userForm.avatar" />
        </div>
        <p class="flex justify-center font-bold text-xl" v-if="!isEdit">{{ userForm.name }}</p>
        <el-form-item label="昵称：" class="mt-4" v-else>
          <el-input v-model="userForm.name" />
        </el-form-item>
        <el-form-item label="知乎地址：" class="mt-4">
          <el-input v-model="userForm.zhihuAddress" :disabled="!isEdit" />
        </el-form-item>
        <el-form-item label="公众号地址：" class="mt-4">
          <el-input v-model="userForm.wxAddress" :disabled="!isEdit" />
        </el-form-item>
        <el-form-item label="GitHub地址：" class="mt-4">
          <el-input v-model="userForm.GitHubAddress" :disabled="!isEdit" />
        </el-form-item>
        <el-form-item label="个人简介：" class="mt-4">
          <el-input v-model="userForm.intro" type="textarea" :autosize="{ minRows: 4, maxRows: 10 }" :disabled="!isEdit" />
        </el-form-item>
        <div class="flex justify-center w-full mt-4">
          <el-button class="mr-10" v-if="isEdit" @click="isEdit = false">取消</el-button>
          <el-button type="warning" @click="handleEditORSave">{{ isEdit ? "保 存" : "编 辑" }}</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
#person {
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
