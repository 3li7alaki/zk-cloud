import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { CommandDto } from "../../command/dtos/command.dto";

export class DeviceDto {
    @ApiProperty({ readOnly: true, example: '123e4567-e89b-12d3-a456-426614174000', description: 'Device ID' })
    id: string;
    @ApiProperty({ readOnly: true, example: 'CXQW123456789', description: 'Device serial number' })
    serial_number: string;
    @ApiProperty({ readOnly: true, example: 'Device Name', description: 'Device name' })
    name: string;
    @ApiPropertyOptional({ readOnly: true, example: 'Device Model', description: 'Device model' })
    model?: string;
    @ApiPropertyOptional({ readOnly: true, example: '1.0.0', description: 'Device push version' })
    push_version?: string;
    @ApiProperty({ readOnly: true, example: 10, type: Number, description: 'Device fingerprint version' })
    fingerprint_version: number;
    @ApiProperty({ readOnly: true, example: 0, type: Number, description: 'Device face version' })
    face_version: number;
    @ApiProperty({ readOnly: true, example: 0, type: Number, description: 'Device palm version' })
    palm_version: number;
    @ApiProperty({ readOnly: true, example: true, description: 'Device online status' })
    online: boolean;
    @ApiPropertyOptional({ readOnly: true, example: '2025-07-09T20:58:32.000Z', type: Date, description: 'Device last heartbeat' })
    last_heartbeat?: Date;
    @ApiProperty({ example: 10, type: Number, description: 'Device heartbeat' })
    heartbeat: number;
    @ApiProperty({ example: 3, type: Number, description: 'Device time zone' })
    time_zone: number;
    @ApiPropertyOptional({ readOnly: true, example: '192.168.1.1', description: 'Device IP address' })
    ip_address?: string;
    @ApiProperty({ readOnly: true, example: 69, type: Number, description: 'Device language' })
    language: number;
    @ApiProperty({ readOnly: true, example: 1, type: Number, description: 'Device user count' })
    user_count: number;
    @ApiProperty({ readOnly: true, example: 1, type: Number, description: 'Device fingerprint count' })
    fingerprint_count: number;
    @ApiProperty({ readOnly: true, example: 1, type: Number, description: 'Device transaction count' })
    transaction_count: number;
    @ApiProperty({ readOnly: true, example: 0, type: Date, description: 'Device stamp' })
    stamp: Date;
    @ApiProperty({ readOnly: true, example: 0, type: Date, description: 'Device op stamp' })
    op_stamp: Date;
    @ApiProperty({ type: () => [CommandDto], description: 'Device commands' })
    commands: CommandDto[];
}


export class DeviceCrudDto {
    @ApiProperty({ example: 'CXQW123456789', uniqueItems: true, description: 'Device serial number' })
    @IsString()
    serial_number: string;

    @ApiProperty({ example: 10, type: Number, description: 'Device heartbeat' })
    @IsNumber()
    heartbeat: number;

    @ApiProperty({ example: 3, type: Number, description: 'Device time zone' })
    @IsNumber()
    time_zone: number;
    
    @ApiProperty({ example: 'Device Name', description: 'Device name' })
    @IsString()
    name: string;
}
    