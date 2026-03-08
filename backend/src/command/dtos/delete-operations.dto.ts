import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';
import { Tables } from '../enums/table.enum';

export class DeleteOperationDto {
    @ApiProperty({
        description: 'User PIN to delete data for',
        example: '123'
    })
    @IsString()
    pin: string;

    @ApiProperty({
        enum: Tables,
        description: 'Table to delete data from',
        example: Tables.USERS
    })
    @IsEnum(Tables)
    table: Tables;
}