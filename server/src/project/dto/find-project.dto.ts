import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { FindOperator } from "typeorm"

export class FindProjectDto {
  @IsString()
  @ApiProperty()
  name: string

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
  type?: FindOperator<string>
}
