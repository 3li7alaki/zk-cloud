import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { IclockController } from './iclock.controller';
import { IclockService } from './iclock.service';
import { IclockMiddleware } from './iclock.middleware';
import { DeviceModule } from 'src/device/device.module';
import { CommandModule } from 'src/command/command.module';
import { UserModule } from 'src/user/user.module';
import { AttendanceModule } from 'src/attendance/attendance.module';

@Module({
  controllers: [IclockController],
  providers: [IclockService],
  imports: [DeviceModule, CommandModule, UserModule, AttendanceModule]
})
export class IclockModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IclockMiddleware)
      .forRoutes(IclockController);
  }
}
