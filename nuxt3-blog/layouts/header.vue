<template>
  <header class="sticky w-full mb-24 mt-24">
    <div class="header flex items-center">
      <div class="logo flex-1 text-center text-2xl">橘子的分享</div>
      <div class="flex-1 text-center text-base">
        <span
          v-for="item in headerData.menuList"
          :key="item.id"
          :class="[
            'ml-6 mr-6 cursor-pointer',
            currentIndex === item.id ? 'active' : '',
          ]"
          @click="handleClickMenu(item.id)"
        >
          <NuxtLink :to="item.path" v-if="item.path">{{ item.name }}</NuxtLink>
        </span>
        <span>
          <n-icon :component="Moon" @click="handleChangeTheme" />
          <n-icon :component="SunnyOutline" @click="handleChangeTheme" />
        </span>
      </div>
      <div class="flex-1 flex justify-center">
        <div class="w-1/2">
          <n-input-group>
            <n-input
              v-model:value="search"
              placeholder="搜索"
              size="medium"
            ></n-input>
            <n-input-group-label class="bg-orange-300 text-white border-none">
              <n-icon :component="SearchOutline" />
            </n-input-group-label>
          </n-input-group>
        </div>
      </div>
    </div>
    <slot name="header" />
  </header>
</template>

<script setup lang="ts">
import { SearchOutline, SunnyOutline } from "@vicons/ionicons5";
import { Moon } from "@vicons/fa";
import { ref, reactive } from "vue";
const search = ref("");

// todo 这里的数据可以请求后端，后台配置，比如logo，菜单menu
const headerData = reactive({
  logo: "",
  menuList: [
    {
      id: 0,
      name: "首页",
      path: "/",
    },
    {
      id: 1,
      name: "关于",
      path: "/about",
    },

    // Moon,
    // SunnyOutline,
  ],
});
// 点击菜单按钮
// 当前选中的按钮索引
const currentIndex = ref(0);
const handleClickMenu = (id) => {
  console.log(id);
  currentIndex.value = id;
};

// 切换晚上和白天模式
const handleChangeTheme = (theme: string) => {
  console.log("切换晚上和白天模式", theme);
};
</script>

<style lang="scss" scoped>
.active {
  padding-bottom: 8px;
  border-bottom: 2px solid red;
  transition: all 0.5s;
}
</style>
