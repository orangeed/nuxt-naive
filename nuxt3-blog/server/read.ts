import request from "../utils/request"

interface GetReadList {
  pageSize: number
  pageNum: number
  name?: string
}

interface GetRead {
  id: string
}

export const getReadList = (params: GetReadList): Promise<any> => {
  return request({
    url: "/read/list",
    method: "GET",
    params
  })
}

export const getRead = (params: GetRead): Promise<any> => {
  return request({
    url: "/read",
    method: "GET",
    params
  })
}
