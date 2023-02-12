import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuardUser } from '../auth/guards/jwt-auth.guard';
import { DoseAndSuggerDto } from './dto/statistics.dto';
import { StatisticsService } from './statistics.service'

@ApiTags('统计数据')
@Controller('statistics')
export class StatisticsController {
    constructor(private readonly statisticsService: StatisticsService) { }

    // 按照时间来统计血糖和胰岛素，早晨，中午，傍晚，睡前，折线图，只统计一天，一周，一个月，一年
    @UseGuards(JwtAuthGuardUser)
    @Get('doseAndSugger')
    @ApiOperation({ summary: '按照时间来统计血糖和胰岛素，早晨，中午，傍晚，睡前，折线图，只统计一天，一周，一个月，一年' })
    async getDoseAndSugger(@Query() query: DoseAndSuggerDto) {
        return this.statisticsService.getDoseAndSugger(query)
    }
}
