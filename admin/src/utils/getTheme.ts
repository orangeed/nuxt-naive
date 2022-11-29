/*
 * @Author: orange
 * @Date: 2022-11-25 22:12:49
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 22:58:02
 * @FilePath: \nuxt-naive\admin\src\utils\getTheme.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import { emitter } from "./mitt";
export const useTheme = () => {
  return new Promise((resolve, reject) => {
    emitter.on("THEME", (val: any) => {
      console.log("THEME", val);
      resolve(val);
    });
  });
};
