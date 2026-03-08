import { Body, Controller, Get, Query, Post, HttpCode, All } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConnectDto } from './dtos/connect.dto';
import { IclockService } from './iclock.service';
import { DeviceContextGuard } from 'src/device/guards/device-context.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentDevice } from 'src/device/decorators/device.decorator';
import { Device } from 'src/device/entities/device.entity';
import { PushDto } from './dtos/push.dto';
import { GetRequestDto } from './dtos/get-request.dto';

@Controller('iclock')
@ApiTags('iClock Protocol')
@UseGuards(DeviceContextGuard)
export class IclockController {
    constructor(private readonly iclockService: IclockService) {}
    @Get('/cdata')
    @ApiOperation({ summary: 'Get device options', description: 'Retrieve configuration options for connected device' })
    @ApiResponse({ status: 200, description: 'Connected successfully' })
    @ApiResponse({ status: 404, description: 'Not Authorized Terminal' })
    async getOptions(@CurrentDevice() device: Device, @Query() _query: ConnectDto): Promise<string> {
        return this.iclockService.getOptions(device);
    }

    @Post('/cdata')
    @HttpCode(200)
    @ApiOperation({ summary: 'Push device data', description: 'Receive and process data from device' })
    @ApiResponse({ status: 200, description: 'Data processed successfully' })
    async push(@CurrentDevice() device: Device, @Query() query: PushDto, @Body() body: string): Promise<string> {
        return this.iclockService.push(device, query, body);
    }

    @Get('/getrequest')
    @ApiOperation({ summary: 'Get device requests', description: 'Retrieve pending requests for device' })
    @ApiResponse({ status: 200, description: 'Requests retrieved successfully' })
    async getrequest(@CurrentDevice() device: Device, @Query() query: GetRequestDto): Promise<string> {
        return this.iclockService.getRequest(device, query.INFO);
    }

    @Post('/devicecmd')
    @HttpCode(200)
    @ApiOperation({ summary: 'Confirm device command', description: 'Confirm execution of device command' })
    @ApiResponse({ status: 200, description: 'Command confirmed successfully' })
    async confirm(@CurrentDevice() device: Device, @Body() body: string): Promise<string> {
        return this.iclockService.confirm(device, body);
    }

    @Post('/registry')
    @HttpCode(200)
    @ApiOperation({ summary: 'Registry device', description: 'Register a new device in the system' })
    async registry(): Promise<string> {
        return 'RegistryCode='+Date.now().toString();
    }

    @All('*')
    @HttpCode(200)
    async catchAll(): Promise<string> {
        return this.iclockService.ok();
    }
}
