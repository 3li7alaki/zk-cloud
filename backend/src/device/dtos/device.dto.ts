import { ApiProperty, ApiResponseProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, IsOptional } from "class-validator";

export class DeviceDto {
    @ApiResponseProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    id: string;
    @ApiResponseProperty({ example: 'CXQW123456789' })
    serial_number: string;
    @ApiPropertyOptional({ readOnly: true, example: 'Device Name' })
    name?: string;
    @ApiPropertyOptional({ readOnly: true, example: '1.0.0'})
    push_version?: string;
    @ApiPropertyOptional({ readOnly: true, example: 10, type: Number })
    fingerprint_version?: number;
    @ApiResponseProperty({ example: true })
    online: boolean;
    @ApiPropertyOptional({ readOnly: true, example: '2025-07-09T20:58:32.000Z', type: Date })
    last_heartbeat?: Date;
    @ApiResponseProperty({ example: 10, type: Number })
    heartbeat: number;
    @ApiResponseProperty({ example: 3, type: Number })
    time_zone: number;
    @ApiPropertyOptional({ readOnly: true, example: '192.168.1.1' })
    ip_address?: string;
    @ApiResponseProperty({ example: 69, type: Number })
    language: number;
    @ApiResponseProperty({ example: 1, type: Number })
    user_count: number;
    @ApiResponseProperty({ example: 1, type: Number })
    fingerprint_count: number;
    @ApiResponseProperty({ example: 1, type: Number })
    transaction_count: number;
}


export class DeviceCrudDto {
    @ApiProperty({ example: 'CXQW123456789', uniqueItems: true })
    @IsString()
    serial_number: string;
    @ApiProperty({ example: 10, type: Number })
    @IsNumber()
    heartbeat: number;
    @ApiProperty({ example: 3, type: Number })
    @IsNumber()
    time_zone: number;
    
    @ApiPropertyOptional({ example: 'Device Name' })
    @IsString()
    @IsOptional()
    name?: string;
    
    @ApiPropertyOptional({ example: 1, type: Number })
    @IsNumber()
    @IsOptional()
    transaction_count?: number;
    
    @ApiPropertyOptional({ example: 1, type: Number })
    @IsNumber()
    @IsOptional()
    user_count?: number;
    
    @ApiPropertyOptional({ example: 1, type: Number })
    @IsNumber()
    @IsOptional()
    fingerprint_count?: number;
    
    @ApiPropertyOptional({ example: 69, type: Number })
    @IsNumber()
    @IsOptional()
    language?: number;
    
    @ApiPropertyOptional({ example: 10, type: Number })
    @IsNumber()
    @IsOptional()
    fingerprint_version?: number;
    
    @ApiPropertyOptional({ example: '192.168.1.1' })
    @IsString()
    @IsOptional()
    ip_address?: string;
}
    