import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  author: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  tags: string[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string;

  @IsNotEmpty()
  @ApiProperty()
  @ApiProperty()
  createTime: Date;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  updateTime: Date;
}
