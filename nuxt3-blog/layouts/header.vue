<template>
  <header class="sticky w-full pb-24 pt-24">
    <div class="header flex items-center">
      <div class="logo flex-1 text-center text-2xl">
        <span
          class="cursor-pointer"
          @click="
            $router.replace('/');
            currentIndex = 0;
          "
        >
          橘子的分享</span
        >
      </div>
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
          <!-- <NuxtLink :to="item.path" v-if="item.path">
          </NuxtLink> -->
          <span v-if="item.path" @click="$router.push(item.path)">{{
            item.name
          }}</span>
        </span>
        <span>
          <n-icon :component="Moon" @click="handleChangeTheme(darkTheme)" />
          <n-icon :component="SunnyOutline" @click="handleChangeTheme(null)" />
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
import { darkTheme } from "naive-ui";
import { emitter } from "../utils/mitt";

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
const handleClickMenu = (id: number) => {
  console.log(id);
  currentIndex.value = id;
};

// 切换晚上和白天模式
const theme = ref<typeof darkTheme | null>(null);
const handleChangeTheme = (themeItem: typeof darkTheme | null) => {
  console.log("切换晚上和白天模式", themeItem);
  theme.value = themeItem;
  emitter.emit("theme", themeItem);
};
</script>

<style lang="scss" scoped>
.active {
  padding-bottom: 8px;
  border-bottom: 2px solid red;
  transition: all 0.5s;
}
.logo {
  span {
    will-change: filter;
    padding: 30px;

    &:hover {
      transition: all 0.3s;
      filter: drop-shadow(0 0 30px rgb(255, 30, 0));
    }
  }
}
</style>
