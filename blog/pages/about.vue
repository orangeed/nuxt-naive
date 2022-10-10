<!--  -->
<template>关于</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'about',
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
