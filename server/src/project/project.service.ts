import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { stateCode } from "src/utils/enum"
import { Like, Repository } from "typeorm"
import { CreateProjectDto } from "./dto/create-project.dto"
import { FindProjectDto, WhereParams } from "./dto/find-project.dto"
import { UpdateProjectDto } from "./dto/update-project.dto"
import { Project } from "./entities/project.entity"
const dayjs = require("dayjs")

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) {}

  create(createProjectDto: CreateProjectDto) {
    if (!createProjectDto.name) return { code: stateCode.findFail, message: "项目名称不能为空" }
    if (!createProjectDto.author) return { code: stateCode.findFail, message: "项目作者不能为空" }
    if (!createProjectDto.img) return { code: stateCode.findFail, message: "项目截图不能为空" }
    if (!createProjectDto.introduction) return { code: stateCode.findFail, message: "项目简介不能为空" }
    let params = {}
    params = Object.assign({
      name: createProjectDto.name,
      author: createProjectDto.author,
      img: createProjectDto.img,
      introduction: createProjectDto.introduction,
      createTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
    })
    return this.projectRepository
      .save(params)
      .then(() => {
        return { code: stateCode.success, message: "添加成功！", data: null }
      })
      .catch((err) => {
        return { code: stateCode.cpdFail, message: `添加失败！${err.query}`, data: null }
      })
  }

  async findAll(findProjectDto: FindProjectDto) {
    if (!findProjectDto.pageNum) return { code: stateCode.findFail, message: "pageNum不能为空", data: null }
    if (!findProjectDto.pageSize) return { code: stateCode.findFail, message: "pageSize不能为空", data: null }
    const whereParams: WhereParams = {}
    if (findProjectDto.name) {
      whereParams.name = Like(`%${findProjectDto.name}%`)
    }
    let params = {}
    params = Object.assign({
      where: whereParams,
      skip: (findProjectDto.pageNum - 1) * findProjectDto.pageSize,
      take: findProjectDto.pageSize,
      order: {
        createTime: "DESC"
      }
    })
    const [data, total] = await this.projectRepository.findAndCount(params)
    data.forEach((v) => {
      if (v.createTime) {
        v.createTime = dayjs(v.createTime).format("YYYY-MM-DD")
      }
    })
    return { code: stateCode.success, message: "成功", data: { list: data, total } }
  }

  async findOne(id: number) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.projectRepository.findOne(id)
    return { code: stateCode.success, message: "查询成功", data: data ? data : null }
  }
  async update(id: number, updateProjectDto: UpdateProjectDto) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.projectRepository.update({ id }, updateProjectDto)
    if (data.affected > 0) {
      return { code: stateCode.success, message: "修改成功！", data: null }
    } else {
      return { code: stateCode.findFail, message: "修改失败", data: null }
    }
  }

  async remove(id: number) {
    if (!id) return { code: stateCode.findFail, message: "id不能为空", data: null }
    const data = await this.projectRepository.delete(id)
    if (data.affected > 0) {
      return { code: stateCode.success, message: "删除成功！", data: null }
    } else {
      return { code: stateCode.findFail, message: "删除失败", data: null }
    }
  }
}
