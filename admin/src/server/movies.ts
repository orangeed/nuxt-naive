import { MoviesList } from "../types/server/index.type"
import { CreateMovies } from "../types/views/movies.type"
import request from "../utils/request"

// 查询电影电视剧列表
export const moviesList = (params: MoviesList): Promise<any> => {
  return request({
    url: "/movies/list",
    method: "GET",
    params
  })
}

// 新增电影电视剧
export const createMovies = (data: CreateMovies): Promise<any> => {
  return request({
    url: "/movies",
    method: "POST",
    data
  })
}

// 修改一个电影电视剧
export const updateMovie = (id: string | number, data: CreateMovies): Promise<any> => {
  return request({
    url: `/movies/${id}`,
    method: "PATCH",
    data
  })
}

// 查询一个电影电视剧
export const findOneMovie = (id: string | number): Promise<any> => {
  return request({
    url: `/movies/${id}`,
    method: "GET"
  })
}

// 删除一个电影电视剧
export const deleteOneMovie = (id: string | number): Promise<any> => {
  return request({
    url: `/movies/${id}`,
    method: "DELETE"
  })
}
