import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { IclockModule } from './iclock/iclock.module';
import { DeviceModule } from './device/device.module';
import { appDataSource } from './data-source';
import { CommandModule } from './command/command.module';
import { UserModule } from './user/user.module';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(appDataSource.options),
    ScheduleModule.forRoot(),
    IclockModule,
    DeviceModule,
    CommandModule,
    UserModule,
    AttendanceModule,
  ],
})
export class AppModule {}
