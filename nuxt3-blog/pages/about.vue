<template>
  <div class="about-box" id="about">
    <n-image src="../assets/img/header.jpg" width="100" />
    <div class="max-w-lg m-auto">
      {{ aboutMe.content }}
    </div>
    <div class="pt-20">
      <span class="text-xl active">个人作品</span>
      <div class="flex flex-wrap justify-center">
        <n-card class="w-52 h-52 m-8 cursor-pointer" hoverable v-for="i in 4" :key="i">
          <div class="flex items-center justify-center h-full">待添加作品{{ i }}</div>
        </n-card>
      </div>
      <span class="text-xl active">参与项目</span>
      <div class="flex flex-wrap justify-center">
        <n-card class="w-52 h-52 m-8 cursor-pointer" hoverable v-for="i in 5" :key="i">
          <div class="flex items-center justify-center h-full">待添加项目{{ i }}</div>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="about">
import { reactive } from "vue"
const aboutMe = reactive({
  content: ""
})
aboutMe.content = " 菜鸡小前端一个，本科毕业。这里的文章主要是记录工作、学习以及生活。还有个公众号：【橘子的分享】"
</script>

<style lang="scss">
#about {
  .active {
    padding-bottom: 8px;
    border-bottom: 2px solid orange;
    transition: all 0.5s;
  }

  .n-image > img {
    border-radius: 9999px;
  }
  .update{
    @apply text-left;
  }
}
@media screen and (max-width: 1240px) {
  .about-box {
    @apply flex-col pl-10 pr-10 text-center;
  }
}
@media screen and (min-width: 1241px) {
  .about-box {
    @apply pl-40 pr-40 text-center;
  }
}
</style>
