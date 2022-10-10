<template>
  <NuxtLayout name="header">
    <template> 这是首页头部 </template>
  </NuxtLayout>
  首页
  <NuxtLink to="/about"> 关于</NuxtLink>
</template>
<script>
export default {
  layout: false
}
</script>
