import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { SimpleCommand } from '../enums/simple-command.enum';

export class SimpleCommandDto {
    @ApiProperty({ 
        enum: SimpleCommand,
        description: 'Type of simple command to execute',
        example: SimpleCommand.CHECK
    })
    @IsEnum(SimpleCommand)
    command: SimpleCommand;
}