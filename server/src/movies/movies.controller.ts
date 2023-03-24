import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common"
import { MoviesService } from "./movies.service"
import { CreateMovieDto } from "./dto/create-movie.dto"
import { UpdateMovieDto } from "./dto/update-movie.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { JwtAuthGuardUser } from "../auth/guards/jwt-auth.guard"
import { FindMoviesDto } from "./dto/find-movie.dto"

@ApiTags("影视")
@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(JwtAuthGuardUser)
  @ApiOperation({ summary: "新增一个影视" })
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto)
  }

  @ApiOperation({ summary: "获取影视列表" })
  @Get("list")
  findAll(@Query() findMoviesDto: FindMoviesDto) {
    return this.moviesService.findAll(findMoviesDto)
  }

  @ApiOperation({ summary: "根据id查询某一个影视信息" })
  @Get(":id")
  findOne(@Param() id: string) {
    return this.moviesService.findOne(id)
  }

  @UseGuards(JwtAuthGuardUser)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto)
  }

  @UseGuards(JwtAuthGuardUser)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.moviesService.remove(+id)
  }
}
