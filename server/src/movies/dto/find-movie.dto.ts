import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { FindOperator } from "typeorm"

export class FindMoviesDto {
  @IsString()
  @ApiProperty()
  name: string

  @IsNumber()
  @ApiProperty()
  type: string

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
  name?: FindOperator<string>
}
