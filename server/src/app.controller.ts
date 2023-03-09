import { Controller, Post, Body, Get, Param, Query } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { AppService } from "./app.service"

@ApiTags("ChatGPT")
@Controller("openai")
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Post()
  // getMessage(@Body() message: string) {
  //   return this.appService.getMessage(message)
  // }

  @Get()
  getMessage(@Query() message: string) {
    return this.appService.getMessage(message)
  }
  // @Get()
  // getHello(): string {
  //   return 'hee'
  // }
}
