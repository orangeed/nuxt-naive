import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { storageEnum } from "./enum";
import { getStorge } from "./storage";

const service = axios.create({
  // baseURL: import.meta.env.VITE_GLOB_API_URL,
  // baseURL: "/apis",
  // baseURL: "http://127.0.0.1:3000",
  baseURL: "https://www.api.orangecj.cn/",
  withCredentials: true,
  timeout: 30000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // @ts-ignore
    config.headers["Authorization"] = `Bearer ${getStorge(
      storageEnum.Authorization
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data.data);
    } else {
      ElMessage.error(response.data.message);
      return Promise.reject(response.data.message);
    }
  },
  (error) => {
    ElMessage.error(
      error.response.data.message
        ? error.response.data.message
        : error.response.statusText
    );
    return Promise.reject(error);
  }
);

export default service;
