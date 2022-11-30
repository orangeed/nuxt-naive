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
  <el-config-provider :size="size" :z-index="zIndex">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";

const zIndex = 3000;
const size = "small";
</script>
