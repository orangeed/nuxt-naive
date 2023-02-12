import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoseController } from './dose.controller';
import { Dose } from './dose.entity';
import { DoseService } from './dose.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dose])],
  controllers: [DoseController],
  providers: [DoseService],
  exports: [DoseService]
})
export class DoseModule { }
