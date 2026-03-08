import { Injectable } from '@nestjs/common';
import { DeviceService } from 'src/device/device.service';
import { CommanderService } from 'src/command/commander.service';
import { Device } from 'src/device/entities/device.entity';
import { Tables } from './enums/table.enum';
import { CommandService } from 'src/command/command.service';
import { DeviceDto } from 'src/device/dtos/device.dto';
import { UserService } from 'src/user/services/user.service';
import { UserCrudDto } from 'src/user/dtos/user.dto';
import { BiodataService } from 'src/user/services/biodata.service';
import { BiometricType } from 'src/user/enums/biometric-type.enum';
import { AttendanceService } from 'src/attendance/attendance.service';
import { PushDto } from './dtos/push.dto';

@Injectable()
export class IclockService {
    constructor(
        private readonly deviceService: DeviceService,
        private readonly userService: UserService,
        private readonly commanderService: CommanderService,
        private readonly commandService: CommandService,
        private readonly biodataService: BiodataService,
        private readonly attendanceService: AttendanceService
    ) {}

    async getOptions(device: Device): Promise<string> {
        return this.commanderService.getOptions(device);
    }

    async push(device: Device, query: PushDto, body: string): Promise<string> {
        // Command Transactions (Not Realtime / Query Response)
        if (query.CmdId) {
            return this.processCommandTransactions(device, query, body);
        }

        // Default Operations (Realtime)
        const handlers = {
            [Tables.ATTENDANCE]: () => this.attendance(device, body),
            [Tables.OPERATIONS]: () => this.operations(device, body),
            [Tables.BIOMETRIC]: () => this.operations(device, body),
            [Tables.OPTIONS]: () => this.setOptions(device, body)
        };
    
        const handler = handlers[query.table];
        if (handler) {
            await handler();
        }
    
        return this.ok();
    }

    async attendance(device: Device, body: string): Promise<void> {
        const transactions = this.parseAttendanceData(body);
        
        if (transactions.length === 0) return;
        
        // Get all unique user pins
        const uniquePins = [...new Set(transactions.map(t => t.user_pin))];
        
        // Batch check user existence
        const existingPins = new Set(await this.userService.findExistingPins(uniquePins));
        
        // Filter and prepare batch insert
        const validAttendances = transactions
            .filter(transaction => existingPins.has(transaction.user_pin))
            .map(transaction => ({
                user_pin: transaction.user_pin,
                time: transaction.time,
                device_id: device.id,
            }));
        
        // Batch insert
        if (validAttendances.length > 0) {
            await this.attendanceService.createMany(validAttendances);
        }

        device.stamp = new Date();
        await this.deviceService.update(device.id, device);
    }

    private parseAttendanceData(body: string): Array<{user_pin: string, time: string}> {
        const transactions: Array<{user_pin: string, time: string}> = [];

        let keyValuePairs = body.includes('=');

        if (keyValuePairs) {
            const lines = body.split('\n');
            for (const line of lines) {
                const time = line.match(/\w*time\w*=([^&\t\n]+)/i)?.[1];
                const pin = line.match(/\w*pin\w*=([^&\t\n]+)/i)?.[1];
                
                if (!time || !pin) continue;
                
                transactions.push({
                    user_pin: pin,
                    time: time
                });
            }
        } else {
            const lines = body.split('\n');
            for (const line of lines) {
                if (!line || line.length === 0) break;
                const parts = line.split('\t');
                if (parts.length >= 2) {
                    transactions.push({
                        user_pin: parts[0],
                        time: parts[1]
                    });
                }
            }
        }
        
        return transactions;
    }

    async operations(device: Device, body: string): Promise<void> {
        const lines = body.split('\n').filter(line => line.trim());
        if (lines.length === 0) return;
        
        // Check first line to determine operation type
        const firstLine = lines[0];
        let operationType: string | null = null;
        
        if (firstLine.includes('USER ')) {
            operationType = 'USER';
        } else if (firstLine.includes('FP ')) {
            operationType = 'FP';
        } else if (firstLine.includes('BIODATA ')) {
            operationType = 'BIODATA';
        } else if (firstLine.includes('OPLOG ')) {
            operationType = 'OPLOG';
        }
        
        if (!operationType) return;
        
        // Extract data from all lines (remove the operation prefix)
        const dataLines = lines.map(line => {
            const match = line.match(new RegExp(`${operationType}\\s+(.*)`));
            return match ? match[1] : '';
        }).filter(data => data);
        
        // Process based on operation type
        const operationHandlers = {
            'USER': () => this.processUsers(dataLines),
            'FP': () => this.processBiometrics(device, dataLines, 'FP'),
            'BIODATA': () => this.processBiometrics(device, dataLines, 'BIODATA'),
            'OPLOG': () => Promise.resolve() // Handle if needed
        };
        
        const handler = operationHandlers[operationType];
        if (handler) {
            await handler();
        }

        device.op_stamp = new Date();
        await this.deviceService.update(device.id, device);
    }

