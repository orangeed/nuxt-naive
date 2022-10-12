<template>
  <div>
    <NuxtLayout name="header">
      <!-- <template #header>
        <p class="text-green-500">顶部</p>
      </template> -->
    </NuxtLayout>
    <NuxtPage :key="$route.fullPath"></NuxtPage>
    <NuxtLayout name="footer"> </NuxtLayout>
  </div>
</template>
<script>
export default {
  layout: false,
};
</script>
