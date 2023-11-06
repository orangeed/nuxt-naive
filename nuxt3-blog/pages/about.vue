<template>
  <div class="about-box" id="about">
    <n-image src="../assets/img/header.jpg" width="100" />
    <div class="max-w-lg m-auto">
      {{ aboutMe.content }}
    </div>
    <div class="pt-20">
      <span class="text-xl active">个人作品</span>
      <div class="flex flex-wrap justify-center">
        <n-card class="w-52 h-52 m-8 cursor-pointer" hoverable v-for="(item, index) in personList" :key="index">
          <div class="flex flex-col items-center justify-center w-full h-full">
            <img :src="item.img" :alt="item.name" class="w-40 h-40" />
            <span> {{ item.name }}</span>
          </div>
        </n-card>
      </div>
      <span class="text-xl active">参与项目</span>
      <div class="flex flex-wrap justify-center">
        <n-card class="w-52 h-52 m-8 cursor-pointer" hoverable v-for="(item, index) in participateList" :key="index">
          <div class="flex flex-col items-center justify-center w-full h-full">
            <img :src="item.img" :alt="item.name" class="w-40 h-40" />
            <span> {{ item.name }}</span>
          </div>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="about">
import { reactive, ref, Ref } from "vue"
import { getProjectList } from "~~/server/project"
const aboutMe = reactive({
  content: ""
})
aboutMe.content = " 菜鸡小前端一个，本科毕业。这里的文章主要是记录工作、学习以及生活。还有个公众号：【橘子的分享】"

// 个人项目
const personList: Ref<any[]> = ref([])

// 参与项目
const participateList: Ref<any[]> = ref([])

// 获取项目列表
const handleGetList = () => {
  getProjectList({ pageNum: 1, pageSize: 10 }).then((res: any) => {
    console.log("res", res)
    res.data.list.forEach((v: any) => {
      if (v.type === "1") {
        personList.value.push(v)
      } else {
        participateList.value.push(v)
      }
    })
  })
}
handleGetList()
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
  .update {
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
