<!-- layout -->
<template>
  <el-container class="main-color h-screen flex items-center">
    <el-aside class="asideWidth bg-color text-color ml-8 shadow-xl">
      <el-menu
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        class="el-menu-vertical-demo bg-color"
      >
        <img src="../assets/logo.png" class="rounded-full" />
        <SidebarItem v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" :isCollapse="isCollapse" />
        <div class="fixed" style="bottom: 5vh; width: 64px">
          <div class="flex flex-col items-center justify-center">
            <div class="tool cursor-pointer" @click="handleChangeThemes()">
              <el-icon size="30">
                <Sunny v-if="isDark" />
                <Moon v-else />
              </el-icon>
            </div>
            <el-dropdown trigger="click">
              <div class="flex flex-col items-center justify-center">
                <img src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg" class="w-8 rounded" />
                <span class="basis-text-color">orange</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <template #dropdown>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click="handleGotoPerson">个人中心</el-dropdown-item>
                  <el-dropdown-item divided @click="handleLogout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-menu>
    </el-aside>
    <el-main style="height: 94vh" class="ml-6 mr-8 mt-4">
      <router-view key="key" class="text-color" v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.asideWidth {
  width: 64px;
  overflow: hidden;
  transition: 0.35s all;
  height: 94vh;
  border-radius: 10px;
}

.el-menu {
  border: none;
  height: 100%;
}

.el-main {
  padding: 0;
}
</style>
