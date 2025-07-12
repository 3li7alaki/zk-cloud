import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './services/user.service';
import { UserDto, UserCrudDto } from './dtos/user.dto';
import { UuidParamDto } from 'src/common/dtos/uuid-param.dto';

@Controller('users')
@ApiTags('Users Management')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param() params: UuidParamDto): Promise<UserDto> {
        return this.userService.findOne(params.id);
    }

    @Post()
    create(@Body() userDto: UserCrudDto): Promise<UserDto> {
        return this.userService.create(userDto);
    }

    @Put(':id')
    update(@Param() params: UuidParamDto, @Body() userDto: UserCrudDto): Promise<UserDto> {
        return this.userService.update(params.id, userDto);
    }

    @Delete(':id')
    delete(@Param() params: UuidParamDto): Promise<void> {
        return this.userService.delete(params.id);
    }
}
