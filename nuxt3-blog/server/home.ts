import request from "../utils/request"

interface GetHomeArticleList {
  pageNum: number
  pageSize: number
  title?: string
  tag?: string
}

export const getHomeArticleList = (params: GetHomeArticleList): Promise<any> => {
  return request({
    url: "/article/findeActicle",
    method: "GET",
    params
  })
}
