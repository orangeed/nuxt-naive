<!-- App.vue -->
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
