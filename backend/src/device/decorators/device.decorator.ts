import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Device } from '../entities/device.entity';

export const CurrentDevice = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Device => {
    const request = ctx
      .switchToHttp()
      .getRequest<Request & { device: Device }>();
    return request.device;
  },
);
