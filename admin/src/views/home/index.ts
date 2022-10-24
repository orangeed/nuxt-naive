import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "",
  components: {},
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
