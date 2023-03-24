import { ReadList } from "../types/server/index.type"
import { CreateBook } from "../types/views/read.type"
import request from "../utils/request"

// 查询图书馆列表
export const readList = (params: ReadList): Promise<any> => {
  return request({
    url: "/read/list",
    method: "GET",
    params
  })
}

// 上架一个书籍
export const createRead = (data: CreateBook): Promise<any> => {
  return request({
    url: "/read",
    method: "POST",
    data
  })
}

// 通过id找一个
export const findOneRead = (id: number | string): Promise<any> => {
  return request({
    url: `/read/${id}`,
    method: "GET"
  })
}

// 编辑一本图书
export const upDateOneRead = (id: number | string, data: CreateBook): Promise<any> => {
  return request({
    url: `/read/${id}`,
    method: "Patch",
    data
  })
}

// 删除一本图书
export const deleteOneRead = (id: number | string): Promise<any> => {
  return request({
    url: `/read/${id}`,
    method: "DELETE"
  })
}
