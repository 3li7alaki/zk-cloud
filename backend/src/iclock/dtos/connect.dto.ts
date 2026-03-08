import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString, IsOptional, IsString } from "class-validator";

export class ConnectDto {
    @ApiProperty({ example: 'CXQW123456789', description: 'Device serial number' })
    @IsString()
    SN: string;

    @ApiProperty({ example: 'all', description: 'Options required to connect device' })
    @IsString()
    options: string;

    @ApiProperty({ example: '69', description: 'Device language' })
    @IsOptional()
    @IsNumberString()
    language?: number;

    @ApiProperty({ example: '1.0.0', description: 'Device push version' })
    @IsString()
    pushver: string;

    @ApiProperty({ example: 'middle east', description: 'Device type' })
    @IsString()
    DeviceType: string;

    @ApiProperty({ example: '1', description: 'Push options flag' })
    @IsNumberString()
    PushOptionsFlag: number;
}