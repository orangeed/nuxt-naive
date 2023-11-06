import { Injectable, Inject, forwardRef } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./users.entity"
import { Repository, Like, Raw, In } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { cryptoString } from "../libs/lib"
import * as generator from "generate-password"
import { stateCode } from "src/utils/enum"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  // 根据用户名查找
  async findOneByName(username: string): Promise<any> {
    return this.usersRepository.findOne({
      name: username
    })
  }

  // 更新密码
  async updatePassword(data): Promise<any> {
    const { id, body } = data
    const user = await this.usersRepository.findOne(id)

    let { oldPassword, password: newPassword } = body
    oldPassword = cryptoString(oldPassword)
    body.password = cryptoString(newPassword)

    const { password } = user
    if (password !== oldPassword) {
      return {
        statusCode: 400,
        message: "旧密码不正确。"
      }
    }

    body.updatedAt = new Date()
    delete body.oldPassword
    delete body.rePassword

    return await this.usersRepository.update(id, body)
  }

  // 重置密码
  async resetPassword(params): Promise<any> {
    const { id } = params

    const password = generator.generate({
      length: 10,
      numbers: true,
      symbols: false
    })

    const data = {
      password: cryptoString(password),
      updatedAt: new Date()
    }

    const result = await this.usersRepository.update(id, data)

    return {
      password,
      result
    }
  }

  // 修改用户信息
  async updateUserInfo(id, updateUserInfo): Promise<any> {
    if (!id) return { code: stateCode.findFail, message: "删除成功！", data: null }
    const data = await this.usersRepository.update({ id }, updateUserInfo)
    console.log("data", data)
    if (data.affected > 0) {
      return { code: stateCode.success, message: "更新成功！", data: null }
    } else {
      return { code: stateCode.cpdFail, message: "更新失败！", data: null }
    }
  }
  // 获取用户信息
  async getUserInfo(username: { username: string }): Promise<any> {
    const data = await this.usersRepository.findOne({ name: username.username })
    delete data.password
    return { code: stateCode.success, message: "查询成功！", data: data ? data : null }
  }

  // 新增一个用户
  async createUserInfo(userInfo: any): Promise<any> {
    let params = {
      openid: userInfo.openid,
      name: `临时名称${new Date().getTime()}`,
      password: "123456"
    }
    return this.usersRepository.save(params).then(() => {})
  }

  // 获取微信用户信息
  async findWXUserInfo(searchInfo: { openid: string }): Promise<any> {
    const data = await this.usersRepository.findOne({ openid: searchInfo.openid })
    console.log('data',data);
    return { code: stateCode.success, message: "查询成功！", data: data ? { username: data.name, avatar: data.avatar } : null }
  }
}
