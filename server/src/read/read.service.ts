import { Injectable } from "@nestjs/common"
import { CreateReadDto } from "./dto/create-read.dto"
import { UpdateReadDto } from "./dto/update-read.dto"
import { stateCode } from "src/utils/enum"
import { InjectRepository } from "@nestjs/typeorm"
import { Read } from "./entities/read.entity"
import { Repository, Like } from "typeorm"
import { FindReadDto, WhereParams } from "./dto/find-read.dto"
const dayjs = require("dayjs")

@Injectable()
export class ReadService {
  constructor(@InjectRepository(Read) private moviesRepository: Repository<Read>) {}
  async create(createMovieDto: CreateReadDto) {
    if (!createMovieDto.name) return { code: stateCode.findFail, message: "书籍名称不能为空" }
    if (!createMovieDto.time) return { code: stateCode.findFail, message: "书籍时间不能为空" }
    if (!createMovieDto.content) return { code: stateCode.findFail, message: "内容不能为空" }
    if (!createMovieDto.img) return { code: stateCode.findFail, message: "书籍封面不能为空" }
    let params = {}
    params = Object.assign({
      name: createMovieDto.name,
      img: createMovieDto.img,
      time: createMovieDto.time,
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

  async findAll(findReadDto: FindReadDto) {
    if (!findReadDto.pageNum) return { code: stateCode.findFail, message: "pageNum不能为空", data: null }
    if (!findReadDto.pageSize) return { code: stateCode.findFail, message: "pageSize不能为空", data: null }
    const whereParams: WhereParams = {}
    if (findReadDto.name) {
      whereParams.name = Like(`%${findReadDto.name}%`)
    }
    let params = {}
    params = Object.assign({
      select: ["id", "name", "img"],
      where: whereParams,
      skip: (findReadDto.pageNum - 1) * findReadDto.pageSize,
      take: findReadDto.pageSize,
      order: {
        time: "DESC"
      }
    })
    const [data, total] = await this.moviesRepository.findAndCount(params)
    return {
      code: stateCode.success,
      message: "成功",
      data: {
        list: data,
        total
      }
    }
  }

  async findOne(id: string) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.moviesRepository.findOne(id)
    return {
      code: stateCode.success,
      message: "查询成功",
      data: data ? data : null
    }
  }

  update(id: number, updateReadDto: UpdateReadDto) {
    return `This action updates a #${id} read`
  }

  remove(id: number) {
    return `This action removes a #${id} read`
  }
}
