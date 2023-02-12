import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FindActicleDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  author: string;

  @IsString()
  @ApiProperty()
  tag: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  pageNum: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  pageSize: number;
}
