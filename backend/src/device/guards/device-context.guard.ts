import { Injectable, CanActivate, ExecutionContext, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { DeviceService } from '../device.service';
import { Request } from 'express';

@Injectable()
export class DeviceContextGuard implements CanActivate {
    constructor(private readonly deviceService: DeviceService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest<Request>();
            
            if (typeof request.query.SN !== 'string') {
                throw new HttpException('Device serial number required', HttpStatus.OK);
            }

            const serialNumber = request.query.SN;

            const device = await this.deviceService.findOneBySerialNumber(serialNumber);

            const updateData: Partial<typeof device> = {};
            
            if (typeof request.query.INFO === 'string') {
                const data = request.query.INFO.split(',');
                updateData.user_count = Number(data[1]);
                updateData.fingerprint_count = Number(data[2]);
                updateData.transaction_count = Number(data[3]);
                updateData.ip_address = data[4];
            }

            if (typeof request.query.pushver === 'string') {
                updateData.push_version = request.query.pushver;
            }
            
            await this.deviceService.updateWithHeartbeat(device.id, updateData);
            
            // Attach device to request context
            request['device'] = device;
            
            return true;
        } catch (error) {
            // Acknowledge the device but mark it as not authorized
            throw new HttpException('Not Authorized Terminal', HttpStatus.OK);
        }
    }
}