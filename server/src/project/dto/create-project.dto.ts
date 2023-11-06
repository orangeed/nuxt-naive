import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateProjectDto {
  id: number

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  type: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  author: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  img: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  introduction: string
}
