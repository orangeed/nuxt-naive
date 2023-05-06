<template>
  <div class="content" style="flex: 3">
    <p class="text-2xl font-familg-regular font-normal">最近文章</p>
    <n-tabs type="line" animated size="large" :on-update:value="handleChangeTabs">
      <n-tab-pane name="" tab="全部">
        <div
          v-for="item in data.artData"
          :key="item.id"
          class="mt-4 mb-4 mr-4 cursor-pointer ccard"
          @click.stop="handleGotoDetail(item.id)"
        >
          <ArtCard :item="item" />
        </div>
      </n-tab-pane>
      <n-tab-pane name="0" tab="JS/TS">
        <div v-for="item in data.artData" :key="item.id" class="mt-4 mb-4 cursor-pointer" @click.stop="handleGotoDetail(item.id)">
          <ArtCard :item="item" />
        </div>
      </n-tab-pane>
      <n-tab-pane name="1" tab="Vue">
        <div v-for="item in data.artData" :key="item.id" class="mt-4 mb-4 cursor-pointer" @click.stop="handleGotoDetail(item.id)">
          <ArtCard :item="item" />
        </div>
      </n-tab-pane>
      <n-tab-pane name="2" tab="Python">
        <div v-for="item in data.artData" :key="item.id" class="mt-4 mb-4 cursor-pointer" @click.stop="handleGotoDetail(item.id)">
          <ArtCard :item="item" />
        </div>
      </n-tab-pane>
    </n-tabs>
    <div class="flex justify-center" v-if="pageConfig.total > 0">
      <n-pagination
        v-model:page="pageConfig.pageNum"
        v-model:page-size="pageConfig.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :page-count="Math.ceil(pageConfig.total / pageConfig.pageSize)"
        size="large"
        show-quick-jumper
        show-size-picker
        :on-update:page="handleChangePageNum"
        :on-update:page-size="handleChangePageSize"
      />
    </div>
  </div>
  <n-modal v-model:show="isShowArticleDetail" preset="dialog" title="Dialog" style="width: 80%; margin: 40px auto">
    <Detail />
  </n-modal>
</template>

<script lang="ts" setup name="articleCom">
import { Ref, ref, reactive, defineProps } from "vue"
import { getHomeArticleList } from "../server/home"
import { useRouter } from "vue-router"
import Detail from "../pages/details.vue"

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

const props = defineProps(["is3D"])

// 分页的数据
const pageConfig: PageConfig = reactive({
  pageNum: 1,
  pageSize: 10,
  total: 0
})

// 切换tabs的事件
const handleChangeTabs = (val: string) => {
  // 通过val去查询对应字段的数据
  pageConfig.pageNum = 1
  handleGetTabsData(val)
  // @ts-ignore
  event.stopPropagation()
}

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
handleGetTabsData("")

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

// 跳转至详情
const router = useRouter()
const isShowArticleDetail: Ref<boolean> = ref(false)
const handleGotoDetail = (id: number) => {
  console.log("xxx", props.is3D)
  if (props.is3D === undefined) {
    isShowArticleDetail.value = true
  } else {
    router.push({ path: "/details", query: { id } })
  }
}
</script>

<style lang="scss" scoped></style>
