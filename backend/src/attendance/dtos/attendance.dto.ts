import { ApiProperty, ApiResponseProperty } from "@nestjs/swagger";
import { IsDateString, IsString, IsUUID } from "class-validator";
import { UserDto } from "../../user/dtos/user.dto";
import { DeviceDto } from "../../device/dtos/device.dto";

export class AttendanceDto {
    @ApiResponseProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    id: string;

    @ApiResponseProperty({ example: 'ABC-123456' })
    user_pin: string;

    @ApiResponseProperty({ example: '2024-01-15T09:30:00.000Z' })
    time: Date;

    @ApiResponseProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    device_id: string;

    @ApiResponseProperty({ type: () => UserDto })
    user: UserDto;

    @ApiResponseProperty({ 
        type: () => DeviceDto
    })
    device: DeviceDto;
}

export class AttendanceCrudDto {
    @ApiProperty({ example: 'ABC-123456', description: 'User pin' })
    @IsString()
    user_pin: string;

    @ApiProperty({ example: '2024-01-15T09:30:00.000Z', description: 'Attendance time' })
    @IsDateString()
    time: string;

    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Device id' })
    @IsUUID()
    device_id: string;
}