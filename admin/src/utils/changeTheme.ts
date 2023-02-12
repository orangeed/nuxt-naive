/*
 * @Author: orange
 * @Date: 2022-11-26 20:32:46
 * @LastEditors: orange
 * @LastEditTime: 2022-11-26 20:32:50
 * @FilePath: \nuxt-naive\admin\src\utils\changeTheme.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import { onMounted, reactive } from "vue";
import { emitter } from "./mitt";

export const changeTheme = () => {
  const themeData = reactive({
    isDark: false,
  });
  const handleChangeThemes = () => {
    themeData.isDark = !themeData.isDark;
    if (themeData.isDark) {
      window.document.documentElement.setAttribute("data-theme", "light");
      window.document.documentElement.setAttribute("class", "light");
    } else {
      window.document.documentElement.setAttribute("data-theme", "dark");
      window.document.documentElement.setAttribute("class", "dark");
    }
    emitter.emit("THEME", themeData.isDark);
  };
  onMounted(() => {
    handleChangeThemes();
  });
  return { themeData, handleChangeThemes };
};
