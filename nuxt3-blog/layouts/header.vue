<template>
  <header class="fixed w-full">
    <div class="header flex items-center shadow-lg bg-transparent">
      <div class="logo flex-2">logo</div>
      <div class="search flex-1">
        <n-input
          v-model:value="search"
          round
          placeholder="搜索"
          size="medium"
          class="w-1/2"
        >
          <template #suffix>
            <n-icon :component="SearchOutline" />
          </template>
        </n-input>
      </div>
      <div class="menu flex-2 flex justify-end">
        <div class="menu-box">
          <span v-for="item in headerData.menuList" :key="item.id" class="">{{ item.name }}</span>
        </div>
        <div class="login">登录 | 注册</div>
      </div>
    </div>
    <slot name="header" />
  </header>
</template>

<script setup>
import { SearchOutline } from "@vicons/ionicons5";
import { ref, reactive } from "vue";
const search = ref("");

// todo 这里的数据可以请求后端，后台配置，比如logo，菜单menu
const headerData = reactive({
  logo: "",
  menuList: [
    {
      id: 0,
      name: "首页",
    },
    {
      id: 1,
      name: "关于",
    },
  ],
});
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
}
</style>
