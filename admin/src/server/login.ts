/*
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 17:43:47
 * @FilePath: \nuxt-naive\admin\src\server\login.ts
 * @Description: 登录的接口函数
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import request from "../utils/request";
import { Login } from "./interface";

export const login = (data: Login): Promise<any> => {
  return request({
    url: "/user/login",
    method: "POST",
    data,
  });
};
