import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  withCredentials: true,
  timeout: 30000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
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
      return Promise.reject(response.data.message);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
