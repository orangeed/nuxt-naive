<!--
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-26 22:52:40
 * @FilePath: \nuxt-naive\admin\src\layout\components\TagsView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<!-- TagsView -->
<template>
  <div id="tags-view-container" class="tags-view-container  flex items-center">
    <router-link v-for="tag in visitedViews" ref="tag" :key="tag.path"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }" tag="span" :class="[
        'tags-view-item tags-view-bgcolor shadow-lg',
        isActive(tag) ? 'active' : '',
      ]" @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''">
      <span :class="['tags-view-color text-color', isActive(tag) ? 'text-white' : '']">{{ tag.title }}</span>
      <el-icon v-if="!isAffix(tag)" class="tags-close" @click.prevent.stop="closeSelectedTag(tag)">
        <Close />
      </el-icon>
    </router-link>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  // background: #fff;
  // border-bottom: 1px solid #d8dce5;

  // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    // border: 1px solid #d8dce5;
    // color: #495060;
    // background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;

    &:first-of-type {
      margin-left: 15px;
    }

    &:last-of-type {
      margin-right: 15px;
    }

    &.active {
      background-color: #42b983;
      border-color: #42b983;
      color: #fff;

      &::before {
        content: "";
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }
  }
}
</style>
<style lang="scss">
.tags-view-item {
  .tags-close {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: 100% 50%;

    &:before {
      transform: scale(0.6);
      display: inline-block;
      vertical-align: -3px;
    }

    &:hover {
      background-color: #b4bccc;
      color: #fff;
    }
  }
}
</style>
