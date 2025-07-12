import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class DeviceDto {
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    id: string;
    @ApiProperty({ example: 'CXQW123456789', uniqueItems: true })
    serial_number: string;
    @ApiProperty({ example: 'Device Name' })
    name?: string;
    @ApiProperty({ example: '1.0.0', required: false })
    push_version?: string;
    @ApiProperty({ example: true })
    online: boolean;
    @ApiProperty({ example: '2025-07-09T20:58:32.000Z', required: false })
    last_heartbeat?: Date;
    @ApiProperty({ example: 10 })
    heartbeat: number;
    @ApiProperty({ example: 3 })
    time_zone: number;
    @ApiProperty({ example: '192.168.1.1', required: false })
    ip_address?: string;
    @ApiProperty({ example: 69 })
    language: number;
    @ApiProperty({ example: 1 })
    user_count: number;
    @ApiProperty({ example: 1 })
    fingerprint_count: number;
    @ApiProperty({ example: 1 })
    transaction_count: number;
}


export class DeviceCrudDto {
    @ApiProperty({ example: 'CXQW123456789', uniqueItems: true })
    @IsString()
    serial_number: string;
    @ApiProperty({ example: 10 })
    @IsNumber()
    heartbeat: number;
    @ApiProperty({ example: 3 })
    @IsNumber()
    time_zone: number;
}
    