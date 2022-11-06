import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "artCard",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
