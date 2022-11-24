import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { LoginForm } from "./type";

export default defineComponent({
  name: "",
  components: {},
  setup() {
    const router = useRouter();
    const handleGoToIndex = () => {
      router.push("/");
    };
    const loginForm: LoginForm = reactive({
      username: "",
      password: "",
    });
    return {
      loginForm,
      handleGoToIndex,
    };
  },
});
