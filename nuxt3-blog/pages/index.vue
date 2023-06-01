<template>
  <div id="index">
    <div class="nomal-box">
      <div class="index-box">
        <div class="flex-1 about-me text-center">
          <n-image src="../assets/img/header.jpg" />
          <p class="text-xl">橘子</p>
          <p class="text-left">菜鸡小前端一个，本科毕业。这里的文章主要是记录工作、学习以及生活。还有个公众号：【橘子的分享】</p>
          <div class="o-icon">
            <n-icon
              :component="Zhihu"
              size="40"
              class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1 cursor-pointer"
              @click="handleGoto('zhihu')"
            />
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
            <n-icon
              :component="Github"
              size="40"
              class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1 cursor-pointer"
              @click="handleGoto('git')"
            />
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
        <Article :is3D="is3D" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Ref, reactive, ref } from "vue"
import { Zhihu, Weixin, Github } from "@vicons/fa"
import { emitter } from "../utils/mitt"
import Three from "~~/components/three.vue"
import Article from "~~/components/article.vue"

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

// 接收3D
const is3D: Ref<boolean> = ref(false)
const handle3D = () => {
  emitter.on("3DMODEL", (val: any) => {
    is3D.value = val
  })
}
handle3D()
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
  .nomal-box {
    position: relative;
    overflow: hidden;
    transition: all 1s;
  }
}
#busuanzi_container_site_pv {
  display: block !important;
}
#busuanzi_container_site_uv {
  display: block !important;
}
.ccard > #artCard::before {
  content: "";
  position: absolute;
  left: 0px;
  width: 2px;
  height: 60px;
  background-color: #fd5800;
  top: 50%;
  transform: translate(0, -50%);
  opacity: 0;
}
.ccard > #artCard:hover::before {
  content: "";
  position: absolute;
  left: 0px;
  width: 2px;
  height: 60px;
  background-color: #fd5800;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 0.7s;
  opacity: 1;
}
</style>
