import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IclockModule } from './iclock/iclock.module';
import { DeviceModule } from './device/device.module';
import { appDataSource } from './data-source';
import { CommandModule } from './command/command.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(appDataSource.options),
    IclockModule,
    DeviceModule,
    CommandModule,
    UserModule,
  ],
})
export class AppModule {}
