<!-- read -->
<template>
  <div id="movies">
    <div class="flex flex-wrap movie-card">
      <div v-for="(item, index) in moviesList" :key="index" class="movie-item" @click="handleShowContent(item.id)">
        <!-- <img :src="item.img" :alt="item.name" class="w-36 h-52 rounded-md" /> -->
        <img src="../assets/img/a.webp" class="w-36 h-52 rounded-md" />
        <p class="flex justify-start w-full">
          <span class="font-semibold ml-2 truncate">{{ item.name }}</span>
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
          <img src="../assets/img/a.webp" class="w-2/5" />
          <!-- <img :src="movieInfo.img" :alt="movieInfo.name" class="w-2/5 /> -->
          <div class="ml-3 movie-info">
            <p class="text-xl font-bold truncate">{{ movieInfo.name }}</p>
            <p class="font-sm text-slate-500">{{ movieInfo.time }}</p>
          </div>
        </div>
        <MarkdownEditor :editorText="movieInfo.content" style="height: auto" />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts" setup name="movies">
import { Ref, ref, reactive } from "vue"
import { getReadList, getRead } from "../server/read"
import Pagination from "../components/Pagination.vue"
import MarkdownEditor from "../components/MarkdownEditor.vue"

interface moviesList {
  id: string
  img: string // 封面
  name: string // 书籍名称
  time: string // 观看时间
  content: string // 观后感
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

const showContent: Ref<boolean> = ref(false)

const movieInfo: MovieInfo = reactive({
  id: "",
  img: "",
  name: "",
  time: "",
  content: ""
})

// 获取影视列表
const handleGetMovies = () => {
  pageConfig.total = 0
  getReadList({ pageNum: pageConfig.pageNum, pageSize: pageConfig.pageSize }).then((res) => {
    moviesList.value = res.data.list
    pageConfig.total = res.data.total
  })
}
handleGetMovies()

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
  getRead({ id }).then((res) => {
    console.log("点击封面的时候", res)
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
