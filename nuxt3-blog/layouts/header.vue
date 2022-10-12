<template>
  <header>
    <div class="header flex">
      <div class="logo">logo</div>
      <div class="search flex-1">
        <n-input v-model:value="search" round placeholder="搜索" size="medium">
          <template #suffix>
            <n-icon :component="SearchOutline" />
          </template>
        </n-input>
      </div>
      <div class="menu">
        <div>首页</div>
      </div>
      <div class="login">登录 | 注册</div>
    </div>

    <slot name="header" />
  </header>
</template>

<script setup>
import { SearchOutline } from "@vicons/ionicons5";
import { ref } from "vue";
const search = ref("");
</script>
