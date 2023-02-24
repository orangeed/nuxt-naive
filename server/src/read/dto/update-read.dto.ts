import { PartialType } from '@nestjs/swagger';
import { CreateReadDto } from './create-read.dto';

export class UpdateReadDto extends PartialType(CreateReadDto) {}
