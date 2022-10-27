<!-- 详情 -->
<template>
  <div id="pageDetails" class="text-center text-amber-300">this is a pageDetails page</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "pageDetails",
  components: {},
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped></style>
