import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './services/user.service';
import { UserDto, UserCrudDto } from './dtos/user.dto';
import { UuidParamDto } from 'src/common/dtos/uuid-param.dto';

@Controller('users')
@ApiTags('Users Management')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    @ApiOperation({ summary: 'Get all users', description: 'Retrieve all registered users' })
    @ApiResponse({ status: 200, description: 'Users retrieved successfully', type: [UserDto] })
    findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get user by ID', description: 'Retrieve a specific user by their UUID' })
    @ApiResponse({ status: 200, description: 'User retrieved successfully', type: UserDto })
    @ApiResponse({ status: 404, description: 'User not found' })
    findOne(@Param() params: UuidParamDto): Promise<UserDto> {
        return this.userService.findOne(params.id);
    }

    @Post()
    @ApiOperation({ summary: 'Create new user', description: 'Register a new user in the system' })
    @ApiResponse({ status: 201, description: 'User created successfully', type: UserDto })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    create(@Body() userDto: UserCrudDto): Promise<UserDto> {
        return this.userService.create(userDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update user', description: 'Update an existing user' })
    @ApiResponse({ status: 200, description: 'User updated successfully', type: UserDto })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    update(@Param() params: UuidParamDto, @Body() userDto: UserCrudDto): Promise<UserDto> {
        return this.userService.update(params.id, userDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete user', description: 'Remove a user from the system' })
    @ApiResponse({ status: 200, description: 'User deleted successfully' })
    @ApiResponse({ status: 404, description: 'User not found' })
    delete(@Param() params: UuidParamDto): Promise<void> {
        return this.userService.delete(params.id);
    }
}
