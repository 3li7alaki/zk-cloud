import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { CommandService } from './command.service';
import { Command } from './entities/command.entity';
import { CommandTransaction } from './entities/command-transaction.entity';

describe('CommandService', () => {
    let service: CommandService;

    const mockCommandRepo = {
        find: jest.fn(),
        findOne: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        delete: jest.fn(),
        update: jest.fn(),
    };

    const mockTransactionRepo = {
        find: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandService,
                { provide: getRepositoryToken(Command), useValue: mockCommandRepo },
                { provide: getRepositoryToken(CommandTransaction), useValue: mockTransactionRepo },
            ],
        }).compile();

        service = module.get<CommandService>(CommandService);
        jest.clearAllMocks();
    });

    const mockCommand = { id: 1, command: 'CHECK', device_id: 'dev-1', executed: false, successful: false };

    describe('findAll', () => {
        it('should return commands with filter', async () => {
            mockCommandRepo.find.mockResolvedValue([mockCommand]);
            const result = await service.findAll(false);
            expect(result).toEqual([mockCommand]);
            expect(mockCommandRepo.find).toHaveBeenCalledWith({ where: { executed: false } });
        });
    });

    describe('findByDevice', () => {
        it('should find commands by device id', async () => {
            mockCommandRepo.find.mockResolvedValue([mockCommand]);
            await service.findByDevice('dev-1', false);
            expect(mockCommandRepo.find).toHaveBeenCalledWith({ where: { device_id: 'dev-1', executed: false } });
        });

        it('should not add executed filter when undefined', async () => {
            mockCommandRepo.find.mockResolvedValue([]);
            await service.findByDevice('dev-1');
            expect(mockCommandRepo.find).toHaveBeenCalledWith({ where: { device_id: 'dev-1' } });
        });
    });

    describe('findOne', () => {
        it('should return command by id', async () => {
            mockCommandRepo.findOne.mockResolvedValue(mockCommand);
            expect(await service.findOne(1)).toEqual(mockCommand);
        });

        it('should throw NotFoundException', async () => {
            mockCommandRepo.findOne.mockResolvedValue(null);
            await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
        });
    });

    describe('create', () => {
        it('should create and save command', async () => {
            mockCommandRepo.create.mockReturnValue(mockCommand);
            mockCommandRepo.save.mockResolvedValue(mockCommand);
            expect(await service.create({ command: 'CHECK', device_id: 'dev-1' })).toEqual(mockCommand);
        });
    });

    describe('confirm', () => {
        it('should mark command as executed with return code', async () => {
            mockCommandRepo.findOne.mockResolvedValue({ ...mockCommand });
            mockCommandRepo.save.mockImplementation(v => v);

            const result = await service.confirm({ ID: 1, Return: 0, Content: 'OK' });
            expect(result.executed).toBe(true);
            expect(result.successful).toBe(true);
            expect(result.response).toBe('OK');
            expect(result.executed_at).toBeInstanceOf(Date);
        });

        it('should set successful=false for non-zero return', async () => {
            mockCommandRepo.findOne.mockResolvedValue({ ...mockCommand });
            mockCommandRepo.save.mockImplementation(v => v);

            const result = await service.confirm({ ID: 1, Return: -1 });
            expect(result.successful).toBe(false);
        });
    });

    describe('processCommandTransactions', () => {
        it('should create and save transaction records', async () => {
            const transactions = [{ user_pin: '123', time: '2025-01-15 09:30:00' }];
            mockTransactionRepo.create.mockImplementation(v => v);
            mockTransactionRepo.save.mockResolvedValue([]);

            await service.processCommandTransactions(1, transactions);
            expect(mockTransactionRepo.create).toHaveBeenCalledWith(expect.objectContaining({
                user_pin: '123',
                command_id: 1,
            }));
        });
    });

    describe('getRequest', () => {
        it('should return pending commands and update transferred_at', async () => {
            const commands = [{ id: 1, command: 'CHECK' }, { id: 2, command: 'INFO' }];
            mockCommandRepo.find.mockResolvedValue(commands);
            mockCommandRepo.update.mockResolvedValue(undefined);

            const result = await service.getRequest('dev-1');
            expect(result).toEqual(commands);
            expect(mockCommandRepo.update).toHaveBeenCalled();
        });

        it('should return empty array when no pending commands', async () => {
            mockCommandRepo.find.mockResolvedValue([]);
            const result = await service.getRequest('dev-1');
            expect(result).toEqual([]);
            expect(mockCommandRepo.update).not.toHaveBeenCalled();
        });
    });
});
