import request from "../utils/request"
import { ArticleList, CreateActicle } from "../types/server/index.type"

// 获取文章列表
export const articleList = (params: ArticleList): Promise<any> => {
  return request({
    url: "/article/findActicle",
    method: "GET",
    params
  })
}

// 保存文章
export const createActicle = (data: CreateActicle): Promise<any> => {
  return request({
    url: "/article/createActicle",
    method: "POST",
    data
  })
}

// 查找某一篇文章
export const findDetails = (params: { id: number }): Promise<any> => {
  return request({
    url: "/article/findDetails",
    method: "GET",
    params
  })
}

// 编辑文章
export const patchArticle = (data: any): Promise<any> => {
  return request({
    url: `/article/${data.id}`,
    method: "PATCH",
    data
  })
}

// 删除文章
export const deleteArticle = (id: number): Promise<any> => {
  return request({
    url: `/article/${id}`,
    method: "DELETE"
  })
}
