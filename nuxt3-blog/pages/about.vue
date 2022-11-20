<!--
 * @Author: orange
 * @Date: 2022-10-11 21:56:20
 * @LastEditors: orange
 * @LastEditTime: 2022-11-20 15:00:55
 * @FilePath: \nuxt-naive\nuxt3-blog\pages\about.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<template>
  <div class="pl-40 pr-40 text-center" id="about">
    <n-image src="../assets/img/header.jpg" width="100" />
    <div class="max-w-lg m-auto">
      {{ aboutMe.content }}
    </div>
    <div class="pt-20">
      <span class="text-xl active">个人作品</span>
      <div class="flex flex-wrap">
        <n-card class="w-52 h-52 m-8 cursor-pointer" hoverable v-for="i in 12" :key="i">
          <div class="flex items-center justify-center h-full">作品{{ i }}</div>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="about">
import { reactive } from 'vue'
const aboutMe = reactive({
  content: "",
});
aboutMe.content =
  "菜鸡小前端一个，本科毕业，现在就职于一个中小企业。这里的文章主要是记录工作或者学习或者生活。还有个公众号：【橘子的分享】";
</script>

<style lang="scss">
#about {
  .active {
    padding-bottom: 8px;
    border-bottom: 2px solid orange;
    transition: all 0.5s;
  }

  .n-image>img {
    border-radius: 9999px;
  }
}
</style>
