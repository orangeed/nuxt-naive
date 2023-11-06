import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common"
import { ToolsService } from "./tools.service"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { JwtAuthGuardUser } from "../auth/guards/jwt-auth.guard"

@ApiTags("阅读")
@Controller("tools")
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  // @UseGuards(JwtAuthGuardUser)
  @ApiOperation({ summary: "获取解析的内容" })
  @Get("analyze")
  findAnalyze(@Query() url: { url: string }) {
    return this.toolsService.analyze(url)
  }

  @ApiOperation({ summary: "获取每日一言" })
  @Get("one")
  findYiYan() {
    return this.toolsService.yiyan()
  }

  @ApiOperation({ summary: "获取bing图片" })
  @Get("img")
  findBing() {
    return this.toolsService.bingtu()
  }

  @ApiOperation({ summary: "获取微信用户信息并插入一个用户" })
  @Get("getOpenid")
  getUserInfoSave(@Query() info: { code: string }) {
    return this.toolsService.getWXUserInfo(info)
  }

  // @ApiOperation({ summary: "获取用户的openid" })
  // @Get("/openid")
  // getOpenId(@Query() info: { code: string }) {
  //   return this.toolsService.getOpenid(info)
  // }
}
