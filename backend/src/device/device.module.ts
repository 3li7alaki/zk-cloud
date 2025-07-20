import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { DeviceController } from './device.controller';
import { Command } from '../command/entities/command.entity';

@Module({
  providers: [DeviceService],
  imports: [TypeOrmModule.forFeature([Device, Command])],
  controllers: [DeviceController],
  exports: [DeviceService],
})
export class DeviceModule {}
