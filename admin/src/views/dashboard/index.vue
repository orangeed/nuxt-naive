<!--
 * @Author: orange
 * @Date: 2022-10-24 15:56:57
 * @LastEditors: orange
 * @LastEditTime: 2022-11-30 14:22:40
 * @FilePath: \nuxt-naive\admin\src\views\dashboard\index.vue
 * @Description: 首页
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<template>
  <div>
    <!-- 顶部天气 -->
    <div class="card-color shadow-lg rounded-lg p-3">
      <div class="flex items-center card-color w-full">
        <div class="flex">
          <img src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg"
            class="w-20 rounded" />
          <p class="ml-3 flex items-center">
            {{ timeText }}，orange，开始您一天的工作吧！
          </p>
        </div>
        <div class="flex justify-center items-end flex-1 mr-10">
          <div class="flex flex-col mr-10 text-center">
            <i :class="`qi-${weather.icon}`" class="text-6xl">
            </i>
            <span class="mt-2">{{ weather.text }}</span>
          </div>
          <div class="flex flex-col text-base">
            <span>
              温度：{{ weather.temp }}℃
            </span>
            <span>
              体感温度：{{ weather.feelsLike }}℃
            </span>
          </div>
          <div class="flex flex-col text-base ml-10">
            <span>
              相对湿度：{{ weather.humidity }}%
            </span>
            <span>
              能见度：{{ weather.vis }}公里
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 个人项目以及今日待办 -->
    <div class="flex">
      <div class="card-color shadow-lg rounded-lg mt-5 p-3 w-2/3">
        <h1 class="text-xl">个人项目</h1>
        <div class="flex flex-wrap mt-3">
          <div v-for="(item, index) in projectList" :key="index"
            class="m-2 w-48 h-48 flex flex-col justify-center items-center">
            <img src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg"
              class="rounded w-5/6" />
            <span class='flex items-center h-1/6'>{{ item.projectName }}</span>
          </div>
        </div>
      </div>
      <div class="card-color shadow-lg rounded-lg mt-5 p-3 w-1/3 ml-3">
        <h1 class="text-xl">今日待办</h1>
        <div class="flex flex-wrap mt-3">
        </div>
      </div>
    </div>
    <!-- 统计曲线图 -->
    <div class="card-color shadow-lg rounded-lg mt-5 p-3">
      <h1 class="text-xl">统计曲线图</h1>
      <div ref="line" class="line"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped>
.line {
  height: calc(100vh - 64px - 34px - 20px - 117px - 292px - 100px)
}
</style>
