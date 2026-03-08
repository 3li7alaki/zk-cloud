import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class GetFingerprintsDto {
    @ApiPropertyOptional({
        description: 'User PIN to get fingerprints for specific user',
        example: '123'
    })
    @IsOptional()
    @IsString()
    pin?: string;
}

export class EnrollFingerprintDto {
    @ApiProperty({
        description: 'User PIN for fingerprint enrollment',
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

export class UpdateFingerprintDto {
    @ApiProperty({
        description: 'User PIN for fingerprint update',
        example: '123'
    })
    @IsString()
    pin: string;

    @ApiProperty({
        description: 'Finger number (0-9)',
        example: 0,
        minimum: 0,
        maximum: 9
    })
    @IsNumber()
    @Min(0)
    @Max(9)
    finger: number;

    @ApiProperty({
        description: 'Fingerprint template data',
        example: 'fingerprint_template_data_here'
    })
    @IsString()
    template: string;
}