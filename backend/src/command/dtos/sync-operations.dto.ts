import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min, Max, IsBoolean, IsOptional } from 'class-validator';

export class SyncUserDto {
    @ApiProperty({
        description: 'User PIN to sync to device',
        example: '123'
    })
    @IsString()
    pin: string;

    @ApiProperty({
        description: 'With fingerprint sync',
        example: false
    })
    @IsBoolean()
    @IsOptional()
    with_fingerprint?: boolean;
}

export class SyncFingerprintDto {
    @ApiProperty({
        description: 'User PIN for fingerprint sync',
        example: '123'
    })
    @IsString()
    pin: string;

    @ApiProperty({
        description: 'Finger number (1-10) Left Pinky -> Right Pinky',
        example: 1,
        minimum: 1,
        maximum: 10
    })
    @IsNumber()
    @Min(1)
    @Max(10)
    finger: number;
}