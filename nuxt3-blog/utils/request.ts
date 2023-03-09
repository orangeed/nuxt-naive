import axios, { AxiosResponse } from "axios"
import { useMessage } from "naive-ui"
const message = useMessage()

const getAuthToken = () => {
  return window.sessionStorage.getItem("TOKEN")
}

const service = axios.create({
  // 本地开发
  // baseURL: "http://127.0.0.1:3000",
  // 线上
  baseURL: "https://www.api.orangecj.cn/",
  // mock
  // baseURL: "http://127.0.0.1:4523/m1/603885-0-default",
  timeout: 30000
})

service.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  (config: any) => {
    config.headers["Authorization"] = `Bearer ${getAuthToken()}`
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data)
    } else {
      message.error(response.data.message)
      return Promise.reject(response.data.message)
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default service
