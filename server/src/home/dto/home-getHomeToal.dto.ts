import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class HomeTotalDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId: string;
}

export class AllListDto extends HomeTotalDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pageNo: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pageSize: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  typeValue: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  timeRangeValue: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  orderRangeValue: number;
}

export class createRecordDto extends HomeTotalDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  timeLabel: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  dose: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  sugger: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  doseId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  remark: string
}
