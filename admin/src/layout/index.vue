<!--
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-30 13:51:45
 * @FilePath: \nuxt-naive\admin\src\layout\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<!-- layout -->
<template>
  <div>
    <el-header
      class="flex items-center bg-color text-color"
      :style="{ height: headerHight }"
    >
      <div class="flex-1 basis-text-color flex items-center">
        <img
          src="../assets/logo.png"
          :style="{
            height: `calc(${headerHight} - 10px)`,
            width: `calc(${headerHight} - 10px)`,
          }"
          class="rounded-full"
        />
        <span class="text-2xl ml-5 mr-5"> 橘子的分享后台管理系统 </span>
        <el-icon>
          <Expand @click="handleShow" v-if="isCollapse" />
          <Fold @click="handleCloseMenu" v-else />
        </el-icon>
      </div>
      <div class="flex-1 flex justify-end items-end basis-text-color">
        <div class="tool mr-2 cursor-pointer" @click="handleChangeThemes()">
          <el-icon>
            <Sunny v-if="isDark" />
            <Moon v-else />
          </el-icon>
        </div>
        <el-dropdown trigger="click">
          <div class="flex items-center">
            <img
              src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg"
              class="w-8 rounded"
            />
            <span class="basis-text-color ml-2">orange</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <template #dropdown>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="handleGotoPerson"
                >个人中心</el-dropdown-item
              >
              <el-dropdown-item divided @click="handleLogout"
                >退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-container :style="{ height: `calc(100vh - ${headerHight})` }">
      <el-aside :width="asideWidth" class="asideWidth bg-color text-color">
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :unique-opened="false"
          :collapse-transition="false"
          class="el-menu-vertical-demo bg-color"
        >
          <SidebarItem
            v-for="route in permission_routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
            :isCollapse="isCollapse"
            class="bg-color ml-2 mr-2"
          />
        </el-menu>
      </el-aside>
      <el-main class="main-color">
        <TagsView :themeData="isDark" />
        <router-view key="key" class="m-3 text-color" v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.asideWidth {
  overflow: hidden;
  transition: 0.35s all;
}

.el-menu {
  border: none;
  height: 100vh;
  :hover {
    background-color: #bd9eb1;
  }
}

.el-main {
  padding: 0;
}
</style>
