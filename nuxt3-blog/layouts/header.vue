<template>
  <header class="sticky w-full">
    <div class="header flex items-center header-pc">
      <div class="logo flex-1 text-center text-2xl">
        <span class="cursor-pointer" @click="handleGotoHome"> 橘子的分享</span>
      </div>
      <div class="flex-1 text-center text-base">
        <span
          v-for="item in headerData.menuList"
          :key="item.id"
          :class="['ml-6 mr-6 cursor-pointer', currentIndex === item.id ? 'active' : '']"
          @click="handleClickMenu(item.id, item.lock)"
        >
          <span v-if="item.path" @click="handleGotoPage(item.path, item.lock)">{{ item.name }}</span>
        </span>
      </div>
      <div class="flex-1 flex">
        <div class="flex-1 flex justify-end items-end">
          <n-input-group>
            <n-input v-model:value="search" placeholder="搜索" size="medium"></n-input>
            <n-input-group-label class="bg-orange-300 text-white border-none cursor-pointer" @click="handleSubmit()">
              <n-icon :component="SearchOutline" />
            </n-input-group-label>
          </n-input-group>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <n-switch size="medium" v-model:value="active" @update:value="handleChangeTheme" :rail-style="railStyle">
            <template #checked>
              <n-icon size="20" color="#fff"> <Moon /> </n-icon>
            </template>
            <template #unchecked>
              <n-icon size="20" color="#ffa500"> <Sunny /> </n-icon>
            </template>
          </n-switch>
          <n-button strong secondary class="ml-4" @click.stop="handleSelect3D"> 3D </n-button>
        </div>
      </div>
    </div>
    <div class="header flex items-center header-mobile">
      <div class="flex-1 text-center text-2xl">
        <n-icon :size="16" :component="Menu" class="cursor-pointer" @click="handleShowMenu" />
      </div>
      <div class="flex mr-6" style="flex: 3">
        <div class="flex-1 flex justify-end items-end">
          <n-input-group>
            <n-input v-model:value="search" placeholder="搜索" size="medium"></n-input>
            <n-input-group-label class="bg-orange-300 text-white border-none cursor-pointer" @click="handleSubmit()">
              <n-icon :component="SearchOutline" />
            </n-input-group-label>
          </n-input-group>
        </div>
      </div>
    </div>
    <!-- 手机端菜单 -->
    <n-drawer v-model:show="showDrawer" :width="300" placement="left">
      <n-drawer-content>
        <template #header>
          <span>菜单</span>
          <span class="mr-6 cursor-pointer flex flex-3 justify-end items-center ml-4">
            <n-switch size="medium" v-model:value="active" @update:value="handleChangeTheme" :rail-style="railStyle">
              <template #checked>
                <n-icon size="20" color="#fff"> <Moon /> </n-icon>
              </template>
              <template #unchecked>
                <n-icon size="20" color="#ffa500"> <Sunny /> </n-icon>
              </template>
            </n-switch>
            <n-button strong secondary class="ml-4" @click.stop="handleSelect3D"> 3D </n-button>
          </span>
        </template>

        <p
          v-for="item in headerData.menuList"
          :key="item.id"
          :class="['ml-6 mr-6 cursor-pointer']"
          @click="handleClickMenu(item.id, item.lock)"
        >
          <span :class="[currentIndex === item.id ? 'active' : '']" v-if="item.path" @click="handleGotoPage(item.path, item.lock)">{{
            item.name
          }}</span>
        </p>
      </n-drawer-content>
    </n-drawer>
    <slot name="header"> </slot>
    <!-- 密码输入框 -->
    <n-modal v-model:show="showPasswordModel">
      <n-card style="width: 600px" title="密码" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <n-input type="password" show-password-on="click" placeholder="请输入密码" v-model:value="password">
          <template #password-visible-icon>
            <n-icon :size="16" :component="GlassesOutline" />
          </template>
          <template #password-invisible-icon>
            <n-icon :size="16" :component="Glasses" />
          </template>
        </n-input>
        <template #footer>
          <div class="text-right">
            <n-button @click="handleClose"> 关闭</n-button>
            <n-button type="warning" class="ml-3" @click="handlePass"> 确定 </n-button>
          </div>
        </template>
      </n-card>
    </n-modal>
  </header>
</template>

<script setup lang="ts">
import { SearchOutline, GlassesOutline, Glasses, Menu, Moon, Sunny } from "@vicons/ionicons5"
import { ref, reactive, CSSProperties, watch, Ref } from "vue"
import { darkTheme, useMessage } from "naive-ui"
import { emitter } from "../utils/mitt"
import { setStorage } from "~~/utils/storage"
import { useRouter, useRoute } from "vue-router"
import { getHomeArticleList } from "../server/home"

