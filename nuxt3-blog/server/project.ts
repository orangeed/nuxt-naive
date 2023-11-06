import request from "../utils/request"

interface GetProjectList {
  pageSize: number
  pageNum: number
  name?: string
}

export const getProjectList = (params: GetProjectList): Promise<any> => {
  return request({
    url: "/project",
    method: "GET",
    params
  })
}
