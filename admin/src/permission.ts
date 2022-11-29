/*
 * @Author: orange
 * @Date: 2022-11-25 18:08:34
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 21:29:14
 * @FilePath: \nuxt-naive\admin\src\permission.ts
 * @Description: permission
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import router from "./router";
import { getStorge } from "./utils/storage";
const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  // console.log("from", from);
  // console.log("to", to);
  const hasToken = getStorge("TOKEN");
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
