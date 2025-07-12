import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Device } from '../entities/device.entity';

export const CurrentDevice = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): Device => {
        const request = ctx.switchToHttp().getRequest();
        return request.device;
    },
);