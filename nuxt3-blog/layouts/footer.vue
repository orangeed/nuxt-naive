<!--
 * @Author: orange
 * @Date: 2022-10-11 21:56:20
 * @LastEditors: orange
 * @LastEditTime: 2022-11-20 10:23:20
 * @FilePath: \nuxt-naive\nuxt3-blog\layouts\footer.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<template>
  <footer class="mt-16 h-24 flex flex-col justify-center items-center">
    <slot />
    <p @click="handleToGov" class="cursor-pointer">蜀ICP备2022021714号-1</p>
    <p>Copyright © 2022 by orange</p>
  </footer>
</template>

<script lang="ts" setup>
const handleToGov = () => {
  window.open('https://beian.miit.gov.cn/', '_black')
}
</script>