import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UpdateArticleDto } from "./dto/update-article.dto"
import { CreateArticleDto } from "./dto/create-article.dto"
import { Article } from "./entities/article.entity"
import { stateCode } from "src/utils/enum"
import { FindActicleDto } from "./dto/find-acticle.dto"
const dayjs = require("dayjs")

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private acticleRepository: Repository<Article>) {}
  async create(createArticleDto: CreateArticleDto) {
    // return 'This action adds a new article';
    console.log("createArticleDto", createArticleDto)
    return this.acticleRepository
      .save({
        title: createArticleDto.title,
        author: createArticleDto.author,
        tags: createArticleDto.tags,
        content: createArticleDto.content,
        createTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
      })
      .then(() => {
        return {
          code: stateCode.success,
          message: "添加成功！",
          data: null
        }
      })
      .catch((err) => {
        return {
          code: stateCode.cpdFail,
          message: `添加失败！${err.query}`,
          data: null
        }
      })
  }

  async findAll(findActicleDto: FindActicleDto) {
    console.log("findActicleDto", findActicleDto)
    if (!findActicleDto.pageNum)
      return {
        code: stateCode.findFail,
        message: "pageNum不能为空",
        data: null
      }
    if (!findActicleDto.pageSize)
      return {
        code: stateCode.findFail,
        message: "pageSize不能为空",
        data: null
      }
    let result = null
    if (!findActicleDto.tag && !findActicleDto.title) {
      result = this.acticleRepository.findAndCount({
        skip: (findActicleDto.pageNum - 1) * findActicleDto.pageSize,
        take: findActicleDto.pageSize,
        order: {
          createTime: "DESC"
        }
      })
    } else {
      result = this.acticleRepository.findAndCount({
        where: {
          tags: findActicleDto.tag,
          title: findActicleDto.title
        },
        skip: (findActicleDto.pageNum - 1) * findActicleDto.pageSize,
        take: findActicleDto.pageSize,
        order: {
          createTime: "DESC"
        }
      })
    }
    console.log("result", result)
    return result
      .then((res) => {
        console.log("res", res)
        return {
          code: stateCode.success,
          message: "成功",
          data: {
            list: res[0],
            total: res[1]
          }
        }
      })
      .catch((err) => {
        return {
          code: stateCode.findFail,
          message: `查询失败${err.query}`,
          data: ""
        }
      })
  }

  findOne(id: number) {
    return `This action returns a #${id} article`
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`
  }

  remove(id: number) {
    return `This action removes a #${id} article`
  }
}
