<!--
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-30 14:12:05
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
        <el-menu-item :index="resolvePath(item.path)" class="w-full rounded text-color"
          :style="resolvePath(item.path) === route.path ? 'backgroundColor:#9b9a9a' : ''">
          <el-icon>
            <component :is="item.meta && item.meta.icon" />
          </el-icon>
          <template #title>
            <span v-if="!isCollapse" class="">{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)" class="bg-color w-full rounded">
      <template #title>
        <div class="rounded text-color">
          <el-icon>
            <component :is="item.meta && item.meta.icon" />
          </el-icon>
          <span v-if="!isCollapse" class="">{{ item.meta.title }}</span>
        </div>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" class="bg-color"
        :base-path="resolvePath(child.path)" />
    </el-sub-menu>
  </div>
</template>

<!-- <script lang="ts" src="./index.ts" /> -->
<script lang="ts" setup name="SidebarItem">
import { isExternal } from "../../../utils/validate";
import path from "path-browserify";
import { ref, Ref } from "vue";
import sidebarItem from './index.vue'
import { useRoute } from "vue-router";
const route = useRoute();
const activeColor: Ref<string> = ref("");
const activeTextColor: Ref<string> = ref('')

const prop = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: "",
  },
  isCollapse: {
    type: Boolean,
    default: false,
  },
})

const resolvePath = (routePath: string) => {
  // console.log("routePath", routePath);
  // console.log("route", route.path);
  // if (routePath === route.path) {
  //   // activeColor.value = '#fde9ce';
  //   activeColor.value = '#9b9a9a';
  // } else {
  //   activeColor.value = ''
  // }
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(prop.basePath)) {
    return prop.basePath;
  }
  return path.resolve(prop.basePath, routePath);
};
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">
.el-sub-menu__title {
  // background-color: red;
  border-radius: 4px;
}

.el-menu-item {
  min-width: 184px !important;
  // background-color: v-bind('activeColor');
}
</style>