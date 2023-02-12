/*
 * @Author: orange
 * @Date: 2022-11-25 21:55:38
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 22:10:30
 * @FilePath: \nuxt-naive\admin\src\utils\mitt.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import mitt from "mitt";

type Events = {
  THEME: string | boolean;
};

export const emitter = mitt<Events>(); // inferred as Emitter<Events>
