import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { BiometricType } from '../enums/biometric-type.enum';
import { UserDto } from './user.dto';
import { DeviceDto } from 'src/device/dtos/device.dto';

export class BiodataDto {
    @ApiProperty({ readOnly: true, example: '123', description: 'User PIN identifier' })
    user_pin: string;

    @ApiProperty({
        readOnly: true,
        enum: BiometricType,
        example: BiometricType.FINGERPRINT,
        description: 'Biometric type'
    })
    type: BiometricType;

    @ApiPropertyOptional({
        readOnly: true,
        example: 1,
        description: 'Biometric number (finger number [1-10], face/palm template number)'
    })
    number: number;

    @ApiProperty({
        readOnly: true,
        description: 'Biometric template data (Base64 for fingerprints, JSON for face/palm)',
        example: 'TY9TUzIxAAAEzM4...'
    })
    template: string;

    @ApiProperty({
        readOnly: true,
        description: 'Algorithm major version',
        example: 58
    })
    major_version: number;

    @ApiProperty({
        readOnly: true,
        description: 'Algorithm minor version',
        example: 12
    })
    minor_version: number;

    @ApiPropertyOptional({
        readOnly: true,
        description: 'Device ID where biometric was captured',
        example: '550e8400-e29b-41d4-a716-446655440000'
    })
    device_id?: string;

    @ApiProperty({
        readOnly: true,
        description: 'User',
        type: () => UserDto
    })
    user: UserDto;

    @ApiPropertyOptional({
        readOnly: true,
        description: 'Device',
        type: () => DeviceDto
    })
    device?: DeviceDto;
}

export class BiodataCrudDto {
    @ApiProperty({
        description: 'User PIN identifier',
        example: '123'
    })
    @IsString()
    @IsNotEmpty()
    user_pin: string;

    @ApiProperty({
        description: 'Biometric type',
        enum: BiometricType,
        example: BiometricType.FINGERPRINT
    })
    @IsNumber()
    type: BiometricType;

    @ApiProperty({
        description: 'Biometric number (finger number [1-10], face/palm template number)',
        example: 1
    })
    @IsNumber()
    number: number;

    @ApiProperty({
        description: 'Biometric template data (Base64 for fingerprints, JSON for face/palm)',
        example: 'TY9TUzIxAAAEzM4...'
    })
    @IsString()
    @IsNotEmpty()
    template: string;

    @ApiProperty({
        description: 'Algorithm major version',
        example: 58
    })
    @IsNumber()
    major_version: number;

    @ApiProperty({
        description: 'Algorithm minor version',
        example: 12
    })
    @IsNumber()
    minor_version: number;

    @ApiPropertyOptional({
        description: 'Device ID where biometric was captured',
        example: '550e8400-e29b-41d4-a716-446655440000'
    })
    @IsOptional()
    @IsUUID()
    device_id?: string;
}