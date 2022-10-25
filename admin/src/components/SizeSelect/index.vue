<template>
  <el-dropdown trigger="click" @command="handleSetSize">
    <div>
      <svg-icon class-name="size-icon" icon-class="size" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item of sizeOptions"
        :key="item.value"
        :disabled="size === item.value"
        :command="item.value"
      >
        {{ item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
// export default {
//   data() {
//     return {
//       sizeOptions: [
//         { label: "Default", value: "default" },
//         { label: "Medium", value: "medium" },
//         { label: "Small", value: "small" },
//         { label: "Mini", value: "mini" },
//       ],
//     };
//   },
//   computed: {
//     size() {
//       return this.$store.getters.size;
//     },
//   },
//   methods: {
//     handleSetSize(size) {
//       this.$ELEMENT.size = size;
//       this.$store.dispatch("app/setSize", size);
//       this.refreshView();
//       this.$message({
//         message: "Switch Size Success",
//         type: "success",
//       });
//     },
//     refreshView() {
//       // In order to make the cached page re-rendered
//       this.$store.dispatch("tagsView/delAllCachedViews", this.$route);

//       const { fullPath } = this.$route;

//       this.$nextTick(() => {
//         this.$router.replace({
//           path: "/redirect" + fullPath,
//         });
//       });
//     },
//   },
// };
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
  nextTick,
} from "@vue/composition-api";
export default defineComponent({
  setup(props, { root }) {
    const data = reactive({
      sizeOptions: [
        { label: "Default", value: "default" },
        { label: "Medium", value: "medium" },
        { label: "Small", value: "small" },
        { label: "Mini", value: "mini" },
      ],
    });
    const size = computed(() => {
      return root.$store.getters.size;
    });

    const handleSetSize = (size) => {
      // root.$ELEMENT.size = size;
      root.$store.dispatch("app/setSize", size);
      refreshView();
      // this.$message({
      //   message: "Switch Size Success",
      //   type: "success",
      // });
    };
    const refreshView = () => {
      // In order to make the cached page re-rendered
      root.$store.dispatch("tagsView/delAllCachedViews", root.$route);

      const { fullPath } = root.$route;
      nextTick(() => {
        root.$router.replace({
          path: "/redirect" + fullPath,
        });
      });
    };
    return {
      ...toRefs(data),
      size,
    };
  },
});
</script>
