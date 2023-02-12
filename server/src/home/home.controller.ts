import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HomeService } from './home.service';
import { JwtAuthGuardUser } from '../auth/guards/jwt-auth.guard';
import { AllListDto, createRecordDto, HomeTotalDto } from './dto/home-getHomeToal.dto';


@ApiTags('首页数据')
@Controller('home')
export class HomeController {
    constructor(private readonly homeService: HomeService) { }

    // 获取首页统计信息
    @UseGuards(JwtAuthGuardUser)
    @Get('homeTotal')
    @ApiOperation({ summary: '获取首页统计信息' })
    async getHomeToal(@Query() query: HomeTotalDto) {
        return this.homeService.getHomeToatal(query)
    }

    // 获取近10条数据
    @UseGuards(JwtAuthGuardUser)
    @Get('homeList')
    @ApiOperation({ summary: '首页最近的10条数据' })
    async homeList(@Query() query: HomeTotalDto) {
        return this.homeService.homeList(query)
    }

    // 分页获取全部的数据
    @UseGuards(JwtAuthGuardUser)
    @Get('allList')
    @ApiOperation({ summary: '分页获取全部的记录' })
    async getAllList(@Query() query: AllListDto) {
        return this.homeService.getAllList(query)
    }

    // 添加一条测试记录
    @UseGuards(JwtAuthGuardUser)
    @Post('createRecord')
    @ApiOperation({ summary: '添加一个测试的血糖或者剂量记录' })
    async createRecord(@Body() body: createRecordDto) {
        return this.homeService.createRecord(body)
    }

}
