<!-- 详情 -->
<template>
  <div id="pageDetails" class="max-w-3xl m-auto p-8">
    <p class="text-3xl font-semibold">{{ pagesInfo.title }}</p>
    <div class="text-sm font-semibold" style="color: #5a5a5a">
      <p class="flex">
        <n-tag :bordered="false" type="warning" v-for="(tag, index) in pagesInfo.tags" :key="index" class="mr-2" size="small" round>
          {{ stateList[index].label }}
        </n-tag>
        <span id="busuanzi_container_page_pv" class="block">
          <n-icon :component="BookmarkOutline" size="16"></n-icon>
          阅读量：<span id="busuanzi_value_page_pv" class="font-bold text-lg text-orange-400"></span> 次
        </span>
      </p>
      <p class="mt-2">
        <span class="mr-2"
          >作者：<span>{{ pagesInfo.author }}</span></span
        >
        <span>时间：{{ pagesInfo.updateTime }}</span>
      </p>
    </div>
    <!-- 内容页 -->
    <div class="text-base leading-8">
      <MarkdownEditor :editorText="pagesInfo.content" />
    </div>
  </div>
</template>

<script lang="ts" setup name="pageDetails">
import { reactive, onMounted, ref, Ref } from "vue"
import { useRoute } from "vue-router"
import { getHomeFindDetails } from "~~/server/home"
import { stateList } from "../utils/state"
import MarkdownEditor from "../components/MarkdownEditor.vue"
import { BookmarkOutline } from "@vicons/ionicons5"
import { getSessStorage } from "../utils/storage"
import { cacheEnum } from "../utils/enum"

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

const handleGetData = () => {
  getHomeFindDetails({ id: route.query.id ? route.query.id : getSessStorage(cacheEnum.articleId) }).then((res) => {
    pagesInfo.author = res.data.author
    pagesInfo.tags = res.data.tags
    pagesInfo.title = res.data.title
    pagesInfo.content = res.data.content
    pagesInfo.updateTime = res.data.updateTime
  })
}
handleGetData()
</script>

<style lang="scss" scoped>
#busuanzi_container_page_pv {
  display: block !important;
}
</style>
