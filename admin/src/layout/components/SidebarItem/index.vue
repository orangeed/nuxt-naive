<!--
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-27 00:18:45
 * @FilePath: \nuxt-naive\admin\src\layout\components\SidebarItem\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<!-- SidebarItem -->
<template>
  <div v-if="!item.meta.hidden">
    <template v-if="!item.children || item.children.length === 0">
      <router-link :to="resolvePath(item.path)">
        <div class="hover:bg-orange-500">
          <el-menu-item :index="resolvePath(item.path)">
            <el-icon>
              <component :is="item.meta && item.meta.icon" />
            </el-icon>
            <template #title>
              <span v-if="!isCollapse" class="text-color ">{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </div>
      </router-link>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body class="bg-color ">
      <template #title>
        <el-icon>
          <component :is="item.meta && item.meta.icon" />
        </el-icon>
        <span v-if="!isCollapse" class="text-color">{{ item.meta.title }}</span>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" class="bg-color"
        :base-path="resolvePath(child.path)" />
    </el-sub-menu>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>

</style>
