import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { FindOperator } from "typeorm"

export class FindActicleDto {
  @IsString()
  @ApiProperty()
  title: string

  @IsString()
  @ApiProperty()
  author: string

  @IsString()
  @ApiProperty()
  tag: string

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  pageNum: number

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  pageSize: number
}

export interface WhereParams {
  tags?: FindOperator<string>
  title?: FindOperator<string>
}
