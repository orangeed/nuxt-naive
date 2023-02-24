import request from "../utils/request"

interface GetMovieList {
  pageSize: number
  pageNum: number
  type?: number // 0为电视剧 1为电影 不传是所有的
  name?: string
}

interface GetMovie {
  id: string
}

export const getMovieList = (params: GetMovieList): Promise<any> => {
  return request({
    url: "/movies/list",
    method: "GET",
    params
  })
}

export const getMovie = (params: GetMovie): Promise<any> => {
  return request({
    url: "/movie",
    method: "GET",
    params
  })
}