const search = ref("")

// todo 这里的数据可以请求后端，后台配置，比如logo，菜单menu
const headerData = reactive({
  logo: "",
  menuList: [
    {
      id: 0,
      name: "首页",
      path: "/",
      lock: false
    },
    {
      id: 1,
      name: "关于",
      path: "/about",
      lock: false
    },
    // {
    //   id: 2,
    //   name: "相册",
    //   path: "/album",
    //   lock: true
    // },
    {
      id: 3,
      name: "阅读",
      path: "/read",
      lock: false
    },
    {
      id: 4,
      name: "影视",
      path: "/movies",
      lock: false
    }

    // Moon,
    // SunnyOutline,
  ]
})

// 切换晚上和白天模式
const active = ref(false)
const theme = ref<typeof darkTheme | null>(null)
const handleChangeTheme = () => {
  console.log("切换晚上和白天模式", active.value)
  if (active.value) {
    theme.value = darkTheme
  } else {
    theme.value = null
  }
  console.log("theme.value ", theme.value)
  if (theme.value) {
    setStorage("THEME", "dark")
  } else {
    setStorage("THEME", "light")
  }
  emitter.emit("theme", theme.value)
}

// 切换夜晚和白天的轨道样式
const railStyle = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
  const style: CSSProperties = {}
  if (checked) {
    style.background = "#323232"
    if (focused) {
      style.boxShadow = "0 0 0 2px #2080f040"
    }
  } else {
    style.background = "#e3e3e3"
    if (focused) {
      style.boxShadow = "0 0 0 2px #d0305040"
    }
  }
  return style
}

// 查询
const handleSubmit = () => {
  console.log("查询", search.value)
  getHomeArticleList({ pageNum: 1, pageSize: 10, title: search.value }).then((res) => {
    console.log("获取tabs下面的数据", res)
    // emit("SEARCH_DATA", res.data)
    emitter.emit("SEARCH_DATA", res.data)
  })
}

// 点击菜单按钮
// 当前选中的按钮索引
const currentIndex: Ref<number> = ref(0)
let idNumber: number
const handleClickMenu = (id: number, lock: boolean) => {
  console.log(id)
  if (lock) {
    idNumber = id
  } else {
    currentIndex.value = id
  }
}

// 跳转页面
const router = useRouter()
const showPasswordModel: Ref<boolean> = ref(false)
let pathStr: string = ""
const handleGotoPage = (path: string, lock: boolean) => {
  if (lock) {
    pathStr = path
    showPasswordModel.value = true
  } else {
    router.push(path)
    showDrawer.value = false
  }
}

// 确定密码
const password: Ref<string> = ref("")
const message = useMessage()
const handlePass = () => {
  if (!password.value) return message.error("请输入密码!")
  // TODO 如果输入密码的话,调用接口判断密码输入的是否正确,正确的跳转页面,不正确提示密码不正确.
  currentIndex.value = idNumber
  router.push(pathStr)
  showPasswordModel.value = false
  password.value = ""
  showDrawer.value = false
}

// 关闭弹窗
const handleClose = () => {
  showPasswordModel.value = false
  password.value = ""
}

// 跳转首页
const handleGotoHome = () => {
  router.replace("/")
  currentIndex.value = 0
}

const route = useRoute()
watch(
  route,
  (val: any) => {
    if (val) {
      headerData.menuList.forEach((v: any, i: number) => {
        if (v.path === val.path) {
          currentIndex.value = v.id
        }
      })
    }
  },
  {
    immediate: true,
    deep: true
  }
)

// 打开手机端菜单
const showDrawer: Ref<boolean> = ref(false)
const handleShowMenu = () => {
  // showDrawer.value != showDrawer.value
  if (showDrawer.value) {
    showDrawer.value = false
  } else {
    showDrawer.value = true
  }
}

// 显示3d模型
const handleSelect3D = () => {
  emitter.emit("3DMODEL", true)
}
</script>

<style lang="scss" scoped>
.active {
  padding-bottom: 8px;
  border-bottom: 2px solid red;
  transition: all 0.5s;
}

.logo {
  span {
    will-change: filter;
    padding: 30px;

    &:hover {
      transition: all 0.3s;
      filter: drop-shadow(0 0 30px rgb(255, 30, 0));
    }
  }
}
:deep(.n-drawer-header__main) {
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1240px) {
  header {
    @apply pb-10 pt-10;
  }
  .header-pc {
    display: none;
  }
  .header-mobile {
    display: flex;
  }
}
@media screen and (min-width: 1241px) {
  header {
    @apply pb-24 pt-24;
  }
  .header-pc {
    display: flex;
  }
  .header-mobile {
    display: none;
  }
}
</style>
