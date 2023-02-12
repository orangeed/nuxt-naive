<!--
 * @Author: orange
 * @Date: 2022-10-24 15:56:57
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 13:04:21
 * @FilePath: \nuxt-naive\admin\src\views\login\index.vue
 * @Description: 首页
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<template>
  <div
    id="login"
    class="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-indigo-500 to-orange-400"
  >
    <div
      class="w-1/2 h-1/2 flex justify-center items-center shadow-xl p-5 bg-white rounded-2xl"
    >
      <div class="flex-1">
        <img src="../../assets/logo.png" alt="logo" />
      </div>
      <div class="flex-1 h-full">
        <div class="h-1/4 flex flex-col justify-center">
          <p class="text-xl font-bold">密码登录</p>
          <p class="w-24 bg-orange-400 pt-2 -mt-2 rounded"></p>
        </div>
        <div class="h-3/4 flex flex-col text-base">
          <el-form
            ref="form"
            :model="loginForm"
            label-width="80px"
            size="large"
            class="w-3/4 mt-10"
          >
            <el-form-item label="用户名：">
              <el-input
                v-model="loginForm.username"
                autofocus
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input
                v-model="loginForm.password"
                type="password"
                show-password
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
          </el-form>
          <div
            class="bg-indigo-500 w-3/4 rounded text-white mt-10 h-10 flex items-center justify-center cursor-pointer hover:bg-orange-300 hover:duration-300"
            @click="handleLogin"
          >
            登录
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div @click="handleGoToIndex">登录</div> -->
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped></style>

<style lang="scss">
#login {
  ::-webkit-input-placeholder {
    color: rgb(102, 102, 102) !important;
  }

  .el-form-item__label {
    color: rgb(41, 40, 40);
    font-weight: bold;
    font-size: 16px;
  }

  .el-input__wrapper {
    background-color: transparent;
    box-shadow: none;
    border-bottom: 1px solid rgb(8 145 178);
    width: 100%;
  }

  .el-input__inner {
    color: #000;
  }
  .el-form-item {
    margin-bottom: 22px !important;
  }
}
</style>
