<!--
 * @Author: orange
 * @Date: 2022-10-11 21:56:20
 * @LastEditors: orange
 * @LastEditTime: 2022-11-20 21:25:40
 * @FilePath: \nuxt-naive\nuxt3-blog\app.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->

<template>
  <n-config-provider
    :theme="theme"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
    <n-global-style />
    <n-message-provider>
      <div id="app-nuxt">
        <NuxtLayout name="header"> </NuxtLayout>
        <NuxtPage :key="$route.fullPath"></NuxtPage>
        <NuxtLayout name="footer"> </NuxtLayout>
        <n-back-top :right="20" />
        <div>
          <Head>
            <Title>
              {{ title }}
            </Title>
            <Meta name="description" :content="title" />
          </Head>
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>
<script lang="ts">
export default {
  layout: false
}
</script>
<script lang="ts" setup>
import { darkTheme, zhCN, dateZhCN } from "naive-ui"
import { emitter } from "./utils/mitt"
import { getStorage } from "./utils/storage"
import { ref, reactive, onMounted, nextTick } from "vue"
const title = "橘子的分享"

const theme = ref<typeof darkTheme | null>(null)

// 白天
const lightThemeOverrides = {
  color: "#474747",
  backgroundColor: "#ffffff"
}

// 夜间
const darkThemeOverrides = {
  color: "#474747",
  backgroundColor: "#101014"
}

emitter.on("theme", (themeItem: any) => {
  console.log("emitterTheme", themeItem)
  theme.value = themeItem
})

onMounted(() => {
  if (getStorage("THEME") === "dark") {
    theme.value = darkTheme
  }
})
</script>
<!-- <script  src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script> -->
<style lang="scss">
#app-nuxt {
  font-family: Roboto Mono-Regular, Roboto Mono;
  max-width: 1680px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
}
</style>
