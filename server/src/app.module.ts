import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UsersModule } from "./users/users.module"
import { AuthModule } from "./auth/auth.module"
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path"
import { Log4jsModule } from "./libs/log4js/"
import { HomeModule } from "./home/home.module"
import { StatisticsModule } from "./statistics/statistics.module"
import { DoseModule } from "./dose/dose.module"
import { ArticleModule } from "./article/article.module"
import { MoviesModule } from "./movies/movies.module"
import { ReadModule } from "./read/read.module"
import { ProjectModule } from './project/project.module';
import { ToolsModule } from "./tools/tools.module"



const { host, port, username, password } = dbInfo

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host,
      port,
      username,
      password,
      database: "blog",
      entities: [],
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    }),
    Log4jsModule.forRoot(),
    HomeModule,
    StatisticsModule,
    DoseModule,
    ArticleModule,
    MoviesModule,
    ReadModule,
    ProjectModule,
    ToolsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
