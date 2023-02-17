import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Log4jsModule } from './libs/log4js/';
import { HomeModule } from './home/home.module';
import { StatisticsModule } from './statistics/statistics.module';
import { DoseModule } from './dose/dose.module';
import { ArticleModule } from './article/article.module';

// 线上
// const dbInfo = {
//   // host: '127.0.0.1',
//   host: '43.136.136.106',
//   port: 3306,
//   username: 'orange',
//   password: 'orangecj.1',
// };

// 本地
// const ENV = process.env.NODE_ENV;
const dbInfo = {
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'orange123456.',
};
// if (ENV === 'prod') {
//   dbInfo.host = '10.0.224.4';
//   dbInfo.port = 25532 || 3306;
//   dbInfo.username = 'root';
//   dbInfo.password = '';
// }

// 公司
// const dbInfo = {
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'cj123456',
// };

const { host, port, username, password } = dbInfo;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host,
      port,
      username,
      password,
      database: 'blog',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    Log4jsModule.forRoot(),
    HomeModule,
    StatisticsModule,
    DoseModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
