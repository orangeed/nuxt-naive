import { Module } from "@nestjs/common"
import { ToolsService } from "./tools.service"
import { ToolsController } from "./tools.controller"
import { HttpModule } from "@nestjs/axios"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "../users/users.entity"

@Module({
  imports: [
    HttpModule.register({
      timeout: 60000,
      maxRedirects: 5
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [ToolsController],
  providers: [ToolsService],
  exports: [ToolsService]
})
export class ToolsModule {}
