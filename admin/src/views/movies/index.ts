import { defineComponent, reactive, toRefs } from "vue"
export default defineComponent({
  name: "movies",
  components: {},
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  }
})
