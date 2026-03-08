import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

describe('UserService', () => {
    let service: UserService;

    const mockQueryBuilder = {
        select: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        getMany: jest.fn(),
    };

    const mockRepository = {
        find: jest.fn(),
        findOneBy: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        delete: jest.fn(),
        createQueryBuilder: jest.fn().mockReturnValue(mockQueryBuilder),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                { provide: getRepositoryToken(User), useValue: mockRepository },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        jest.clearAllMocks();
        mockRepository.createQueryBuilder.mockReturnValue(mockQueryBuilder);
    });

    const mockUser = { id: 'user-uuid-1', pin: '123', name: 'John', role: 0 };

    describe('findAll', () => {
        it('should return all users', async () => {
            mockRepository.find.mockResolvedValue([mockUser]);
            expect(await service.findAll()).toEqual([mockUser]);
        });
    });

    describe('findOne', () => {
        it('should return user by id', async () => {
            mockRepository.findOneBy.mockResolvedValue(mockUser);
            expect(await service.findOne('user-uuid-1')).toEqual(mockUser);
        });

        it('should throw NotFoundException', async () => {
            mockRepository.findOneBy.mockResolvedValue(null);
            await expect(service.findOne('x')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findOneByPin', () => {
        it('should return user by pin', async () => {
            mockRepository.findOneBy.mockResolvedValue(mockUser);
            expect(await service.findOneByPin('123')).toEqual(mockUser);
            expect(mockRepository.findOneBy).toHaveBeenCalledWith({ pin: '123' });
        });

        it('should throw NotFoundException', async () => {
            mockRepository.findOneBy.mockResolvedValue(null);
            await expect(service.findOneByPin('999')).rejects.toThrow(NotFoundException);
        });
    });

    describe('create', () => {
        it('should create and save user', async () => {
            const dto = { pin: '456', name: 'Jane', role: 0 };
            mockRepository.create.mockReturnValue({ ...mockUser, ...dto });
            mockRepository.save.mockResolvedValue({ ...mockUser, ...dto });
            const result = await service.create(dto as any);
            expect(result.pin).toBe('456');
        });
    });

    describe('update', () => {
        it('should find then save updated user', async () => {
            mockRepository.findOneBy.mockResolvedValue(mockUser);
            mockRepository.save.mockResolvedValue({ ...mockUser, name: 'Updated' });
            const result = await service.update('user-uuid-1', { ...mockUser, name: 'Updated' } as any);
            expect(result.name).toBe('Updated');
        });
    });

    describe('delete', () => {
        it('should find then delete user', async () => {
            mockRepository.findOneBy.mockResolvedValue(mockUser);
            mockRepository.delete.mockResolvedValue(undefined);
            await service.delete('user-uuid-1');
            expect(mockRepository.delete).toHaveBeenCalled();
        });
    });

    describe('upsert', () => {
        it('should update existing user', async () => {
            mockRepository.findOneBy.mockResolvedValueOnce(mockUser).mockResolvedValueOnce(mockUser);
            mockRepository.save.mockResolvedValue({ ...mockUser, name: 'Updated' });
            const result = await service.upsert({ pin: '123', name: 'Updated', role: 0 } as any);
            expect(result.name).toBe('Updated');
        });

        it('should create new user when not exists', async () => {
            mockRepository.findOneBy.mockResolvedValue(null);
            const dto = { pin: '999', name: 'New', role: 0 };
            mockRepository.create.mockReturnValue(dto);
            mockRepository.save.mockResolvedValue(dto);
            const result = await service.upsert(dto as any);
            expect(result.pin).toBe('999');
        });
    });

    describe('exists', () => {
        it('should return true when user exists', async () => {
            mockRepository.findOneBy.mockResolvedValue(mockUser);
            expect(await service.exists('123')).toBe(true);
        });

        it('should return false when user does not exist', async () => {
            mockRepository.findOneBy.mockResolvedValue(null);
            expect(await service.exists('999')).toBe(false);
        });
    });

    describe('findExistingPins', () => {
        it('should return existing pins', async () => {
            mockQueryBuilder.getMany.mockResolvedValue([{ pin: '123' }, { pin: '456' }]);
            const result = await service.findExistingPins(['123', '456', '789']);
            expect(result).toEqual(['123', '456']);
        });

        it('should return empty for empty input', async () => {
            expect(await service.findExistingPins([])).toEqual([]);
        });
    });
});
