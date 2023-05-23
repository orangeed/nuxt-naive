<!-- 详情 -->
<template>
  <div id="pageDetails" class="max-w-3xl m-auto p-8">
    <p class="text-3xl font-semibold">{{ pagesInfo.title }}</p>
    <div class="text-sm font-semibold" style="color: #5a5a5a">
      <p class="flex">
        <n-tag :bordered="false" type="warning" v-for="(tag, index) in pagesInfo.tags" :key="index" class="mr-2"
          size="small" round>
          {{ stateList[index].label }}
        </n-tag>
        <span id="busuanzi_container_page_pv" class="block">
          <n-icon :component="BookmarkOutline" size="16"></n-icon>
          阅读量：<span id="busuanzi_value_page_pv" class="font-bold text-lg text-orange-400"></span> 次
        </span>
      </p>
      <p class="mt-2">
        <span class="mr-2">作者：<span>{{ pagesInfo.author }}</span></span>
        <span>时间：{{ pagesInfo.updateTime }}</span>
      </p>
    </div>
    <!-- 内容页 -->
    <div class="text-base leading-8">
      <MarkdownEditor :editorText="pagesInfo.content" />
    </div>
    <!-- 评论 -->
    <!-- <no-ssr>
      <Comment></Comment>
    </no-ssr> -->
  </div>
</template>

<script lang="ts" setup name="pageDetails">
import { reactive, onMounted, ref, Ref } from "vue"
import { useRoute } from "vue-router"
import { getHomeFindDetails } from "~~/server/home"
import { stateList } from "../utils/state"
import MarkdownEditor from "../components/MarkdownEditor.vue"
import { BookmarkOutline } from "@vicons/ionicons5"
// import Comment from '../components/comment.vue'

interface PagesInfo {
  author: string
  title: string
  updateTime: string
  tags: string[]
  content: string
}

// 文章内容
const pagesInfo: PagesInfo = reactive({
  author: "",
  title: "",
  updateTime: "",
  tags: [],
  content: ""
})
const route = useRoute()
console.log("pageDetails route", route.query)

const handleGetData = () => {
  getHomeFindDetails({ id: route.query.id }).then((res) => {
    // pagesInfo = res.data
    pagesInfo.author = res.data.author
    pagesInfo.tags = res.data.tags
    pagesInfo.title = res.data.title
    pagesInfo.content = res.data.content
    pagesInfo.updateTime = res.data.updateTime
  })
  // ...
  // pagesInfo.title = "Bad Design vs. Good Design: 5 Examples We can Learn From"
  // pagesInfo.updateTime = "2022-10-28 16:29:00"
  // pagesInfo.tags = ["JavaScript", "Vue"]
  // pagesInfo.content =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit."
}
handleGetData()

// onMounted(() => {
//   const comment = ref()
//   const artalk = Artalk.init({
//     el: comment.value,
//     pageKey: '',
//     pageTitle: pagesInfo.title,
//     server: 'https://www.orangecj.cn:8080',
//     site: '橘子的分享',
//     reqTimeout: 10,
//   })
// })
</script>

<style lang="scss" scoped>
#busuanzi_container_page_pv {
  display: block !important;
}
</style>
