/*
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 17:54:07
 * @FilePath: \nuxt-naive\admin\src\views\login\index.ts
 * @Description: 首页
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import { ElMessage } from "element-plus";
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { login } from "../../server/login";
import { setStorge } from "../../utils/storage";
import { LoginForm } from "./type";

export default defineComponent({
  name: "",
  components: {},
  setup() {
    const router = useRouter();
    const loginForm: LoginForm = reactive({
      username: "",
      password: "",
    });
    const handleLogin = () => {
      if (!loginForm.username) return ElMessage.error("请输入用户名！");
      if (!loginForm.password) return ElMessage.error("请输入密码！");
      login(loginForm).then((res) => {
        setStorge("TOKEN", res);
        router.push("/");
      });
    };
    return {
      loginForm,
      handleLogin,
    };
  },
});
