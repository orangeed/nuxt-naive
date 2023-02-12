import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoseAndSuggerDto } from '../statistics/dto/statistics.dto';
import { Repository } from 'typeorm';
import { Dose } from './dose.entity';
import {
  CreateDoseDto,
  DoseListDto,
  GetDoseInfo,
  PutDoseInfo,
} from './dto/dose.dto';
const dayjs = require('dayjs');

@Injectable()
export class DoseService {
  constructor(
    @InjectRepository(Dose) private doseRepository: Repository<Dose>,
  ) { }

  // 添加胰岛素瓶
  async createDose(createDose: CreateDoseDto): Promise<any> {
    console.log('body', createDose);
    return this.doseRepository
      .save({
        ...createDose,
        remaining: createDose.allDose,
        frequency: 0,
        createTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        name: `${dayjs(new Date()).format('YYYYMMDD')}${createDose.type === 1 ? '白天' : '夜晚'
          }`,
      })
      .then(() => {
        return {
          code: 200,
          message: '添加成功！',
          data: null,
        };
      })
      .catch((err) => {
        return {
          code: 202,
          message: '添加失败！',
          data: err.query,
        };
      });
  }

  // 获取胰岛素列表
  async getDoseList(doseList: DoseListDto): Promise<any> {
    console.log('doseList', doseList);
    return this.doseRepository
      .findAndCount({
        where: {
          userId: doseList.userId,
          type: doseList.typeValue,
        },
        skip: (doseList.pageNo - 1) * doseList.pageSize,
        take: doseList.pageSize,
        order: {
          createTime: Number(doseList.orderRangeValue) === 1 ? 'DESC' : 'ASC',
        },
      })
      .then((res) => {
        return {
          code: 200,
          message: '查询成功！',
          data: {
            list: res[0],
            total: res[1],
          },
        };
      })
      .catch((err) => {
        return {
          code: 202,
          message: '查询失败',
          data: err.query,
        };
      });
  }

  // 按月份统计胰岛素使用量
  async getDose(query: DoseAndSuggerDto): Promise<any> {
    console.log('query', query);
    const result = await this.doseRepository.find({
      where: { userId: query.userId },
    });
    console.log('result', result);
  }

  // 查询某一个胰岛素信息
  async getDoseInfo(body: GetDoseInfo): Promise<any> {
    const result = await this.doseRepository.findOne({
      where: {
        id: body.id,
      },
    });
    console.log('查询某一个胰岛素信息', result);
    if (!result) {
      return {
        code: 201,
        message: '暂无此胰岛素，赶紧去添加吧！',
        data: null,
      };
    } else {
      return {
        code: 200,
        meaage: '查询成功！',
        data: result,
      };
    }
    // if (result.length > 0) {
    //   return await this.doseRepository
    //     .update(body.id, { remaining, frequency })
    //     .then((res) => {
    //       return {
    //         code: 200,
    //         message: '更新成功！',
    //         data: null,
    //       };
    //     });
    // } else {
    //   return {
    //     code: 201,
    //     message: '没有这个胰岛素，请添加',
    //     data: null,
    //   };
    // }
  }

  // 更新胰岛素信息
  async putDoseInfo(body: PutDoseInfo): Promise<any> {
    console.log('body', body);
    return this.doseRepository.update(body.id, {
      remaining: body.dose,
      frequency: body.frequency,
    });
  }
}
