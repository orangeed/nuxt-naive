import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "person",
  components: {},
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
