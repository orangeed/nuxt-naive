<template>
  <div class="pl-40 pr-40" id="index">
    <div class="flex">
      <div class="flex-1 text-center">
        <n-image src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <p class="text-xl">橘子</p>
        <p class="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
          augue erat ac eros. Cras ultricies mattis convallis.
        </p>
        <div>
          <n-icon :component="Zhihu" size="40" class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1" />
          <n-icon :component="Weixin" size="40" class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1" />
          <n-icon :component="Github" size="40" class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1" />
        </div>
      </div>
      <div class="flex-3 flex justify-center pl-24">
        <n-tabs type="line" animated size="large">
          <n-tab-pane name="oasis" tab="全部"> Wonderwall </n-tab-pane>
          <n-tab-pane name="the beatles" tab="JavaScript">
            JavaScript
          </n-tab-pane>
          <n-tab-pane name="jay chou" tab="Vue"> Vue </n-tab-pane>
          <n-tab-pane name="ablubm" tab="相册"> 相册 </n-tab-pane>
        </n-tabs>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Zhihu, Weixin, Github } from "@vicons/fa";
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
#index {
  .n-image>img {
    width: 132px;
    height: 132px;
    border-radius: 9999px !important;
  }
}
</style>
