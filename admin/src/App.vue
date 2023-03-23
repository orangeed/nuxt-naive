<!--
 * @Author: orange
 * @Date: 2022-10-24 15:56:57
 * @LastEditors: orange
 * @LastEditTime: 2022-11-30 09:40:00
 * @FilePath: \nuxt-naive\admin\src\App.vue
 * @Description: App.vue
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<template>
  <el-config-provider :z-index="zIndex" :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import { Ref } from "vue"

const zIndex = 3000
const locale = zhCn
// 获取分辨率赋值样式
const fullWidth: Ref<number> = ref(0)
const fullHeight: Ref<number> = ref(0)
provide("FULL_SCREEN", { fullHeight, fullWidth })
const handleGetWidth = () => {
  fullHeight.value = window.innerHeight
  fullWidth.value = window.innerWidth
}
handleGetWidth()
window.onresize = () => {
  handleGetWidth()
}
</script>
