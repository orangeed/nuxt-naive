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
        <!-- 非3d -->
        <div class="page-main" :style="{ right: is3D ? '120%' : '0', height: is3D ? '50vh' : '100%' }">
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
        <!-- 3d -->
        <div class="threejs-box" :style="{ left: is3D ? '0' : '-120%' }">
          <Three />
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
import { ref, reactive, onMounted, nextTick, Ref } from "vue"
import { cacheEnum } from "./utils/enum"

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
  theme.value = themeItem
})

onMounted(() => {
  if (getStorage(cacheEnum.theme) === "dark") {
    theme.value = darkTheme
  }
})
// 接收3D
const is3D: Ref<boolean> = ref(true)
const handle3D = () => {
  emitter.on("3DMODEL", (val: any) => {
    is3D.value = val
  })
}
handle3D()
</script>
<style lang="scss">
#app-nuxt {
  font-family: Roboto Mono-Regular, Roboto Mono;
  max-width: 1680px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
  .page-main {
    position: relative;
    overflow: hidden;
    transition: all 1s;
  }
  .threejs-box {
    position: absolute;
    top: 0;
    left: -100%;
    transition: all 1s;
    overflow: hidden;
  }
}
</style>
