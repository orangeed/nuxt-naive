<!--
 * @Author: orange
 * @Date: 2022-10-24 15:56:57
 * @LastEditors: orange
 * @LastEditTime: 2022-11-24 18:00:02
 * @FilePath: \nuxt-naive\admin\src\views\login\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<!-- 首页 -->
<template>
  <div id="login" class="flex justify-center items-center h-screen w-screen">
    <div class="w-1/2 h-1/2 flex justify-center items-center shadow-xl p-5">
      <div class="flex-1">
        <img src="../../assets/logo.png" alt="logo" class="hover:shadow-xl hover:shadow-orange-200 duration-300">
      </div>
      <div class="flex-1 h-full">
        <p class="text-xl font-bold">密码登录</p>
        <p class="w-10 bg-orange-400 pt-1 mt-1 rounded"></p>
        <el-form ref="form" :model="loginForm" label-width="80px">
          <el-form-item label="用户名：">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <!-- <div @click="handleGoToIndex">登录</div> -->
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>

</style>
