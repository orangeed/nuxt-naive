import { Injectable } from "@nestjs/common"
import { stateCode } from "src/utils/enum"
import { HttpService } from "@nestjs/axios"
import { User } from "../users/users.entity"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
const dayjs = require("dayjs")

@Injectable()
export class ToolsService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>, private httpService: HttpService) {}

  // 去水印
  async analyze({ url }) {
    console.log(
      "`https://api.ciyer.com/api/dsp/?uid=1689769722&my=abcklosvyzBEFIT089&url=${url}`",
      `https://api.ciyer.com/api/dsp/?uid=1689769722&my=abcklosvyzBEFIT089&url=${url}`
    )
    const result = await this.httpService.get(`https://api.ciyer.com/api/dsp/?uid=1689769722&my=abcklosvyzBEFIT089&url=${url}`).toPromise()
    console.log("result", result)
    return {
      code: stateCode.success,
      message: result.data.msg,
      data: result.data.data
    }
  }

  // 每日一言
  async yiyan() {
    const result = await this.httpService.get("https://v1.hitokoto.cn/").toPromise()
    console.log("result", result)
    return {
      code: stateCode.success,
      message: "成功",
      data: {
        text: result.data.hitokoto,
        author: result.data.from_who ? result.data.from_who : result.data.from
      }
    }
  }

  // 每天一图
  async bingtu() {
    const result = await this.httpService.get("https://api.cyrilstudio.top/bing/image.php/bing?info=true&size=320x240").toPromise()
    const url = result.data
      .split("link")[0]
      .match(/\b(https?:\/\/[^\s]+)/g)[0]
      .split(",")[0]
    return {
      code: stateCode.success,
      message: "成功",
      data: url
    }
  }

  // 获取微信用户信息,插入信息
  async getWXUserInfo(info: { code: string }): Promise<any> {
    const result = await this.httpService
      .get(
        `https://api.weixin.qq.com/sns/jscode2session?appid=wxfae3675565f5d374&secret=d13bbaeecfed083577fabdfaa5643f05&js_code=${info.code}&grant_type=authorization_code`
      )
      .toPromise()
    if (result.data.openid) {
      // 查有没有这个用户
      const data = await this.usersRepository.findOne({ openid: result.data.openid })
      if (data) {
        // 有的话返回信息
        return { code: stateCode.success, message: "查询成功！", data: data ? { username: data.name, avatar: data.avatar } : null }
      } else {
        // 没有的话新增一个用户，在返回信息
        let params = {
          openid: result.data.openid,
          name: `临时名称${new Date().getTime()}`,
          password: "123456",
          status: "1",
          avatar: "https://pic.616pic.com/ys_bnew_img/00/07/02/JcQoms2o3U.jpg",
          delStatus: "1",
          zhihuAddress: "",
          wxAddress: "",
          GitHubAddress: "",
          createdAt: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
        }
        const data = await this.usersRepository.save(params)
        const userInfo = await this.usersRepository.findOne({ openid: result.data.openid })
        console.log("userInfo", userInfo)
        return {
          code: stateCode.success,
          message: "查询成功！",
          data: userInfo ? { username: userInfo.name, avatar: userInfo.avatar } : null
        }
      }
    } else {
      return {
        code: stateCode.findFail,
        message: "失败"
      }
    }
  }

  // 获取openid
  async getOPenid(info: { code: string }): Promise<any> {}
}
