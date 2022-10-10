<!--  -->
<template>
  头部
  <slot />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'header',
  components: {},
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style lang="scss" scoped></style>
