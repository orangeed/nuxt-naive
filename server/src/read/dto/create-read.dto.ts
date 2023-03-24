import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsDateString, IsNotEmpty, IsString } from "class-validator"

export class CreateReadDto {
  id: number

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  img: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  author: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  introduction: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  time: Date

  @IsNotEmpty()
  @ApiProperty()
  @ApiProperty()
  createTime: Date
}