    async processUsers(dataLines: string[]): Promise<void> {
        const users: UserCrudDto[] = [];
        
        for (const line of dataLines) {
            const data = await this.parse(line);
            const user: UserCrudDto = {
                pin: data.PIN,
                name: data.Name,
                role: data.Pri,
                password: data.Passwd,
                card_number: data.Card,
            };
            users.push(user);
        }
        
        await Promise.all(users.map(user => this.userService.upsert(user)));
    }

    async processBiometrics(device: Device, dataLines: string[], operationType: string): Promise<void> {
        for (const line of dataLines) {
            const data = await this.parse(line);
            
            let type: BiometricType;
            let index = 0;
            let number: number;
            let majorVersion: number;
            let minorVersion: number;
            
            if (operationType === 'FP') {
                type = BiometricType.FINGERPRINT;
                number = data.FID;
                majorVersion = device.fingerprint_version || 10;
                minorVersion = 0;
            } else if (operationType === 'BIODATA') {
                type = data.Type;
                number = data.No;
                index = data.Index;
                majorVersion = data.MajorVer || 0;
                minorVersion = data.MinorVer || 0;
            } else {
                continue; // Skip unknown types
            }
            
            await this.biodataService.processTemplate(
                data.PIN || data.Pin,
                type,
                number,
                index,
                data.TMP || data.Tmp,
                majorVersion,
                minorVersion,
                device.id
            );
        }
    }

    async setOptions(device: Device, body: string): Promise<void> {
        const data = await this.parse(body);
        await this.updateDevice(device, data);
    }

    async getRequest(device: Device, info?: string): Promise<string> {
        if (info) {
            const data = info.split(',')
            device.user_count = Number(data[1]);
            device.fingerprint_count = Number(data[2]);
            device.transaction_count = Number(data[3]);
            device.ip_address = data[4];
            await this.deviceService.update(device.id, device);
        }
        const commands = await this.commandService.getRequest(device.id);
        if (commands.length === 0) return this.ok();
        return commands.map(command => `C:${command.id}:${command.command}`).join('\n');
    }

    async confirm(device: Device, body: string): Promise<string> {
        const commands = body.split(/(?=ID=\d+&)/);
        
        const processCommand = async (command: string) => {
            if (!command.trim()) return;
            
            const data = await this.parse(command);
            
            const promises: Promise<any>[] = [this.commandService.confirm(data)];
            
            if (data.CMD === 'INFO') {
                promises.push(this.updateDevice(device, data));
            }
            
            await Promise.all(promises);
        };
        
        await Promise.all(commands.map(processCommand));
        
        return this.ok();
    }

    async processCommandTransactions(device: Device, query: PushDto, body: string): Promise<string> {
        const transactions = this.parseAttendanceData(body);

        await this.commandService.processCommandTransactions(query.CmdId!, transactions);
        return this.ok();
    }

    async ok(): Promise<string> {
        return 'OK';
    }

    private async updateDevice(device: Device, data: Record<string, any>): Promise<DeviceDto> {
        device.model = data.DeviceName;
        device.transaction_count = data.TransactionCount;
        device.user_count = data.UserCount;
        device.fingerprint_count = data.FPCount;
        device.language = data.Language;
        device.fingerprint_version = data.FPVersion;
        device.face_version = data.FaceVersion;
        device.palm_version = data.PvVersion;
        device.ip_address = data.IPAddress;
        
        return this.deviceService.update(device.id, device);
    }

    /**
     * Parse string and extract specific keys
     * @param body The raw string
     * @returns Object containing parsed key-value pairs
     */
    private async parse(body: string): Promise<Record<string, any>> {
        // Remove the '~' character from keys
        body = body.replace(/~([^=]+)=/g, '$1=');

        // Replace new lines and ampersands with commas
        body = body.replace(/\n|\r|\t|&/g, ',');

        // Split the body by commas to get key-value pairs
        const pairs = body.split(',');
        
        // Create an object to store the parsed data
        const data: Record<string, any> = {};
        
        // Process each key-value pair
        pairs.forEach(pair => {
            const [key, value] = pair.split('=', 2);
            
            // Only add the pair if value is not empty
            if (value !== undefined && value !== '') {
                // Convert numeric values to numbers
                if (!isNaN(Number(value)) && value !== '') {
                    data[key] = Number(value);
                } else {
                    data[key] = value;
                }
            }
        });
        
        return data;
    }
}
