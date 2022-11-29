/*
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 22:05:51
 * @FilePath: \nuxt-naive\admin\src\views\dashboard\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import { defineComponent, Ref } from "vue";
import { emitter } from "../../utils/mitt";
import { getStorge } from "../../utils/storage";

export default defineComponent({
  name: "",
  components: {},
  setup() {
    const theme: Ref<string> = ref("");
    emitter.on("THEME", (val: any) => {
      console.log("THEME", val);
      theme.value = val;
    });
    return {
      theme,
    };
  },
});
