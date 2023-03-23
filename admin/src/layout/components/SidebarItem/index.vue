<!-- SidebarItem -->
<template>
  <div v-if="!item.meta.hidden">
    <template v-if="!item.children || item.children.length === 0">
      <router-link :to="resolvePath(item.path)">
        <el-menu-item :index="resolvePath(item.path)">
          <el-icon>
            <component :is="item.meta && item.meta.icon" />
          </el-icon>
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)">
      <template #title>
        <el-icon>
          <component :is="item.meta && item.meta.icon" />
        </el-icon>
        <span v-if="!isCollapse">{{ item.meta.title }}</span>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" :base-path="resolvePath(child.path)" />
    </el-sub-menu>
  </div>
</template>

<script lang="ts" setup name="SidebarItem">
import { isExternal } from "../../../utils/validate"
import path from "path-browserify"
import sidebarItem from "./index.vue"

const prop = defineProps({
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ""
  },
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(prop.basePath)) {
    return prop.basePath
  }
  return path.resolve(prop.basePath, routePath)
}
</script>
<style>
.el-sub-menu__icon-arrow {
  display: none !important;
}
</style>
