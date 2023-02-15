import request from "../utils/request"

interface Login {
  username: string
  password: string
}

export const login = (data: Login): Promise<any> => {
  return request({
    url: "/auth/login",
    method: "POST",
    data
  })
}
