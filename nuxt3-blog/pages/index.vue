<template>
  <div id="index">
    <div class="index-box">
      <div class="flex-1 about-me text-center">
        <!-- <p class="text-2xl text-left">个人简介</p> -->
        <n-image src="../assets/img/header.jpg" />
        <p class="text-xl">橘子</p>
        <p class="text-left">菜鸡小前端一个，本科毕业。这里的文章主要是记录工作、学习以及生活。还有个公众号：【橘子的分享】</p>
        <div class="o-icon">
          <n-icon :component="Zhihu" size="40" class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1 cursor-pointer" @click="handleGoto('zhihu')" />
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon
                :component="Weixin"
                size="40"
                class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1 cursor-pointer"
                @click="handleGoto('weixin')"
              />
            </template>
            <img src="../assets/img/weixin.jpg" />
          </n-tooltip>
          <n-icon :component="Github" size="40" class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1 cursor-pointer" @click="handleGoto('git')" />
        </div>
        <div class="o-icon">
          <p>
            <span id="busuanzi_container_site_pv" class="block"
              >本站访问量：<span id="busuanzi_value_site_pv" class="font-bold text-lg text-orange-400"></span> 次</span
            >
          </p>
          <p>
            <span id="busuanzi_container_site_uv" class="block"
              >本站访客数：<span id="busuanzi_value_site_uv" class="font-bold text-lg text-orange-400"></span> 人</span
            >
          </p>
        </div>
      </div>
      <div class="content" style="flex: 3">
        <p class="text-2xl font-familg-regular font-normal">最近文章</p>
        <n-tabs type="line" animated size="large" :on-update:value="handleChangeTabs">
          <n-tab-pane name="" tab="全部">
            <div v-for="item in data.artData" :key="item.id" class="mt-4 mb-4 cursor-pointer" @click="handleGotoDetail(item.id)">
              <ArtCard :item="item" />
            </div>
          </n-tab-pane>
          <n-tab-pane name="0" tab="JavaScript">
            <div v-for="item in data.artData" :key="item.id" class="mt-4 mb-4 cursor-pointer" @click="handleGotoDetail(item.id)">
              <ArtCard :item="item" />
            </div>
          </n-tab-pane>
          <n-tab-pane name="1" tab="Vue">
            <div v-for="item in data.artData" :key="item.id" class="mt-4 mb-4 cursor-pointer" @click="handleGotoDetail(item.id)">
              <ArtCard :item="item" />
            </div>
          </n-tab-pane>
          <n-tab-pane name="2" tab="生活">
            <div v-for="item in data.artData" :key="item.id" class="mt-4 mb-4 cursor-pointer" @click="handleGotoDetail(item.id)">
              <ArtCard :item="item" />
            </div>
          </n-tab-pane>
        </n-tabs>
        <div class="flex justify-end" v-if="pageConfig.total > 0">
          <n-pagination
            v-model:page="pageConfig.pageNum"
            v-model:page-size="pageConfig.pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :page-count="pageConfig.total / pageConfig.pageSize"
            size="large"
            show-quick-jumper
            show-size-picker
            :on-update:page="handleChangePageNum"
            :on-update:page-size="handleChangePageSize"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { Zhihu, Weixin, Github } from "@vicons/fa"
import ArtCard from "../components/artCard.vue"
import { getHomeArticleList } from "../server/home"
import { login } from "../server/index"
import { emitter } from "../utils/mitt"

login({ username: "orange", password: "c4ca4238a0b923820dcc509a6f75849b" }).then((res) => {
  window.sessionStorage.setItem("TOKEN", res.data.token)
  handleGetTabsData("")
})

// 切换tabs的事件
const handleChangeTabs = (val: string) => {
  // 通过val去查询对应字段的数据
  handleGetTabsData(val)
}

interface ArtDara {
  id: number
  img: string
  title: string
  tag: string[]
  updataTime: string
}

