import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository, Like } from "typeorm"
import { CreateMovieDto } from "./dto/create-movie.dto"
import { FindMoviesDto, WhereParams } from "./dto/find-movie.dto"
import { UpdateMovieDto } from "./dto/update-movie.dto"
import { Movies } from "./entities/movie.entity"
import { stateCode } from "src/utils/enum"
const dayjs = require("dayjs")

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movies) private moviesRepository: Repository<Movies>) {}
  async create(createMovieDto: CreateMovieDto) {
    if (!createMovieDto.name) return { code: stateCode.findFail, message: "影视名称不能为空" }
    if (!createMovieDto.type) return { code: stateCode.findFail, message: "影视分类不能为空" }
    if (!createMovieDto.time) return { code: stateCode.findFail, message: "观影时间不能为空" }
    if (!createMovieDto.score) return { code: stateCode.findFail, message: "评分时间不能为空" }
    if (!createMovieDto.introduction) return { code: stateCode.findFail, message: "简介不能为空" }
    if (!createMovieDto.img) return { code: stateCode.findFail, message: "影视封面不能为空" }
    let params = {}
    params = Object.assign({
      name: createMovieDto.name,
      img: createMovieDto.img,
      type: createMovieDto.type,
      time: createMovieDto.time,
      introduction: createMovieDto.introduction,
      content: createMovieDto.content,
      createTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
    })

    return this.moviesRepository
      .save(params)
      .then(() => {
        return { code: stateCode.success, message: "添加成功！", data: null }
      })
      .catch((err) => {
        return { code: stateCode.cpdFail, message: `添加失败！${err.query}`, data: null }
      })
  }

  async findAll(findMoviesDto: FindMoviesDto) {
    if (!findMoviesDto.pageNum) return { code: stateCode.findFail, message: "pageNum不能为空", data: null }
    if (!findMoviesDto.pageSize) return { code: stateCode.findFail, message: "pageSize不能为空", data: null }
    const whereParams: WhereParams = {}
    if (findMoviesDto.name) {
      whereParams.name = Like(`%${findMoviesDto.name}%`)
    }
    if (findMoviesDto.type) {
      whereParams.type = Like(`%${findMoviesDto.type}`)
    }
    let params = {}
    params = Object.assign({
      select: ["id", "name", "type", "img", "time", "introduction"],
      where: whereParams,
      skip: (findMoviesDto.pageNum - 1) * findMoviesDto.pageSize,
      take: findMoviesDto.pageSize,
      order: {
        time: "DESC"
      }
    })
    const [data, total] = await this.moviesRepository.findAndCount(params)
    data.forEach((v) => {
      if (v.time) {
        v.time = dayjs(v.time).format("YYYY-MM-DD")
      }
    })
    return { code: stateCode.success, message: "成功", data: { list: data, total } }
  }

  async findOne(id: string) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.moviesRepository.findOne(id)
    data.time = dayjs(data.time).format("YYYY-MM-DD")
    return { code: stateCode.success, message: "查询成功", data: data ? data : null }
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.moviesRepository.update({ id }, updateMovieDto)
    if (data.affected > 0) {
      return { code: stateCode.success, message: "修改成功！", data: null }
    } else {
      return { code: stateCode.findFail, message: "修改失败", data: null }
    }
  }

  async remove(id: number) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.moviesRepository.delete(id)
    if (data.affected > 0) {
      return { code: stateCode.success, message: "删除成功！", data: null }
    } else {
      return { code: stateCode.findFail, message: "删除失败", data: null }
    }
  }
}
