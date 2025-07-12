import { Injectable, CanActivate, ExecutionContext, NotFoundException } from '@nestjs/common';
import { DeviceService } from '../device.service';
import { Request } from 'express';

@Injectable()
export class DeviceContextGuard implements CanActivate {
    constructor(private readonly deviceService: DeviceService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const serialNumber = request.query.SN;
        
        if (!serialNumber) {
            throw new NotFoundException('Device serial number required');
        }

        const device = await this.deviceService.findOneBySerialNumber(serialNumber as string);
        
        // Update heartbeat immediately
        device.last_heartbeat = new Date();
        device.online = true;
        await this.deviceService.update(device.id, device);
        
        // Attach device to request context
        request['device'] = device;
        
        return true;
    }
}