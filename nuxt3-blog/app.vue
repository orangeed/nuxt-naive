<template>
  <n-config-provider :theme="theme">
    <NuxtLayout name="header"> </NuxtLayout>
    <NuxtPage :key="$route.fullPath"></NuxtPage>
    <NuxtLayout name="footer"> </NuxtLayout>
  </n-config-provider>
</template>
<script lang="ts">
export default {
  layout: false,
};
</script>
<script lang="ts" setup>
import { computed } from "vue";
import { useOsTheme, darkTheme } from "naive-ui";
const osThemeRef = useOsTheme();

const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>
<style lang="scss">
.html {
  font-family: Roboto Mono-Regular, Roboto Mono;
}
</style>
