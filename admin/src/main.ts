/*
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 18:36:57
 * @FilePath: \nuxt-naive\admin\src\main.ts
 * @Description: main
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/tailwind.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/theme-chalk/dark/css-vars.css";
import "element-plus/dist/index.css";
import "./styles/index.scss";
import "./permission";
// 引入和风天气图标
import 'qweather-icons/font/qweather-icons.css'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.mount("#app");
