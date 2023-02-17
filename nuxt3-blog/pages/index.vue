<template>
  <div class="pl-40 pr-40" id="index">
    <div class="flex">
      <div class="flex-1 about-me text-center">
        <!-- <p class="text-2xl text-left">个人简介</p> -->
        <n-image src="../assets/img/header.jpg" />
        <p class="text-xl">橘子</p>
        <p class="text-left">
          菜鸡小前端一个，本科毕业，现在就职于一个中小企业。这里的文章主要是记录工作或者学习或者生活。还有个公众号：【橘子的分享】
        </p>
        <div class="text-left text-gray-500">
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
      </div>
      <div class="flex-3 pl-24" style="flex: 3">
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
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from "vue"
import { useRouter } from "vue-router"
import { Zhihu, Weixin, Github } from "@vicons/fa"
import ArtCard from "../components/artCard.vue"
import { getHomeArticleList } from "../server/home"
import { login } from "../server/index"

login({ username: "orange", password: "c4ca4238a0b923820dcc509a6f75849b" }).then((res) => {
  window.sessionStorage.setItem("TOKEN", res.data.token)
})

// 切换tabs的事件
const handleChangeTabs = (val: string) => {
  console.log("切换tabs的事件", val)
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

// 获取tabs下面的数据
const data: Data = reactive({ artData: [] })
const handleGetTabsData = (val: string) => {
  data.artData = []
  console.log("val", val)
  getHomeArticleList({ pageNum: 1, pageSize: 10, tag: val ? val : "" }).then((res) => {
    console.log("获取tabs下面的数据", res)
    data.artData = res.data.list
    data.artData.forEach((v) => {
      v.img = "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    })
  })
}

onMounted(() => {
  handleGetTabsData("")
})

// 跳转至详情
const router = useRouter()
const handleGotoDetail = (id: number) => {
  console.log("跳转至详情", id)
  console.log("router", router)
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
</script>

<style lang="scss" scoped></style>

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
</style>
