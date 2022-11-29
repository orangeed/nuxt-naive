/*
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-25 21:24:22
 * @FilePath: \nuxt-naive\admin\src\utils\storage.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
export const getStorge = (key: string) => {
  const value: any = localStorage.getItem(key);
  console.log("value", value);
  if (value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "String"
      ? value
      : JSON.parse(value);
  } else {
    return "";
  }
};

export const setStorge = (key: string, value: any) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeToken = (key: string) => {
  localStorage.removeItem(key);
};

export const clearStorge = () => {
  localStorage.clear();
};
