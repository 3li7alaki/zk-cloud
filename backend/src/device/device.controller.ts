import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeviceDto, DeviceCrudDto } from './dtos/device.dto';
import { DeviceService } from './device.service';
import { UuidParamDto } from 'src/common/dtos/uuid-param.dto';

@Controller('devices')
@ApiTags('Device Management')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}
    @Get()
    findAll(): Promise<DeviceDto[]> {
        return this.deviceService.findAll();
    }

    @Get(':id')
    findOne(@Param() params: UuidParamDto): Promise<DeviceDto> {
        return this.deviceService.findOne(params.id);
    }

    @Post()
    create(@Body() deviceDto: DeviceCrudDto): Promise<DeviceDto> {
        return this.deviceService.create(deviceDto);
    }

    @Put(':id')
    update(@Param() params: UuidParamDto, @Body() deviceDto: DeviceCrudDto): Promise<DeviceDto> {
        return this.deviceService.update(params.id, deviceDto);
    }

    @Delete(':id')
    delete(@Param() params: UuidParamDto): Promise<void> {
        return this.deviceService.delete(params.id);
    }
}
