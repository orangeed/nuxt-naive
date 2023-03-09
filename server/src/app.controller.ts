import { Controller, Post } from "@nestjs/common"
import { Body } from "@nestjs/common/decorators"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { AppService } from "./app.service"
@ApiTags("ChatGPT")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiOperation({ summary: "查询问题" })
  getHello(@Body() message: string): string {
    return this.appService.getMessage(message)
  }
}
