<!-- 详情 -->
<template>
  <div id="pageDetails" class="max-w-3xl m-auto">
    <p class="text-2xl">{{ pagesInfo.title }}</p>
    <!-- <div class="text-xs">
      <span>标签：</span>
      <n-tag
        :bordered="false"
        type="warning"
        v-for="(tag, index) in pagesInfo.tags"
        :key="index"
        class="mr-2"
        size="small"
        round
      >
        {{ tag }}
      </n-tag>
    </div>
    <p class="text-xs">
      <span>更新时间：</span>
      <span>{{ pagesInfo.updateTime }}</span>
    </p> -->
    <div class="text-xs">
      <n-tag
        :bordered="false"
        type="warning"
        v-for="(tag, index) in pagesInfo.tags"
        :key="index"
        class="mr-2"
        size="small"
        round
      >
        {{ tag }}
      </n-tag>
      |
      <span>{{ pagesInfo.updateTime }}</span>
    </div>
    <!-- 内容页 -->
    <div class="text-base leading-8 mt-5">
      {{ pagesInfo.content }}
    </div>
  </div>
</template>

<script lang="ts" setup name="pageDetails">
import { reactive } from "vue";

interface PagesInfo {
  title: string;
  updateTime: string;
  tags: string[];
  content: string;
}

// 文章内容
const pagesInfo: PagesInfo = reactive({
  title: "",
  updateTime: "",
  tags: [],
  content: "",
});
const route = useRoute();
console.log("pageDetails route", route.query);

// TODO 请求数据
const handleGetData = () => {
  // ...
  pagesInfo.title = "Bad Design vs. Good Design: 5 Examples We can Learn From";
  pagesInfo.updateTime = "2022-10-28 16:29:00";
  pagesInfo.tags = ["JavaScript", "Vue"];
  pagesInfo.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.";
};
handleGetData();
</script>

<style lang="scss" scoped></style>
