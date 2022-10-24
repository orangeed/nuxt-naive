<!-- layout -->
<template>
  <div>
    <el-header
      :class="[
        'flex items-center page-bgColor border-b',
        isDark ? 'border-stone-500' : '',
      ]"
      :style="{
        height: headerHight,
      }"
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
        <div class="tool mr-2 cursor-pointer" @click="toggleDark()">
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
            <span class="basis-text-color">orange</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container :style="{ height: `calc(100vh - ${headerHight})` }">
      <el-aside
        :width="asideWidth"
        :class="[
          'asideWidth shadow-lg shadow-gray-400 border-r ',
          isDark ? 'border-stone-500' : '',
        ]"
      >
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :unique-opened="false"
          :collapse-transition="false"
          class="el-menu-vertical-demo"
        >
          <SidebarItem
            v-for="route in permission_routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
            :isCollapse="isCollapse"
          />
        </el-menu>
      </el-aside>
      <el-main>
        <TagsView :themeData="isDark" />
        <router-view
          :key="key"
          class="m-3 shadow-lg shadow-gray-400 p-2 basis-text-color page-bgColor"
          :style="{
            height: `calc(100vh - ${headerHight} - 60px)`,
          }"
          v-slot="{ Component }"
        >
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
}
.el-main {
  padding: 0;
}
</style>
