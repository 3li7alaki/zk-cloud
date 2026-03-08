import { ApiProperty, ApiResponseProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";
import { CommandDto } from "./command.dto";

export class CommandTransactionDto {
    @ApiResponseProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    id: string;

    @ApiResponseProperty({ example: 'ABC-123456' })
    user_pin: string;

    @ApiResponseProperty({ example: '2024-01-15T09:30:00' })
    time: Date;

    @ApiResponseProperty({ example: 1 })
    command_id: number;

    @ApiResponseProperty({ type: () => CommandDto })
    command: CommandDto;
}

export class CommandTransactionCrudDto {
    @ApiProperty({ example: 'ABC-123456', description: 'User pin' })
    @IsString()
    user_pin: string;

    @ApiProperty({ example: '2024-01-15T09:30:00', description: 'Transaction time' })
    @IsString()
    time: string;

    @ApiProperty({ example: 1, description: 'Command id' })
    @IsNumber()
    command_id: number;
}