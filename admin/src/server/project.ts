import { CreateProject, ProjectForm } from "../types/views/project.type"
import request from "../utils/request"

// 新增项目
export const createProject = (data: CreateProject): Promise<any> => {
  return request({
    url: "/project",
    method: "POST",
    data
  })
}

// 查询项目列表
export const findProject = (params: ProjectForm): Promise<any> => {
  return request({
    url: "/project",
    method: "GET",
    params
  })
}

// 查询一个项目
export const findOneProject = (id: string | number): Promise<any> => {
  return request({
    url: `/project/${id}`,
    method: "GET"
  })
}

// 编辑一个项目
export const updateOneProject = (id: string | number, data: CreateProject): Promise<any> => {
  return request({
    url: `/project/${id}`,
    method: "PATCH",
    data
  })
}

// 删除一个项目
export const deleteOneProject = (id: string | number): Promise<any> => {
  return request({
    url: `/project/${id}`,
    method: "DELETE"
  })
}
