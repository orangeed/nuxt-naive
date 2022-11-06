/**
 * 获取缓存
 * @param key
 * @param value
 * @returns
 */
export const getStorage = (key: string) => {
  if (!key) throwError("没有key！");
  if (!window.localStorage.getItem(key)) throwError("没有获取到数据！");
  const value = window.localStorage.getItem(key) as string;
  console.log("value", value);
  return JSON.parse(value);
};

/**
 * 保存缓存
 * @param key
 * @param value
 * @returns
 */
export const setStorage = (key: string, value: any) => {
  if (!key) throwError("没有key！");
  if (!value) throwError("没有value！");
  window.localStorage.setItem(key, value);
};

/**
 * 清除指定的缓存
 * @param key
 * @returns
 */
export const removeStorage = (key: string) => {
  if (!key) throwError("没有key！");
  window.localStorage.removeItem(key);
};

/**
 * 清除所有缓存
 * @returns
 */
export const clearStorage = () => {
  window.localStorage.clear();
};
