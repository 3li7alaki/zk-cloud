import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { DeviceService } from './device.service';
import { Device } from './entities/device.entity';

describe('DeviceService', () => {
    let service: DeviceService;

    const mockQueryBuilder = {
        update: jest.fn().mockReturnThis(),
        set: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        execute: jest.fn().mockResolvedValue({ affected: 2 }),
    };

    const mockRepository = {
        find: jest.fn(),
        findOneBy: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        delete: jest.fn(),
        update: jest.fn(),
        createQueryBuilder: jest.fn().mockReturnValue(mockQueryBuilder),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeviceService,
                { provide: getRepositoryToken(Device), useValue: mockRepository },
            ],
        }).compile();

        service = module.get<DeviceService>(DeviceService);
        jest.clearAllMocks();
        mockRepository.createQueryBuilder.mockReturnValue(mockQueryBuilder);
    });

    const mockDevice: Partial<Device> = {
        id: 'device-uuid-1',
        serial_number: 'SN123456',
        name: 'Test Device',
        model: 'ZK-100',
        online: true,
        heartbeat: 10,
        time_zone: 3,
    };

    describe('findAll', () => {
        it('should return an array of devices', async () => {
            mockRepository.find.mockResolvedValue([mockDevice]);
            const result = await service.findAll();
            expect(result).toEqual([mockDevice]);
        });
    });

    describe('findOne', () => {
        it('should return a device by id', async () => {
            mockRepository.findOneBy.mockResolvedValue(mockDevice);
            const result = await service.findOne('device-uuid-1');
            expect(result).toEqual(mockDevice);
            expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: 'device-uuid-1' });
        });

        it('should throw NotFoundException when device not found', async () => {
            mockRepository.findOneBy.mockResolvedValue(null);
            await expect(service.findOne('nonexistent')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findOneBySerialNumber', () => {
        it('should return a device by serial number', async () => {
            mockRepository.findOneBy.mockResolvedValue(mockDevice);
            const result = await service.findOneBySerialNumber('SN123456');
            expect(result).toEqual(mockDevice);
            expect(mockRepository.findOneBy).toHaveBeenCalledWith({ serial_number: 'SN123456' });
        });

        it('should throw NotFoundException when not found', async () => {
            mockRepository.findOneBy.mockResolvedValue(null);
            await expect(service.findOneBySerialNumber('INVALID')).rejects.toThrow(NotFoundException);
        });
    });

    describe('create', () => {
        it('should create and save a device', async () => {
            const dto = { serial_number: 'SN999', name: 'New', heartbeat: 10, time_zone: 3 };
            mockRepository.create.mockReturnValue({ ...mockDevice, ...dto });
            mockRepository.save.mockResolvedValue({ ...mockDevice, ...dto });

            const result = await service.create(dto);
            expect(mockRepository.create).toHaveBeenCalledWith(dto);
            expect(mockRepository.save).toHaveBeenCalled();
            expect(result.serial_number).toBe('SN999');
        });
    });

    describe('update', () => {
        it('should find then save updated device', async () => {
            const dto = { serial_number: 'SN-UP', name: 'Updated', heartbeat: 20, time_zone: 5 };
            mockRepository.findOneBy.mockResolvedValue(mockDevice);
            mockRepository.save.mockResolvedValue({ ...mockDevice, ...dto });

            const result = await service.update('device-uuid-1', dto);
            expect(result.name).toBe('Updated');
        });
    });

    describe('delete', () => {
        it('should find then delete device', async () => {
            mockRepository.findOneBy.mockResolvedValue(mockDevice);
            mockRepository.delete.mockResolvedValue(undefined);

            await service.delete('device-uuid-1');
            expect(mockRepository.delete).toHaveBeenCalledWith(mockDevice);
        });
    });

    describe('checkDeviceHeartbeats', () => {
        it('should mark stale devices as offline', async () => {
            mockQueryBuilder.execute.mockResolvedValue({ affected: 3 });
            await service.checkDeviceHeartbeats();

            expect(mockQueryBuilder.update).toHaveBeenCalledWith(Device);
            expect(mockQueryBuilder.set).toHaveBeenCalledWith({ online: false });
            expect(mockQueryBuilder.where).toHaveBeenCalledWith('online = true');
            expect(mockQueryBuilder.andWhere).toHaveBeenCalledWith(
                'last_heartbeat < :fiveMinutesAgo OR last_heartbeat IS NULL',
                expect.objectContaining({ fiveMinutesAgo: expect.any(Date) }),
            );
        });
    });

    describe('updateWithHeartbeat', () => {
        it('should update device with heartbeat and online=true', async () => {
            mockRepository.update.mockResolvedValue(undefined);
            await service.updateWithHeartbeat('device-uuid-1', { ip_address: '1.2.3.4' });

            expect(mockRepository.update).toHaveBeenCalledWith('device-uuid-1', {
                ip_address: '1.2.3.4',
                last_heartbeat: expect.any(Date),
                online: true,
            });
        });
    });
});
