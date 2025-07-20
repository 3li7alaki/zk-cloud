import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "../enums/role.enum";
import { EmptyStringToNull } from "src/common/transformers/empty-string-to-null.transformer";

export class UserDto {
    @ApiResponseProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    id: string;

    @ApiResponseProperty({ example: 'ABC-123456' })
    pin: string;

    @ApiResponseProperty({ example: 'John Doe' })
    name: string;

    @ApiPropertyOptional({ readOnly: true, example: '1234567890' })
    password?: string;

    @ApiResponseProperty({ example: Role.EMPLOYEE, enum: Role })
    role: Role;

    @ApiPropertyOptional({ readOnly: true, example: '1234567890' })
    card_number?: string;
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
