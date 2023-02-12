import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Pagination",
  components: {},
  props: {
    pageConfig: {
      type: Object,
      default: () => {
        return {
          current: 1,
          pageSize: 10,
          total: 0,
        };
      },
    },
  },
  emits: ["SIZE_CHANGE", "CURRENT_CHANGE"],
  setup(props, ctx) {
    // 分页页数
    const handleSizeChange = (val: string | number) => {
      ctx.emit("SIZE_CHANGE", val);
    };

    // 翻页
    const handleCurrentChange = (val: string | number) => {
      ctx.emit("CURRENT_CHANGE", val);
    };

    return {
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
