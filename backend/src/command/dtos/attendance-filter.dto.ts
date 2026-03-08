import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class AttendanceFilterDto {
    @ApiPropertyOptional({
        description: 'Start time filter for attendance records',
        example: '2024-01-01 00:00:00'
    })
    @IsOptional()
    @IsDateString()
    StartTime?: string;

    @ApiPropertyOptional({
        description: 'End time filter for attendance records', 
        example: '2024-12-31 23:59:59'
    })
    @IsOptional()
    @IsDateString()
    EndTime?: string;

    @ApiPropertyOptional({
        description: 'User PIN to filter attendance records',
        example: '123'
    })
    @IsOptional()
    @IsString()
    PIN?: string;
}