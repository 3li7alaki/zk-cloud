import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "../enums/role.enum";
import { EmptyStringToNull } from "../../common/transformers/empty-string-to-null.transformer";
import { BiodataDto } from "./biodata.dto";

export class UserDto {
    @ApiProperty({ readOnly: true, example: '123e4567-e89b-12d3-a456-426614174000', description: 'User ID' })
    id: string;

    @ApiProperty({ example: 'ABC-123456', description: 'User PIN identifier' })
    pin: string;

    @ApiProperty({ example: 'John Doe', description: 'User name' })
    name: string;

    @ApiPropertyOptional({ readOnly: true, example: '1234567890', description: 'User password' })
    password?: string;

    @ApiProperty({ example: Role.EMPLOYEE, enum: Role, description: 'User role' })
    role: Role;

    @ApiPropertyOptional({ readOnly: true, example: '1234567890', description: 'User card number' })
    card_number?: string;

    @ApiResponseProperty({ type: () => [BiodataDto] })
    biodata: BiodataDto[];
}

export class UserCrudDto {
    @ApiProperty({ example: 'ABC-123456' })
    @IsString()
    pin: string;

    @ApiProperty({ example: 'John Doe' })
    @IsString()
    name: string;

    @ApiPropertyOptional({ example: '1234567890' })
    @IsString()
    @IsOptional()
    @EmptyStringToNull()
    password?: string;
    
    @ApiProperty({ example: Role.EMPLOYEE, enum: Role })
    @IsEnum(Role)
    role: Role;
    
    @ApiPropertyOptional({ example: '1234567890' })
    @IsString()
    @IsOptional()
    @EmptyStringToNull()
    card_number?: string;
}
