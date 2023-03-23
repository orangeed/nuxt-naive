import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common"
import { ArticleService } from "./article.service"
import { CreateArticleDto } from "./dto/create-article.dto"
import { UpdateArticleDto } from "./dto/update-article.dto"
import { JwtAuthGuardUser } from "../auth/guards/jwt-auth.guard"
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger"
import { FindActicleDto } from "./dto/find-acticle.dto"

@ApiTags("文章")
@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @UseGuards(JwtAuthGuardUser)
  @Post("createActicle")
  @ApiOperation({ summary: "新建文章" })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  @UseGuards(JwtAuthGuardUser)
  @Get("findActicle")
  @ApiOperation({ summary: "查询文章" })
  findAll(@Query() findActicleDto: FindActicleDto) {
    return this.articleService.findAll(findActicleDto)
  }

  @Get("findDetails")
  findOne(@Query() id: string) {
    return this.articleService.findOne(id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articleService.remove(+id)
  }
}
