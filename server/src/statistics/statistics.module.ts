import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from '../home/home.entity';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  controllers: [StatisticsController],
  providers: [StatisticsService],
  exports: [StatisticsService]
})
export class StatisticsModule { }
