<template>
  <div>
    <!-- <NuxtLink to="/about"> 关于</NuxtLink> -->
    <div class="w-full flex justify-center">
      <img
        src="../assets/img/banner.jpeg"
        alt="banner"
        class="banner "
      />
    </div>
    <NuxtLink to="/about"> <n-button type="primary">关于 </n-button> </NuxtLink>
    <div class="flex flex-row justify-center text-green-500 font-bold">
      pages - index.vue
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  max-width: 2560px;
  width: 100vw;
}
</style>
