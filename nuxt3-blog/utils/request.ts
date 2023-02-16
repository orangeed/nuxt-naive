import axios, { AxiosResponse } from "axios"
import { useMessage } from "naive-ui"
const message = useMessage()

const getAuthToken = () => {
  return window.sessionStorage.getItem("TOKEN")
}

const service = axios.create({
  // baseURL: import.meta.env.VITE_GLOB_API_URL,
  baseURL: "http://127.0.0.1:3000",
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
