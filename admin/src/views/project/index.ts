import { defineComponent, reactive, toRefs } from "vue"
export default defineComponent({
  name: "project",
  components: {},
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  }
})
