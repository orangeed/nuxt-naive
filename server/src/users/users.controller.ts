import { Controller, Post, Body, UseGuards, Request, Get, Delete, Put, Param, Query, Patch } from "@nestjs/common"
import { ApiTags, ApiOperation } from "@nestjs/swagger"
import { UsersService } from "./users.service"
import { JwtAuthGuardUser } from "../auth/guards/jwt-auth.guard"
@ApiTags("用户")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 获取用户信息
  @UseGuards(JwtAuthGuardUser)
  @Get("profile")
  @ApiOperation({ summary: "用户信息" })
  getProfile(@Request() req) {
    return {
      code: 200,
      message: "查询成功！",
      data: req.user
    }
  }

  @UseGuards(JwtAuthGuardUser)
  @Patch("userInfo/:id")
  @ApiOperation({ summary: "修改现在的个人介绍" })
  async updateUserInfo(@Param("id") id: string | number, @Body() updateUserInfo: any) {
    return this.usersService.updateUserInfo(+id, updateUserInfo)
  }

  // @UseGuards(JwtAuthGuardUser)
  @Get("userInfo")
  @ApiOperation({ summary: "查询用户信息" })
  async getUserInfo(@Query() username: { username: string }) {
    return this.usersService.getUserInfo(username)
  }
}
