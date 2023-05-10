<template>
  <footer class="mt-16 h-24 flex flex-col justify-center items-center">
    <slot />
    <p @click="handleToGov" class="cursor-pointer text-hover">蜀ICP备2022021714号-1</p>
    <p>Copyright © 2022-2023 by orange</p>
    <p class="cursor-pointer text-hover">更新说明</p>
  </footer>
</template>

<script lang="ts" setup>
const handleToGov = () => {
  window.open("https://beian.miit.gov.cn/", "_black")
}
</script>

<style scoped lang="scss">
footer {
  @apply text-sm;
}
.text-hover {
  transition: all 0.5s;
  box-sizing: border-box;
}
.text-hover:hover {
  border-bottom: 1px solid orange;
  transition: all 0.5s;
  box-sizing: border-box;
}
</style>
