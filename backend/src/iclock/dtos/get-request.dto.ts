import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class GetRequestDto {
    @ApiProperty({ example: 'CXQW123456789', description: 'Device serial number' })
    @IsString()
    SN: string;

    @ApiProperty({ example: 'Ver%208.0.4.3-20220708,1,2,3,192.168.100.196,10,-1,0,0,101,0,0,0', description: 'Device info' })
    @IsString()
    @IsOptional()
    INFO?: string;
}