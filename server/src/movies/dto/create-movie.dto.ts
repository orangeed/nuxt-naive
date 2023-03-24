import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsDateString, IsNotEmpty, IsString } from "class-validator"

export class CreateMovieDto {
  id: number

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  type: number

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  img: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  score: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  introduction: string

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  time: Date

  @IsNotEmpty()
  @ApiProperty()
  @ApiProperty()
  createTime: Date
}
