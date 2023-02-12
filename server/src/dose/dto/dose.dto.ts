import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDoseDto {
  // 胰岛素的名称
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // name:string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId: string;

  // 胰岛素类型（1白天/2夜晚）
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  type: number;

  // 胰岛素瓶的单位
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  allDose: number;

  // 胰岛素的价格
  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  remaining: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  frequency: number
}

export class DoseListDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId: string;

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
  @IsString()
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

export class GetDoseInfo {
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // userId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // remaining: number;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // frequency: number;
}

export class PutDoseInfo extends GetDoseInfo {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  dose: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  frequency: number
}
