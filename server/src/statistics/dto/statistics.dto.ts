import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class DoseAndSuggerDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userId: string

    // 一天，一周，一个月，一年
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    timeValue: number
}