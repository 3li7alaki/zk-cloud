import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BiodataService } from './biodata.service';
import { Biodata } from '../entities/biodata.entity';
import { BiometricType } from '../enums/biometric-type.enum';

describe('BiodataService', () => {
    let service: BiodataService;

    const mockRepository = {
        find: jest.fn(),
        findOne: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        delete: jest.fn(),
        update: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BiodataService,
                { provide: getRepositoryToken(Biodata), useValue: mockRepository },
            ],
        }).compile();

        service = module.get<BiodataService>(BiodataService);
        jest.clearAllMocks();
    });

    describe('findAll', () => {
        it('should return biodata for a user', async () => {
            const data = [{ user_pin: '123', type: BiometricType.FINGERPRINT }];
            mockRepository.find.mockResolvedValue(data);
            expect(await service.findAll('123')).toEqual(data);
            expect(mockRepository.find).toHaveBeenCalledWith({ where: { user_pin: '123' } });
        });
    });

    describe('findFingerprint', () => {
        it('should find fingerprint by user and finger', async () => {
            const fp = { user_pin: '123', type: BiometricType.FINGERPRINT, number: 1, template: 'abc' };
            mockRepository.findOne.mockResolvedValue(fp);
            expect(await service.findFingerprint('123', 1)).toEqual(fp);
        });

        it('should throw when fingerprint not found', async () => {
            mockRepository.findOne.mockResolvedValue(null);
            await expect(service.findFingerprint('123', 1)).rejects.toThrow();
        });
    });

    describe('upsert', () => {
        const dto = { user_pin: '123', type: BiometricType.FINGERPRINT, number: 1, template: 'abc', major_version: 10, minor_version: 0 };

        it('should update existing biodata', async () => {
            const existing = { ...dto, template: 'old' };
            mockRepository.findOne.mockResolvedValue(existing);
            mockRepository.update.mockResolvedValue(undefined);

            const result = await service.upsert(dto);
            expect(mockRepository.update).toHaveBeenCalled();
            expect(result.template).toBe('abc');
        });

        it('should create new biodata', async () => {
            mockRepository.findOne.mockResolvedValue(null);
            mockRepository.create.mockReturnValue(dto);
            mockRepository.save.mockResolvedValue(dto);

            const result = await service.upsert(dto);
            expect(mockRepository.create).toHaveBeenCalledWith(dto);
            expect(result).toEqual(dto);
        });
    });

    describe('delete', () => {
        it('should delete by user_pin and type', async () => {
            await service.delete('123', BiometricType.FINGERPRINT);
            expect(mockRepository.delete).toHaveBeenCalledWith({ user_pin: '123', type: BiometricType.FINGERPRINT });
        });

        it('should delete with index when provided', async () => {
            await service.delete('123', BiometricType.FACE, 0);
            expect(mockRepository.delete).toHaveBeenCalledWith({ user_pin: '123', type: BiometricType.FACE, index: 0 });
        });
    });

    describe('deleteByUser', () => {
        it('should delete all biodata for user', async () => {
            await service.deleteByUser('123');
            expect(mockRepository.delete).toHaveBeenCalledWith({ user_pin: '123' });
        });
    });

    describe('processTemplate', () => {
        it('should store fingerprint template directly', async () => {
            mockRepository.findOne.mockResolvedValue(null);
            mockRepository.create.mockImplementation(v => v);
            mockRepository.save.mockImplementation(v => v);

            await service.processTemplate('123', BiometricType.FINGERPRINT, 1, 0, 'template-data', 10, 0, 'dev-1');

            expect(mockRepository.findOne).toHaveBeenCalled();
            expect(mockRepository.create).toHaveBeenCalledWith(expect.objectContaining({
                user_pin: '123',
                type: BiometricType.FINGERPRINT,
                template: 'template-data',
            }));
        });

        it('should store face template as JSON', async () => {
            mockRepository.findOne.mockResolvedValue(null);
            mockRepository.create.mockImplementation(v => v);
            mockRepository.save.mockImplementation(v => v);

            await service.processTemplate('123', BiometricType.FACE, 0, 4, 'face-template', 12, 0, 'dev-1');

            expect(mockRepository.create).toHaveBeenCalledWith(expect.objectContaining({
                template: JSON.stringify({ 4: 'face-template' }),
            }));
        });

        it('should merge face template into existing JSON', async () => {
            const existing = { user_pin: '123', type: BiometricType.FACE, number: 0, template: JSON.stringify({ 0: 'old' }) };
            mockRepository.findOne.mockResolvedValueOnce(null).mockResolvedValueOnce(existing);
            mockRepository.create.mockImplementation(v => v);
            mockRepository.save.mockImplementation(v => v);
            mockRepository.update.mockResolvedValue(undefined);

            await service.processTemplate('123', BiometricType.FACE, 0, 1, 'new-face', 12, 0);

            // The second call to upsert should find the existing and merge
            expect(mockRepository.findOne).toHaveBeenCalled();
        });
    });
});
