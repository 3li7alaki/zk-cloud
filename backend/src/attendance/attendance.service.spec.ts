import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { Attendance } from './entities/attendance.entity';

describe('AttendanceService', () => {
    let service: AttendanceService;

    const mockRepository = {
        find: jest.fn(),
        findOne: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        delete: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AttendanceService,
                { provide: getRepositoryToken(Attendance), useValue: mockRepository },
            ],
        }).compile();

        service = module.get<AttendanceService>(AttendanceService);
        jest.clearAllMocks();
    });

    const mockAttendance = { id: 'att-1', user_pin: '123', time: new Date(), device_id: 'dev-1' };

    describe('findAll', () => {
        it('should return all attendance records', async () => {
            mockRepository.find.mockResolvedValue([mockAttendance]);
            expect(await service.findAll()).toEqual([mockAttendance]);
        });
    });

    describe('findOne', () => {
        it('should return record by id', async () => {
            mockRepository.findOne.mockResolvedValue(mockAttendance);
            expect(await service.findOne('att-1')).toEqual(mockAttendance);
        });

        it('should throw NotFoundException', async () => {
            mockRepository.findOne.mockResolvedValue(null);
            await expect(service.findOne('x')).rejects.toThrow(NotFoundException);
        });
    });

    describe('create', () => {
        it('should convert time string to Date and save', async () => {
            const dto = { user_pin: '123', time: '2025-01-15T09:30:00Z', device_id: 'dev-1' };
            mockRepository.create.mockImplementation(v => v);
            mockRepository.save.mockImplementation(v => v);

            await service.create(dto);
            expect(mockRepository.create).toHaveBeenCalledWith(expect.objectContaining({
                time: expect.any(Date),
            }));
        });
    });

    describe('findByUserPin', () => {
        it('should find by user pin ordered by time DESC', async () => {
            mockRepository.find.mockResolvedValue([mockAttendance]);
            await service.findByUserPin('123');
            expect(mockRepository.find).toHaveBeenCalledWith({
                where: { user_pin: '123' },
                order: { time: 'DESC' },
            });
        });
    });

    describe('findByDeviceId', () => {
        it('should find by device id ordered by time DESC', async () => {
            mockRepository.find.mockResolvedValue([mockAttendance]);
            await service.findByDeviceId('dev-1');
            expect(mockRepository.find).toHaveBeenCalledWith({
                where: { device_id: 'dev-1' },
                order: { time: 'DESC' },
            });
        });
    });

    describe('createMany', () => {
        it('should batch create attendance records', async () => {
            const dtos = [
                { user_pin: '123', time: '2025-01-15T09:30:00Z', device_id: 'dev-1' },
                { user_pin: '456', time: '2025-01-15T10:00:00Z', device_id: 'dev-1' },
            ];
            mockRepository.create.mockImplementation(v => v);
            mockRepository.save.mockResolvedValue(dtos);

            await service.createMany(dtos);
            expect(mockRepository.create).toHaveBeenCalledTimes(2);
            expect(mockRepository.save).toHaveBeenCalled();
        });

        it('should return empty for empty input', async () => {
            expect(await service.createMany([])).toEqual([]);
        });
    });
});
