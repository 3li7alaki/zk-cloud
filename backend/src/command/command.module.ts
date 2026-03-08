import { Module } from '@nestjs/common';
import { CommandService } from './command.service';
import { CommandController } from './command.controller';
import { CommanderService } from './commander.service';
import { Command } from './entities/command.entity';
import { CommandTransaction } from './entities/command-transaction.entity';
import { Device } from '../device/entities/device.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceModule } from '../device/device.module';
import { UserModule } from '../user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Command, CommandTransaction, Device]), DeviceModule, UserModule],
    providers: [CommandService, CommanderService],
    exports: [CommandService, CommanderService],
    controllers: [CommandController],
})
export class CommandModule {}
