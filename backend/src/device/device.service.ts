import { Injectable, NotFoundException } from '@nestjs/common';
import { DeviceCrudDto, DeviceDto } from './dtos/device.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
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
        const device = await this.deviceRepository.findOneBy({ id });
        if (!device) {
            throw new NotFoundException('Device not found');
        }
        return this.deviceRepository.save({ ...device, ...deviceDto });
    }

    async delete(id: string): Promise<void> {
        await this.deviceRepository.delete(id);
    }
}
