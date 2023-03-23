import { ReadList } from "../types/server/index.type"
import request from "../utils/request"

// 查询图书馆列表
export const readList = (params: ReadList) => {
  return request({
    url: "/read/list",
    method: "GET",
    params
  })
}
