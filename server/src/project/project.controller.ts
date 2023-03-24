import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common"
import { ProjectService } from "./project.service"
import { CreateProjectDto } from "./dto/create-project.dto"
import { UpdateProjectDto } from "./dto/update-project.dto"
import { JwtAuthGuardUser } from "../auth/guards/jwt-auth.guard"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { FindProjectDto } from "./dto/find-project.dto"

@ApiTags("项目")
@Controller("project")
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(JwtAuthGuardUser)
  @ApiOperation({ summary: "新增一个项目" })
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto)
  }

  @ApiOperation({ summary: "查询项目列表" })
  @Get()
  findAll(@Query() findProjectDto: FindProjectDto) {
    return this.projectService.findAll(findProjectDto)
  }

  @ApiOperation({ summary: "查询一个项目" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.projectService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.projectService.remove(+id)
  }
}
