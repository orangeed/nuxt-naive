<!-- movies -->
<template>
  <div id="movies">
    <div class="flex flex-wrap movie-card">
      <n-tabs type="segment" :on-update:value="handleChangeTabs" class="movie-tab">
        <n-tab-pane name="1" tab="电影"></n-tab-pane>
        <n-tab-pane name="0" tab="电视剧"></n-tab-pane>
      </n-tabs>
      <div v-for="(item, index) in moviesList" :key="index" class="movie-item" @click.stop="handleShowContent(item.id)">
        <img :src="item.img" class="w-36 h-52 rounded-md" />
        <p class="flex justify-start w-full">
          <n-tag type="warning" round size="small"
            ><span class="text-xs">{{ item.type === 1 ? "电影" : "电视剧" }}</span></n-tag
          >

          <n-tooltip trigger="hover">
            <template #trigger>
              <span class="font-semibold ml-2 truncate">{{ item.name }}</span>
            </template>
            <span> {{ item.name }} </span>
          </n-tooltip>
        </p>
      </div>
      <div class="w-full flex justify-end mt-10">
        <Pagination
          :page-num="pageConfig.pageNum"
          :page-size="pageConfig.pageSize"
          :total="pageConfig.total"
          @CHANGE_PAGENUM="handleChangePageNum"
          @CHANGE_PAGESIZE="handleChangePageSize"
        />
      </div>
    </div>
    <n-drawer v-model:show="showContent" class="movie-drawer" placement="right">
      <n-drawer-content>
        <div class="flex">
          <img :src="movieInfo.img" class="w-2/5" />
          <div class="ml-3 movie-info">
            <p>
              <n-tag type="warning" round size="small"
                ><span class="text-xs">{{ movieInfo.type === 1 ? "电影" : "电视剧" }}</span></n-tag
              >
            </p>
            <p class="text-xl font-bold">{{ movieInfo.name }}</p>
            <p>评分：<n-rate readonly :default-value="Number(movieInfo.score)" allow-half /></p>
            <p class="font-sm text-slate-500">上架时间：{{ movieInfo.time }}</p>
          </div>
        </div>
        <p>简介：</p>
        <p class="text-sm">{{ movieInfo.introduction }}</p>
        <p>观后感：</p>
        <p class="text-sm">{{ movieInfo.content }}</p>
        <!-- <MarkdownEditor :editorText="movieInfo.content" style="height: auto" /> -->
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts" setup name="movies">
import { Ref, ref, reactive } from "vue"
import { getMovieList, getMovie } from "../server/movies"
import Pagination from "../components/Pagination.vue"
import MarkdownEditor from "../components/MarkdownEditor.vue"

interface moviesList {
  id: string
  img: string // 封面
  name: string // 电影名称
  type: number // 0为电视剧 1为电影
  time: string // 观看时间
  content: string // 观后感
  score: number
  introduction: string
}

interface PageConfig {
  pageNum: number
  pageSize: number
  total: number
}

interface MovieInfo extends moviesList {}

const moviesList: Ref<moviesList[]> = ref([])

const pageConfig: PageConfig = reactive({
  pageNum: 1,
  pageSize: 10,
  total: 0
})

const type: Ref<number> = ref(1)

const showContent: Ref<boolean> = ref(false)

const movieInfo: MovieInfo = reactive({
  id: "",
  img: "",
  name: "",
  type: 0,
  time: "",
  content: "",
  score: 0,
  introduction: ""
})

// 获取影视列表
const handleGetMovies = () => {
  pageConfig.total = 0
  getMovieList({ pageNum: pageConfig.pageNum, pageSize: pageConfig.pageSize, type: type.value }).then((res) => {
    moviesList.value = res.data.list
    pageConfig.total = res.data.total
  })
}
handleGetMovies()

// tabs改变
const handleChangeTabs = (val: number) => {
  type.value = Number(val)
  pageConfig.pageNum = 1
  pageConfig.pageSize = 10
  handleGetMovies()
}

// 当前页改变的时候
const handleChangePageNum = (val: number) => {
  pageConfig.pageNum = val
  handleGetMovies()
}

// 页码改变的时候
const handleChangePageSize = (val: number) => {
  pageConfig.pageSize = val
  handleGetMovies()
}

// 点击封面的时候
const handleShowContent = (id: string) => {
  showContent.value = true
  getMovie({ id }).then((res) => {
    Object.assign(movieInfo, res.data)
  })
}
</script>

<style lang="scss" scoped>
#movies {
  .movie-item {
    transition: all 0.5s;
    @apply hover:shadow-lg hover:shadow-gray-300;
  }
}
</style>
