import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReadService } from './read.service';
import { ReadController } from './read.controller';
import { Read } from './entities/read.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Read])],
  controllers: [ReadController],
  providers: [ReadService],
  exports: [ReadService],
})
export class ReadModule {}