interface Data {
  artData: ArtDara[]
}
interface PageConfig {
  pageNum: number
  pageSize: number
  total: number
}

// 分页的数据
const pageConfig: PageConfig = reactive({
  pageNum: 1,
  pageSize: 10,
  total: 0
})

// 获取tabs下面的数据
const data: Data = reactive({ artData: [] })
let currentIndex: string = ""
const handleGetTabsData = (val: string) => {
  currentIndex = val
  data.artData = []
  getHomeArticleList({ pageNum: pageConfig.pageNum, pageSize: pageConfig.pageSize, tag: val ? val : "" }).then((res) => {
    data.artData = res.data.list
    pageConfig.total = res.data.total
  })
}

// 跳转至详情
const router = useRouter()
const handleGotoDetail = (id: number) => {
  router.push({ path: "/details", query: { id } })
}

// 跳转至网站
const handleGoto = (val: string) => {
  switch (val) {
    case "zhihu":
      window.open("https://www.zhihu.com/people/bu-qi-64-11")
      break
    case "weixin":
      break

    case "git":
      window.open("https://github.com/orangeed")
      break
    default:
      break
  }
}

// 获取查询的信息
emitter.on("SEARCH_DATA", (val: any) => {
  data.artData = val.list
  pageConfig.total = val.total
})

// 当前页发生改变时的回调函数
const handleChangePageNum = (val: number) => {
  data.artData = []
  pageConfig.pageNum = val
  getHomeArticleList({ pageNum: pageConfig.pageNum, pageSize: pageConfig.pageSize, tag: currentIndex ? currentIndex : "" }).then((res) => {
    data.artData = res.data.list
    pageConfig.total = res.data.total
  })
}

// 当前分页大小发生改变时的回调函数
const handleChangePageSize = (val: number) => {
  pageConfig.pageNum = 1
  data.artData = []
  pageConfig.pageSize = val
  getHomeArticleList({ pageNum: pageConfig.pageNum, pageSize: pageConfig.pageSize, tag: currentIndex ? currentIndex : "" }).then((res) => {
    data.artData = res.data.list
    pageConfig.total = res.data.total
  })
}
</script>

<style lang="scss">
#index {
  .about-me {
    .n-image > img {
      width: 132px;
      height: 132px;
      border-radius: 9999px;
    }
  }
}
#busuanzi_container_site_pv {
  display: block !important;
}
#busuanzi_container_site_uv {
  display: block !important;
}
</style>
<style>
@media screen and (max-width: 1240px) {
  body {
    font-size: 14px !important;
  }
  .acr-img {
    height: 110px;
  }
  .index-box {
    @apply flex flex-wrap flex-col pl-10 pr-10;
  }
  .about-me {
    margin-right: 2rem;
  }
  .o-icon {
    @apply text-center text-gray-500;
  }
  .content {
    @apply pl-4 pr-4;
  }
  #artCard {
    @apply flex-col;
  }
  #artCard .arc-info {
    @apply h-14 flex items-center;
    margin-bottom: -24px;
  }
  #artCard .o-tag {
    display: none;
  }
  #artCard .o-title {
    display: flex;
    align-items: center;
  }
  #artCard .o-time {
    display: none;
  }
  #artCard .img {
    display: flex;
    justify-content: center;
  }
  /* :deep(.n-back-top) {
    right: 10px !important;
  } */
}
@media screen and (min-width: 1241px) {
  body {
    font-size: 16px !important;
  }
  .acr-img {
    height: 100px;
  }
  .index-box {
    @apply flex flex-wrap pl-40 pr-40;
  }
  .o-icon {
    @apply text-left text-gray-500;
  }
  .content {
    @apply pl-24;
  }
  #artCard {
    @apply flex-row;
  }
  #artCard .o-tag {
    display: block;
  }
  #artCard .o-title {
    /* display: block; */
  }
  #artCard .o-time {
    display: block;
  }
  #artCard .img {
  }
}
</style>
