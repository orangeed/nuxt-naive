/*
 * @Author: orange
 * @Date: 2022-11-06 22:28:08
 * @LastEditors: orange
 * @LastEditTime: 2022-11-20 10:54:18
 * @FilePath: \nuxt-naive\nuxt3-blog\utils\storage.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
/**
 * 获取缓存
 * @param key
 * @param value
 * @returns
 */
export const getStorage = (key: string) => {
  if (!key) Promise.reject("没有key！");
  if (!window.localStorage.getItem(key)) return null;
  const value = window.localStorage.getItem(key) as string;
  console.log("value", value);
  if (value.includes("{")) return JSON.parse(value);
  return value;
};

/**
 * 保存缓存
 * @param key
 * @param value
 * @returns
 */
export const setStorage = (key: string, value: any) => {
  if (!key) Promise.reject("没有key！");
  if (!value) Promise.reject("没有value！");
  window.localStorage.setItem(key, value);
};

/**
 * 清除指定的缓存
 * @param key
 * @returns
 */
export const removeStorage = (key: string) => {
  if (!key) Promise.reject("没有key！");
  window.localStorage.removeItem(key);
};

/**
 * 清除所有缓存
 * @returns
 */
export const clearStorage = () => {
  window.localStorage.clear();
};
