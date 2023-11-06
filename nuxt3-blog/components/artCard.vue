<!-- artCard -->
<template>
  <div class="flex pl-2" id="artCard">
    <!-- 图片 -->
    <div class="img mr-4 rounded-lg">
      <n-image :src="item.img" class="acr-img" />
    </div>
    <div class="arc-info">
      <span class="o-tag">
        <n-tag :bordered="false" type="warning" v-for="(tag, index) in item.tags" :key="index" class="mr-2" size="small" round>
          {{ tag !== "" ? stateList[Number(tag)].label : "" }}
        </n-tag>
      </span>
      <p class="text-base xl:text-xl m-1 o-title">
        {{ item.title }}
      </p>
      <p class="mt-1 o-time">
        <span class="text-xs text-stone-400">更新时间：{{ item.updateTime }}</span>
      </p>
    </div>
  </div>
  <n-divider />
</template>

<!-- <script lang="ts" src="./artCard.ts" /> -->
<script lang="ts">
import { defineComponent, reactive, toRefs, PropType } from "vue"
import { stateList } from "../utils/state"

export default defineComponent({
  name: "artCard",
  components: {},
  props: {
    item: {
      type: Object as PropType<any>,
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
// #artCard {
//   img {
//     border-radius: 10px;
//   }
// }
</style>

<style lang="scss">
#artCard {
  position: relative;
  display: flex;
  align-items: center;
  img {
    border-radius: 10px;
  }
}
</style>
