import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Home } from '../home/home.entity';
import { Repository } from 'typeorm';
import { DoseAndSuggerDto } from './dto/statistics.dto';
const dayjs = require('dayjs');

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Home) private homeRepository: Repository<Home>,
  ) {}
  async getDoseAndSugger(query: DoseAndSuggerDto): Promise<any> {
    console.log('query', query);
    // 1一天，2一周，3一个月，4一年
    let beginTime = '',
      endTime = '';
    if (Number(query.timeValue) === 1) {
      beginTime = `${dayjs(new Date()).format('YYYY-MM-DD')} 00:00:00`;
      endTime = `${dayjs(new Date()).format('YYYY-MM-DD')} 23:59:59`;
    }
    if (Number(query.timeValue) === 2) {
      beginTime = dayjs().startOf('week').format('YYYY-MM-DD HH:mm:ss');
      endTime = dayjs().endOf('week').format('YYYY-MM-DD HH:mm:ss');
    }
    if (Number(query.timeValue) === 3) {
      beginTime = dayjs().startOf('month').format('YYYY-MM-DD HH:mm:ss');
      endTime = dayjs().endOf('month').format('YYYY-MM-DD HH:mm:ss');
    }
    if (Number(query.timeValue) === 4) {
      beginTime = dayjs().startOf('year').format('YYYY-MM-DD HH:mm:ss');
      endTime = dayjs().endOf('year').format('YYYY-MM-DD HH:mm:ss');
    }
    console.log('beginTime', beginTime);
    console.log('endTime', endTime);
    // 查询到的血糖
    let db = this.homeRepository.createQueryBuilder('home');
    let sugger = [];
    let dose = [];
    if (Number(query.timeValue) === 1) {
      const result = await db
        .where({
          userId: query.userId,
        })
        .andWhere('createTime BETWEEN :start AND :end', {
          start: beginTime,
          end: endTime,
        })
        .getMany();
      result.forEach((v) => {
        sugger.push({
          label: v.timeLabel,
          value: v.sugger,
        });
        dose.push({
          label: v.timeLabel,
          value: v.dose ? v.dose : 0,
        });
      });
    }
    // 一个月
    if (Number(query.timeValue) === 2) {
      const result = await db
        .select('COUNT(*) dose')
        .addSelect('COUNT(*) sugger')
        .where({
          userId: query.userId,
        })
        .andWhere('createTime BETWEEN :start AND :end', {
          start: beginTime,
          end: endTime,
        })
        .groupBy('createTime')
        .getRawMany();
      //   const result = await db
      //     .select('COUNT(dose)', 'dose')
      //     .addSelect('COUNT(sugger)', 'sugger')
      //     .where('home.userId=userId', { userID: query.userId })
      //     .andWhere('month(createTime)=month(NOW())')
      //     .groupBy('createTime')
      //     .getRawMany();
      console.log('result', result);
    }
    return {
      code: 200,
      message: '查询成功！',
      data: {
        sugger,
        dose,
      },
    };
  }
}
