import request from "../utils/request"

interface GetHomeArticleList {
  pageNum: number
  pageSize: number
  title?: string
  tag?: string
}

interface GetHomeFindDetails {
  id: any
}

export const getHomeArticleList = (params: GetHomeArticleList): Promise<any> => {
  return request({
    url: "/article/findActicle",
    method: "GET",
    params
  })
}

export const getHomeFindDetails = (params: GetHomeFindDetails): Promise<any> => {
  return request({
    url: "/article/findDetails",
    method: "GET",
    params
  })
}
