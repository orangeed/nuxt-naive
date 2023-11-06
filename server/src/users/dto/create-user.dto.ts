import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"
export class CreateUserDto {
  id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string

  @ApiProperty()
  @IsString()
  avatar: string

  @ApiProperty()
  roles: string[]

  @ApiProperty()
  intro: string

  @ApiProperty()
  @IsString()
  status: string

  @ApiProperty()
  @IsBoolean()
  openid: boolean

  @ApiProperty()
  delStatus: string

  @ApiProperty()
  createdAt: Date

  updatedAt: Date
}
