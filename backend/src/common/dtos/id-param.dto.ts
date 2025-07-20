import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class IdParamDto {
  @ApiProperty({
    description: 'Numeric ID',
    example: '123',
    type: Number
  })
  @IsNumberString()
  id: number;
}
