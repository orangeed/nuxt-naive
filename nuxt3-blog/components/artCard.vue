<!-- artCard -->
<template>
  <div class="flex" id="artCard">
    <!-- 图片 -->
    <div class="img mr-4 rounded-lg">
      <n-image :src="item.img" width="100" />
    </div>
    <div>
      <n-tag :bordered="false" type="warning" v-for="(tag, index) in item.tags" :key="index" class="mr-2" size="small" round>
        {{ stateList[index].label }}
      </n-tag>
      <p class="text-xl m-1">
        {{ item.title }}
      </p>
      <p class="mt-1">
        <span class="text-sm text-stone-400">更新时间：{{ item.updateTime }}</span>
      </p>
    </div>
  </div>
  <n-divider />
</template>

<!-- <script lang="ts" src="./artCard.ts" /> -->
<script>
import { defineComponent, reactive, toRefs } from "vue"
import { stateList } from "../utils/state"

export default defineComponent({
  name: "artCard",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
      stateList
    }
  }
})
</script>
<style lang="scss" scoped>
#artCard {
  img {
    border-radius: 10px;
  }
}
</style>

<style lang="scss">
#artCard {
  img {
    border-radius: 10px;
  }
}
</style>
