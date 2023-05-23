<template>
  <footer class="mt-16 h-24 flex flex-col justify-center items-center">
    <slot />
    <p class="cursor-pointer text-hover" @click="handleToGov">蜀ICP备2022021714号-1 </p>
    <p> Copyright © 2022-2023 by orange <span class="cursor-pointer text-hover" @click.stop="isUpdateCom = true">更新说明
      </span>
    </p>
  </footer>
  <n-modal v-model:show="isUpdateCom" preset="dialog" title="" size="huge" role="dialog" aria-modal="true"
    style="width: 50%; margin: 40px auto">
    <UpdateCom />
  </n-modal>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
import UpdateCom from '../components/update.vue'


const handleToGov = () => {
  window.open("https://beian.miit.gov.cn/", "_black")
}

// 是否打开更新
const isUpdateCom: Ref<boolean> = ref(false)

</script>

<style scoped lang="scss">
footer {
  @apply text-sm;
}

.text-hover {
  transition: all 0.5s;
}

.text-hover:hover {
  color: orange;
}
</style>
