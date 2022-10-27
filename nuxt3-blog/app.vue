<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
    <n-global-style />
    <div id="app-nuxt">
      <NuxtLayout name="header"> </NuxtLayout>
      <NuxtPage :key="$route.fullPath"></NuxtPage>
      <NuxtLayout name="footer"> </NuxtLayout>
      <n-back-top :right="100" />
    </div>
  </n-config-provider>
</template>
<script lang="ts">
export default {
  layout: false,
};
</script>
<script lang="ts" setup>
import { darkTheme } from "naive-ui";
import { emitter } from "./utils/mitt";

const theme = ref<typeof darkTheme | null>(null);

// 白天
const lightThemeOverrides = {
  textColor: "#474747",
  backgroundColor: "#ffffff",
};

// 夜间
const darkThemeOverrides = {
  textColor: "#ccc",
  backgroundColor: "#000000",
};

// 默认白天
let themeList = reactive({
  ...lightThemeOverrides,
});

emitter.on("theme", (themeItem: any) => {
  console.log("themeItem", themeItem);
  theme.value = themeItem;
  if (themeItem) {
    themeList = { ...darkThemeOverrides };
  } else {
    themeList = { ...lightThemeOverrides };
  }
});

// const lightThemeOverrides = {
//   common: {
//     primaryColor: "#000000",
//   },
//   // ...
// };

// const darkThemeOverrides = {
//   common: {
//     primaryColor: "#FFFFFF",
//   },
//   // ...
// };
</script>
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
