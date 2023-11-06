<!-- nav -->
<template>
  <div id="movies">
    <div class="flex flex-wrap movie-card">
      <aside>
        <div
          v-for="(item, index) in leftMenu"
          :key="index"
          :class="[
            item.id === currentMenu ? 'bg-orange-400 text-white' : '',
            'p-3 cursor-pointer rounded-md transition-all hover:bg-orange-100'
          ]"
          @click="handleChangeMenu(item)"
        >
          {{ item.label }}
        </div>
      </aside>
      <main class="pl-10 pr-10 flex-1 flex justify-start">
        <div v-if="rightMain.length > 0" class="flex flex-wrap justify-start">
          <div v-for="(item, index) in rightMain" :key="index" @click="handleClickMenu(item)">
            <n-tooltip placement="bottom" trigger="hover">
              <template #trigger>
                <div class="flex-1 flex flex-col w-24 h-28 ml-7 mr-7 cursor-pointer mb-4 hover:bg-orange-100 p-3 rounded-md">
                  <img :src="item.img" :alt="item.name" style="height: 88px; border-radius: 10px" class="w-24" />
                  <span class="truncate w-24">{{ item.name }}</span>
                </div>
              </template>
              <span class="truncate w-24">{{ item.name }}</span>
            </n-tooltip>
          </div>
        </div>
        <div v-else>别看了，暂时还没写有啥东西呢，或者你可以一起共创！</div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup name="nav">
import { ref, Ref } from "vue"
import { useDialog, useMessage } from "naive-ui"

interface LeftMenu {
  label: string
  id: number
  checked: boolean
}

interface RightMain {
  name: string
  img: string
  describe: string
}

// 左边菜单
const leftMenu: Ref<LeftMenu[]> = ref([
  {
    id: 1,
    label: "软件",
    checked: true
  },
  {
    id: 2,
    label: "收藏的网站",
    checked: false
  },
  {
    id: 3,
    label: "js脚本",
    checked: false
  },
  {
    id: 4,
    label: "python脚本",
    checked: false
  },
  {
    id: 5,
    label: "人生进度器",
    checked: false
  }
])

// 右边内容页面
const rightMain: Ref<RightMain[]> = ref([
  {
    name: "",
    img: "",
    describe: ""
  }
])

// 软件
const softList: RightMain[] = [
  {
    name: "autojs 4.1.1 去更新版",
    img: "https://s1.ax1x.com/2023/07/14/pC4bH7d.png",
    describe:
      "关注公众号【橘子的分享】，回复autojs获取下载链接。这个是最开始的免费版，取消了插件等几个功能，不然点击到了就会闪退。毕竟这个版本很久不维护了，但是能用。"
  },
  {
    name: "Internet Download Manager",
    img: "https://s1.ax1x.com/2023/07/14/pC4qo80.png",
    describe: "关注公众号【橘子的分享】，回复IDM获取下载链接。网页嗅探器，可以下载网页上识别到的媒体，比如视频或者照片等。"
  }
]

// js脚本
const jsList: RightMain[] = [
  {
    name: "autojs大麦网常规版",
    img: "https://s1.ax1x.com/2023/07/16/pCIwMHH.png",
    describe: "关注公众号【橘子的分享】，回复 常规大麦 获取下载链接。"
  },
  {
    name: "autojs大麦网预设观影人版",
    img: "https://s1.ax1x.com/2023/07/16/pCIwMHH.png",
    describe: "关注公众号【橘子的分享】，回复 预设大麦 获取下载链接。"
  }
]

// 当前选中的菜单id
const currentMenu: Ref<number> = ref(1)
rightMain.value = softList

// 选择菜单
const handleChangeMenu = (menu: LeftMenu) => {
  currentMenu.value = menu.id
  switch (menu.id) {
    case 1:
      rightMain.value = softList
      break
    case 3:
      rightMain.value = jsList
      break

    default:
      rightMain.value = []
      break
  }
}

// 显示信息
const message = useMessage()
const handleShowMessage = () => {
  message.warning("图片使用的国外的图床，访问速度有点慢，打算下个月服务器过期后，重新买一个服务器搭建自己的图床(如果经济宽裕的话)", {
    closable: true,
    duration: 10000
  })
}
handleShowMessage()

// 点击图片
const dialog = useDialog()
const handleClickMenu = (menu: RightMain) => {
  dialog.info({ title: menu.name, content: menu.describe, positiveText: "收到" })
}
</script>
<style lang="scss" scoped></style>
