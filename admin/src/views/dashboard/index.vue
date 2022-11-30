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
  <div class="card-color shadow-lg rounded-lg">
    <div class="flex items-center card-color">
      <img src="https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg"
        class="w-20 rounded" />
      <p class="ml-3">
        {{ timeText }}，orange，开始您一天的工作吧！
      </p>
      <div>
        {{ weather }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>

</style>
