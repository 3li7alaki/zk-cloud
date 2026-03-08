import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Command } from './entities/command.entity';
import { CommandTransaction } from './entities/command-transaction.entity';
import { In, IsNull, Repository } from 'typeorm';
import { CommandDto } from './dtos/command.dto';
import { CommandTransactionDto, CommandTransactionCrudDto } from './dtos/command-transaction.dto';

@Injectable()
export class CommandService {
    constructor(
        @InjectRepository(Command)
        private readonly commandRepository: Repository<Command>,
        @InjectRepository(CommandTransaction)
        private readonly commandTransactionRepository: Repository<CommandTransaction>
    ) { }

    async findAll(executed?: boolean): Promise<CommandDto[]> {
        const where: any = { executed };
        return this.commandRepository.find({ where });
    }

    async findByDevice(device_id: string, executed?: boolean): Promise<CommandDto[]> {
        const where: any = { device_id };

        if (executed !== undefined) {
            where.executed = executed;
        }

        return this.commandRepository.find({ where });
    }

    async findOne(id: number): Promise<CommandDto> {
        const command = await this.commandRepository.findOne({ where: { id } });

        if (!command) {
            throw new NotFoundException('Command not found');
        }
        
        return command;
    }

    async create(commandDto: Partial<CommandDto>): Promise<CommandDto> {
        const command = this.commandRepository.create(commandDto);
        return this.commandRepository.save(command);
    }

    async update(id: number, commandDto: Partial<CommandDto>): Promise<CommandDto> {
        const command = await this.findOne(id);
        return this.commandRepository.save({ ...command, ...commandDto });
    }

    async delete(id: number): Promise<void> {
        const command = await this.findOne(id);
        await this.commandRepository.delete(command);
    }

    async confirm(data: Record<string, any>): Promise<CommandDto> {
        const command = await this.findOne(data.ID);
        command.executed = true;
        command.return = data.Return;
        command.successful = data.Return === 0;
        command.executed_at = new Date();
        if (data.Content) {
            command.response = data.Content;
        }
        return this.commandRepository.save(command);
    }

    async processCommandTransactions(id: number, transactions: Array<{user_pin: string, time: string}>): Promise<void> {
        const commandTransactions = transactions.map(transaction => this.commandTransactionRepository.create({
            user_pin: transaction.user_pin,
            time: new Date(transaction.time),
            command_id: id,
        }));
        
        await this.commandTransactionRepository.save(commandTransactions);
    }

    async getCommandTransactions(commandId: number): Promise<CommandTransactionDto[]> {
        return this.commandTransactionRepository.find({
            where: { command_id: commandId },
            relations: ['command']
        });
    }

    async createCommandTransaction(transactionDto: CommandTransactionCrudDto): Promise<CommandTransactionDto> {
        const transaction = this.commandTransactionRepository.create(transactionDto);
        return this.commandTransactionRepository.save(transaction);
    }

    async getRequest(device_id: string): Promise<CommandDto[]> {
        const commands = await this.commandRepository.find({
            where: { device_id, transferred_at: IsNull() }
        });

        if (commands.length > 0) {
            const ids = commands.map(cmd => cmd.id);
            await this.commandRepository.update(
                { id: In(ids) },
                { transferred_at: new Date() }
            );
        }
    
        return commands;
    }
}
