import { Like, Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UpdateArticleDto } from "./dto/update-article.dto"
import { CreateArticleDto } from "./dto/create-article.dto"
import { Article } from "./entities/article.entity"
import { stateCode } from "src/utils/enum"
import { FindActicleDto, WhereParams } from "./dto/find-acticle.dto"
const dayjs = require("dayjs")

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private acticleRepository: Repository<Article>) {}
  async create(createArticleDto: CreateArticleDto) {
    if (!createArticleDto.author) return { code: stateCode.findFail, message: "作者不能为空" }
    if (!createArticleDto.title) return { code: stateCode.findFail, message: "标题不能为空" }
    if (!createArticleDto.tags) return { code: stateCode.findFail, message: "分类不能为空" }
    if (!createArticleDto.content) return { code: stateCode.findFail, message: "内容不能为空" }
    if (!createArticleDto.img) return { code: stateCode.findFail, message: "封面不能为空" }
    let params = {}
    params = Object.assign({
      title: createArticleDto.title,
      img: createArticleDto.img,
      author: createArticleDto.author,
      tags: createArticleDto.tags,
      content: createArticleDto.content,
      createTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      updateTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
    })

    return this.acticleRepository
      .save(params)
      .then(() => {
        return { code: stateCode.success, message: "添加成功！", data: null }
      })
      .catch((err) => {
        return { code: stateCode.cpdFail, message: `添加失败！${err.query}`, data: null }
      })
  }

  async findAll(findActicleDto: FindActicleDto) {
    if (!findActicleDto.pageNum) return { code: stateCode.findFail, message: "pageNum不能为空", data: null }
    if (!findActicleDto.pageSize) return { code: stateCode.findFail, message: "pageSize不能为空", data: null }
    const whereParams: WhereParams = {}
    if (findActicleDto.tag) {
      whereParams.tags = Like(`%${findActicleDto.tag}%`)
    }
    if (findActicleDto.title) {
      whereParams.title = Like(`%${findActicleDto.title}%`)
    }
    let params = {}
    params = Object.assign({
      select: ["tags", "updateTime", "title", "id", "img"],
      where: whereParams,
      skip: ((findActicleDto.pageNum | 1) - 1) * (findActicleDto.pageSize | 10),
      take: findActicleDto.pageSize,
      order: {
        createTime: "DESC"
      }
    })
    const [data, total] = await this.acticleRepository.findAndCount(params)
    data.forEach((v) => {
      if (v.updateTime) {
        v.updateTime = dayjs(v.updateTime).format("YYYY-MM-DD HH:mm:ss")
      }
    })
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
    const data = await this.acticleRepository.findOne(id)
    data.updateTime = dayjs(data.updateTime).format("YYYY-MM-DD HH:mm:ss")
    return {
      code: stateCode.success,
      message: "查询成功",
      data
    }
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`
  }

  remove(id: number) {
    return `This action removes a #${id} article`
  }
}
