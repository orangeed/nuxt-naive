import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common"
import { ReadService } from "./read.service"
import { CreateReadDto } from "./dto/create-read.dto"
import { UpdateReadDto } from "./dto/update-read.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { JwtAuthGuardUser } from "../auth/guards/jwt-auth.guard"
import { FindReadDto } from "./dto/find-read.dto"

@ApiTags("阅读")
@Controller("read")
export class ReadController {
  constructor(private readonly readService: ReadService) {}

  @UseGuards(JwtAuthGuardUser)
  @ApiOperation({ summary: "新增一个书籍" })
  @Post()
  create(@Body() createReadDto: CreateReadDto) {
    return this.readService.create(createReadDto)
  }

  @ApiOperation({ summary: "获取书籍列表" })
  @Get("list")
  findAll(@Query() findReadDto: FindReadDto) {
    return this.readService.findAll(findReadDto)
  }

  @ApiOperation({ summary: "根据id查询某一个书籍信息" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.readService.findOne(id)
  }

  @UseGuards(JwtAuthGuardUser)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateReadDto: UpdateReadDto) {
    return this.readService.update(+id, updateReadDto)
  }

  @UseGuards(JwtAuthGuardUser)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.readService.remove(+id)
  }
}
