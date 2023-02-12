import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { handleFilterTimeLabel } from '../utils/filter';
import { Like, Repository } from 'typeorm';
import {
  AllListDto,
  createRecordDto,
  HomeTotalDto,
} from './dto/home-getHomeToal.dto';
import { Home } from './home.entity';
import { GetHomeTatal, Result } from './type/home.type';
import { DoseService } from 'src/dose/dose.service';
const dayjs = require('dayjs');

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home) private homeRepository: Repository<Home>,
    private doseServer: DoseService,
  ) { }

  // 获取首页统计数据
  async getHomeToatal(getHomeToalDto: HomeTotalDto): Promise<any> {
    console.log('getHomeToalDto', getHomeToalDto.userId);
    if (getHomeToalDto.userId === 'undefined' || getHomeToalDto.userId === '')
      return {
        code: 201,
        message: '查询失败，没有userId',
        data: null,
      };
    const homeResult = await this.homeRepository.find({
      where: {
        userId: getHomeToalDto.userId,
        // 模糊查询时间
        createTime: Like(`%${dayjs(new Date()).format('YYYY-MM-DD')}%`),
      },
      order: {
        createTime: 'DESC',
      },
    });
    console.log('homeResult', homeResult);
    const result: GetHomeTatal = {
      totalDose: 0,
      dose: 0,
      sugger: 0,
    };
    if (homeResult.length > 0) {
      homeResult.forEach((v) => {
        result.totalDose += v.dose;
      });
      result.dose = homeResult[0].dose;
      result.sugger = homeResult[0].sugger;
      return {
        code: 200,
        message: '查询成功！',
        data: result,
      };
    } else {
      return {
        code: 200,
        message: '查询成功！',
        data: null,
      };
    }
  }

  // 获取首页最近10条数据
  async homeList(homeListDto: HomeTotalDto): Promise<any> {
    const result = await this.homeRepository.find({
      where: {
        userId: homeListDto.userId,
      },
      select: ['createTime', 'dose', 'sugger', 'timeLabel', 'remark'],
      order: {
        createTime: 'DESC',
      },
      take: 10,
    });
    result.forEach((v) => {
      v.createTime = dayjs(v.createTime).format('YYYY-MM-DD HH:mm:ss');
    });
    return {
      code: 200,
      message: '操作成功！',
      data: result,
    };
  }

  // 分页获取数据
  async getAllList(getAllListDto: AllListDto): Promise<any> {
    return this.homeRepository
      .findAndCount({
        select: ['createTime', 'dose', 'sugger', 'timeLabel', 'remark'],
        where: {
          userId: getAllListDto.userId,
          timeLabel: handleFilterTimeLabel(getAllListDto.typeValue),
        },
        skip: (getAllListDto.pageNo - 1) * getAllListDto.pageSize,
        take: getAllListDto.pageSize,
        order: {
          createTime:
            Number(getAllListDto.orderRangeValue) === 1 ? 'DESC' : 'ASC',
        },
      })
      .then((res) => {
        res[0].forEach((v) => {
          v.createTime = dayjs(v.createTime).format('YYYY-MM-DD HH:mm:ss');
        });
        return {
          code: 200,
          message: '操作成功！',
          data: {
            list: res[0],
            total: res[1],
          },
        };
      });
  }

  // 添加记录
  // 如果不是睡前的话，查询最近的白天的胰岛素，用剩余的单位减去此次打的单位
  // 如果是睡前的话，查询最近白天的胰岛素，用剩余的单位减去此次打的单位
  // 当胰岛素的用量小于50单位的是提醒胰岛素不足啦，请及时补充
  // 当当前记录胰岛素大于最近的胰岛素瓶的单位时候，提醒及时更改胰岛素，但是允许添加记录
  async createRecord(record: createRecordDto): Promise<any> {
    console.log('record', record);
    let result: Result = {
      code: 200
    }
    if (record.dose) {
      result = await this.doseServer.getDoseInfo({
        id: record.doseId,
      });
    }
    console.log('result', result);
    // if (Object.prototype.toString.call(result).slice(8, -1) === 'Object')
    if (result.code !== 200) return result;
    return this.homeRepository
      .save({
        userId: record.userId,
        timeLabel: record.timeLabel,
        dose: record.dose,
        sugger: record.sugger,
        remark: record.remark,
        createTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      })
      .then(() => {
        console.log(1);
        if (result.code === 200) return {
          code: 200,
          message: '添加成功！',
          data: null,
        };
        return this.doseServer
          .putDoseInfo({
            id: record.doseId,
            dose: Number(result.data.allDose) - Number(record.dose),
            frequency: Number(result.data.frequency) + 1,
          })
          .then((res) => {
            console.log(2);
            return {
              code: 200,
              message: '添加成功！',
              data: null,
            };
          })
          .catch((err) => {
            console.log(3);
            return {
              code: 202,
              message: '添加失败！',
              data: err.query,
            };
          });
      })
      .catch((err) => {
        console.log(4, err);
        return {
          code: 202,
          message: '添加失败！',
          data: err.query,
        };
      });
  }
}
