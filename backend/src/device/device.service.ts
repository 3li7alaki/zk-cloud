import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { DeviceCrudDto, DeviceDto } from './dtos/device.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { IsNull, LessThan, Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class DeviceService {
    private readonly logger = new Logger(DeviceService.name);

    constructor(
        @InjectRepository(Device)
        private readonly deviceRepository: Repository<Device>
    ) {}

    async findAll(): Promise<DeviceDto[]> {
        return this.deviceRepository.find();
    }

    async findOne(id: string): Promise<DeviceDto> {
        const device = await this.deviceRepository.findOneBy({ id });
        if (!device) {
            throw new NotFoundException('Device not found');
        }
        return device;
    }

    async findOneBySerialNumber(serialNumber: string): Promise<DeviceDto> {
        const device = await this.deviceRepository.findOneBy({ serial_number: serialNumber });
        if (!device) {
            throw new NotFoundException('Device not found');
        }
        return device;
    }

    async create(deviceDto: DeviceCrudDto): Promise<DeviceDto> {
        const device = this.deviceRepository.create(deviceDto);
        return this.deviceRepository.save(device);
    }

    async update(id: string, deviceDto: DeviceCrudDto): Promise<DeviceDto> {
        const device = await this.findOne(id);
        return this.deviceRepository.save({ ...device, ...deviceDto });
    }

    async delete(id: string): Promise<void> {
        const device = await this.findOne(id);
        await this.deviceRepository.delete(device);
    }

    @Cron('*/5 * * * *')
    async checkDeviceHeartbeats(): Promise<void> {
        this.logger.log('Checking device heartbeats...');
        
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

        const result = await this.deviceRepository
            .createQueryBuilder()
            .update(Device)
            .set({ online: false })
            .where('online = true')
            .andWhere('last_heartbeat < :fiveMinutesAgo OR last_heartbeat IS NULL', { fiveMinutesAgo })
            .execute();

        const affected = result.affected || 0;
        
        this.logger.log(`Marked ${affected} devices as offline due to missed heartbeats`);
    }

    async updateWithHeartbeat(id: string, updateData: Partial<Device>): Promise<void> {
        await this.deviceRepository.update(id, {
            ...updateData,
            last_heartbeat: new Date(),
            online: true
        });
    }
}
