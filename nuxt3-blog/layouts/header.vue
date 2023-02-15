<template>
  <header class="sticky w-full pb-24 pt-24">
    <div class="header flex items-center">
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
            <!-- <template #checked-icon #checked>
              <n-icon :component="Moon" size="20" />
            </template>
            <template #unchecked-icon #unchecked>
              <n-icon
                :component="SunnyOutline"
                size="=20"
                class="text-orange-500"
              />
            </template> -->
            <template #checked>浅</template>
            <template #unchecked>深</template>
          </n-switch>
        </div>
      </div>
    </div>
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
            <n-button type="primary" class="ml-3" @click="handlePass"> 确定 </n-button>
          </div>
        </template>
      </n-card>
    </n-modal>
  </header>
</template>

<script setup lang="ts">
import { SearchOutline, GlassesOutline, Glasses } from "@vicons/ionicons5"
import { ref, reactive, CSSProperties, watch, Ref } from "vue"
import { darkTheme, useMessage } from "naive-ui"
import { emitter } from "../utils/mitt"
import { setStorage } from "~~/utils/storage"
import { useRouter, useRoute } from "vue-router"

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
    {
      id: 2,
      name: "相册",
      path: "/album",
      lock: true
    },
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
    style.background = "#ffa500"
    if (focused) {
      style.boxShadow = "0 0 0 2px #d0305040"
    }
  } else {
    style.background = "#101014"
    if (focused) {
      style.boxShadow = "0 0 0 2px #2080f040"
    }
  }
  return style
}

// 查询
const handleSubmit = () => {
  console.log("查询", search.value)
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
          console.log(111)
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
</style>
