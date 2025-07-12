import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "../enums/role.enum";
import { EmptyStringToNull } from "src/common/transformers/empty-string-to-null.transformer";

export class UserDto {
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    id: string;
    @ApiProperty({ example: 'ABC-123456' })
    pin: string;
    @ApiProperty({ example: 'John Doe' })
    name: string;
    @ApiProperty({ example: '1234567890', required: false })
    password?: string;
    @ApiProperty({ example: Role.EMPLOYEE })
    role: Role;
    @ApiProperty({ example: '1234567890', required: false })
    card_number?: string;
}

export class UserCrudDto {
    @ApiProperty({ example: 'ABC-123456' })
    @IsString()
    pin: string;
    @ApiProperty({ example: 'John Doe' })
    @IsString()
    name: string;
    @ApiProperty({ example: '1234567890', required: false })
    @IsString()
    @IsOptional()
    @EmptyStringToNull()
    password?: string;
    @ApiProperty({ example: Role.EMPLOYEE })
    @IsEnum(Role)
    role: Role;
    @ApiProperty({ example: '1234567890', required: false })
    @IsString()
    @IsOptional()
    @EmptyStringToNull()
    card_number?: string;
}
