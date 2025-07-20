import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DeviceDto, DeviceCrudDto } from './dtos/device.dto';
import { DeviceService } from './device.service';
import { UuidParamDto } from 'src/common/dtos/uuid-param.dto';

@Controller('devices')
@ApiTags('Device Management')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}
    @Get()
    @ApiOperation({ summary: 'Get all devices', description: 'Retrieve all registered devices' })
    @ApiResponse({ status: 200, description: 'Devices retrieved successfully', type: [DeviceDto] })
    findAll(): Promise<DeviceDto[]> {
        return this.deviceService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get device by ID', description: 'Retrieve a specific device by its UUID' })
    @ApiResponse({ status: 200, description: 'Device retrieved successfully', type: DeviceDto })
    @ApiResponse({ status: 404, description: 'Device not found' })
    findOne(@Param() params: UuidParamDto): Promise<DeviceDto> {
        return this.deviceService.findOne(params.id);
    }

    @Post()
    @ApiOperation({ summary: 'Create new device', description: 'Register a new device in the system' })
    @ApiResponse({ status: 201, description: 'Device created successfully', type: DeviceDto })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    create(@Body() deviceDto: DeviceCrudDto): Promise<DeviceDto> {
        return this.deviceService.create(deviceDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update device', description: 'Update an existing device' })
    @ApiResponse({ status: 200, description: 'Device updated successfully', type: DeviceDto })
    @ApiResponse({ status: 404, description: 'Device not found' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    update(@Param() params: UuidParamDto, @Body() deviceDto: DeviceCrudDto): Promise<DeviceDto> {
        return this.deviceService.update(params.id, deviceDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete device', description: 'Remove a device from the system' })
    @ApiResponse({ status: 200, description: 'Device deleted successfully' })
    @ApiResponse({ status: 404, description: 'Device not found' })
    delete(@Param() params: UuidParamDto): Promise<void> {
        return this.deviceService.delete(params.id);
    }
}
