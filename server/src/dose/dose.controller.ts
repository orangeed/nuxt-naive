import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuardUser } from '../auth/guards/jwt-auth.guard';
import { DoseAndSuggerDto } from '../statistics/dto/statistics.dto';
import { DoseService } from './dose.service';
import { CreateDoseDto, DoseListDto } from './dto/dose.dto';

@ApiTags('剂量')
@Controller('dose')
export class DoseController {
    constructor(private readonly doseServices: DoseService) { }

    // 添加胰岛素瓶
    @UseGuards(JwtAuthGuardUser)
    @Post('createDose')
    @ApiOperation({ summary: '添加胰岛素瓶' })
    createDose(@Body() body: CreateDoseDto) {
        return this.doseServices.createDose(body)
    }

    // 获取胰岛素瓶列表
    @UseGuards(JwtAuthGuardUser)
    @Get('doseList')
    @ApiOperation({ summary: '获取胰岛素瓶列表' })
    getDoseList(@Query() query: DoseListDto) {
        return this.doseServices.getDoseList(query)
    }

    // 按照日期来统计胰岛瓶的用量，1按照月份统计
    @UseGuards(JwtAuthGuardUser)
    @Get('statistics')
    @ApiOperation({ summary: '按照月份统计' })
    async getDose(@Query() query: DoseAndSuggerDto) {
        return this.doseServices.getDose(query)
    }
}
