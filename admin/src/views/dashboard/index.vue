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
    <div class="card-color shadow-xl rounded-lg p-3">
      <div class="flex items-center card-color w-full">
        <div class="flex">
          <img src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg" class="w-20 rounded" />
          <p class="ml-3 flex items-center">{{ timeText }}，orange，开始您一天的工作吧！</p>
        </div>
        <div class="flex justify-center items-end flex-1 mr-10">
          <div class="flex flex-col mr-10 text-center">
            <i :class="`qi-${weather.icon}`" class="text-6xl"> </i>
            <span class="mt-2">{{ weather.text }}</span>
          </div>
          <div class="flex flex-col text-base">
            <span> 温度：{{ weather.temp }}℃ </span>
            <span> 体感温度：{{ weather.feelsLike }}℃ </span>
          </div>
          <div class="flex flex-col text-base ml-10">
            <span> 相对湿度：{{ weather.humidity }}% </span>
            <span> 能见度：{{ weather.vis }}公里 </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 今日待办 -->
    <div class="flex">
      <div class="flex-1 card-color shadow-xl rounded-lg mt-5 p-3" :style="{ height: `${fullScreen.fullHeight.value - 116 - 100}px` }">
        <h1 class="text-xl">将要做</h1>
        <div
          v-for="(item, index) in todoList"
          :key="index"
          :id="`${item}-${index}`"
          class="bg-blue-300 m-2 p-3 rounded-md cursor-pointer flex relative overflow-hidden"
          @click="handleDelete(`${item}-${index}`)"
        >
          <span class="flex-1">{{ item.label }}</span>
          <div class="delete bg-red-300 flex justify-center items-center rounded-md">删除</div>
        </div>
      </div>
      <div class="flex-1 card-color shadow-xl rounded-lg mt-5 p-3 ml-4" :style="{ height: `${fullScreen.fullHeight.value - 116 - 100}px` }">
        <h1 class="text-xl">正在做</h1>
      </div>
      <div class="flex-1 card-color shadow-xl rounded-lg mt-5 p-3 ml-4" :style="{ height: `${fullScreen.fullHeight.value - 116 - 100}px` }">
        <h1 class="text-xl">已完成</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped>
.delete {
  position: absolute;
  right: -100px;
  top: 0;
  width: 100px;
  height: 100%;
}
</style>
