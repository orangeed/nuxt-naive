import { UserForm } from "../types/views/person.type"
import request from "../utils/request"

// 获取用户信息
export const getUserInfo = (params: { username: string }): Promise<any> => {
  return request({
    url: "/users/userInfo",
    method: "GET",
    params
  })
}

// 获取用户信息
export const updateUserInfo = (data: UserForm): Promise<any> => {
  return request({
    url: `/users/userInfo/${data.id}`,
    method: "PATCH",
    data
  })
}
