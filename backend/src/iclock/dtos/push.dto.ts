import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsEnum, IsOptional, IsNumberString } from "class-validator";
import { Tables } from "../enums/table.enum";

export class PushDto {
    @ApiProperty({ example: 'CXQW123456789' })
    @IsString()
    SN: string;

    @ApiProperty({ example: Tables.ATTENDANCE, enum: Tables })
    @IsEnum(Tables)
    table: Tables;

    @ApiPropertyOptional({ example: '9999' })
    @IsNumberString()
    @IsOptional()
    Stamp?: number;

    @ApiPropertyOptional({ example: '9999' })
    @IsNumberString()
    @IsOptional()
    OpStamp?: number;

    @ApiPropertyOptional({ example: 1 })
    @IsNumberString()
    @IsOptional()
    Count?: number;

    @ApiPropertyOptional({ example: 1 })
    @IsNumberString()
    @IsOptional()
    PackCnt?: number;

    @ApiPropertyOptional({ example: 1 })
    @IsNumberString()
    @IsOptional()
    PackIdx?: number;

    @ApiPropertyOptional({ example: 1 })
    @IsNumberString()
    @IsOptional()
    CmdId?: number;
}