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
  constructor(@InjectRepository(Read) private readRepository: Repository<Read>) {}
  async create(createreadDto: CreateReadDto) {
    if (!createreadDto.name) return { code: stateCode.findFail, message: "书籍名称不能为空" }
    if (!createreadDto.time) return { code: stateCode.findFail, message: "书籍时间不能为空" }
    if (!createreadDto.content) return { code: stateCode.findFail, message: "内容不能为空" }
    if (!createreadDto.img) return { code: stateCode.findFail, message: "书籍封面不能为空" }
    let params = {}
    params = Object.assign({
      name: createreadDto.name,
      img: createreadDto.img,
      time: createreadDto.time,
      content: createreadDto.content,
      author: createreadDto.author,
      introduction: createreadDto.introduction,
      createTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
    })

    return this.readRepository
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
      select: ["id", "name", "img", "author", "createTime"],
      where: whereParams,
      skip: (findReadDto.pageNum - 1) * findReadDto.pageSize,
      take: findReadDto.pageSize,
      order: {
        time: "DESC"
      }
    })
    const [data, total] = await this.readRepository.findAndCount(params)
    data.forEach((v) => {
      if (v.createTime) {
        v.createTime = dayjs(v.createTime).format("YYYY-MM-DD HH:mm:ss")
      }
    })
    return { code: stateCode.success, message: "成功", data: { list: data, total } }
  }

  async findOne(id: string) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.readRepository.findOne(id)
    data.createTime = dayjs(data.createTime).format("YYYY-MM-DD HH:mm:ss")
    return { code: stateCode.success, message: "查询成功", data: data ? data : null }
  }

  async update(id: number, updateReadDto: UpdateReadDto) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.readRepository.update({ id }, updateReadDto)
    if (data.affected > 0) {
      return { code: stateCode.success, message: "修改成功！", data: null }
    } else {
      return { code: stateCode.findFail, message: "修改失败", data: null }
    }
  }

  async remove(id: number) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.readRepository.delete(id)
    if (data.affected > 0) {
      return { code: stateCode.success, message: "删除成功！", data: null }
    } else {
      return { code: stateCode.findFail, message: "删除失败", data: null }
    }
  }
}
