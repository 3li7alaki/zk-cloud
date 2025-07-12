import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { DeviceController } from './device.controller';

@Module({
  providers: [DeviceService],
  imports: [TypeOrmModule.forFeature([Device])],
  controllers: [DeviceController],
  exports: [DeviceService],
})
export class DeviceModule {}
