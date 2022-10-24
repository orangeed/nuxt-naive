import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "",
  components: {},
  setup() {
    const router = useRouter();
    const handleGoToIndex = () => {
      router.push("/");
    };
    return {
      handleGoToIndex,
    };
  },
});
