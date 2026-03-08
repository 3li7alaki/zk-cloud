import { Injectable } from '@nestjs/common';
import { Device } from 'src/device/entities/device.entity';
import { Tables } from './enums/table.enum';
import { CommandService } from './command.service';
import { CommandDto } from './dtos/command.dto';
import { User } from 'src/user/entities/user.entity';
import { Methods } from './enums/methods.enum';
import { BiodataService } from 'src/user/services/biodata.service';
import { BiometricType } from 'src/user/enums/biometric-type.enum';
import { Biodata } from 'src/user/entities/biodata.entity';

interface CommandOptions {
    method: string;
    table?: Tables;
    where?: Record<string, any>;
    data?: Record<string, any>;
}

interface AttendanceFilter {
    StartTime?: string;
    EndTime?: string;
    PIN?: string;
}

const SQLITE = 'shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db';

@Injectable()
export class CommanderService {

    constructor(private readonly commandService: CommandService,
        private readonly biodataService: BiodataService) { }

    async createCommand(device: Device, commandString: string): Promise<CommandDto> {
        return await this.commandService.create({
            command: commandString,
            device_id: device.id
        });
    }

    // Command creators
    async createAttendanceCommand(device: Device, filter?: AttendanceFilter): Promise<CommandDto> {
        const commandString = this.getAttendance(filter);
        return this.createCommand(device, commandString);
    }

    async createFingerprintsCommand(device: Device, pin?: string): Promise<CommandDto> {
        const commandString = this.getFingerprints(pin);
        return this.createCommand(device, commandString);
    }

    async createFingerprintEnrollCommand(device: Device, pin: string, finger: number): Promise<CommandDto> {
        const commandString = this.enrollFingerprint(pin, finger);
        return this.createCommand(device, commandString);
    }

    async createUserUpdateCommand(device: Device, pin: string, user: User, with_biodata?: boolean): Promise<CommandDto> {
        const commandString = this.updateUser(pin, user);
        const command = await this.createCommand(device, commandString);
        
        
        if (with_biodata) {
            const biodatas = await this.biodataService.findAll(user.pin);

            const biodataPromises: Promise<CommandDto[]>[] = biodatas
            .filter(biodata => this.deviceSupportsBiometricTemplate(device, biodata.type, biodata.major_version))
            .map(biodata => this.createBiodataUpdateCommand(device, biodata));

            await Promise.all(biodataPromises);
        }
        
        return command;
    }

    async createUserUploadCommand(device: Device, pin: string): Promise<CommandDto> {
        const commandString = this.getUser(pin);
        return this.createCommand(device, commandString);
    }

    async createFingerprintUpdateCommand(device: Device, pin: string, finger: number, template: string): Promise<CommandDto> {
        const commandString = this.updateFingerprint(pin, finger, template);
        return this.createCommand(device, commandString);
    }

    async createDeleteCommand(device: Device, pin: string, table: Tables): Promise<CommandDto> {
        const commandString = this.delete(pin, table);
        return this.createCommand(device, commandString);
    }

    async createBiodataUpdateCommand(device: Device, biodata: Biodata): Promise<CommandDto[]> {
        if (biodata.type === BiometricType.FINGERPRINT) {
            // Single command for fingerprint
            const commandString = this.updateFingerprint(biodata.user_pin, biodata.number, biodata.template);
            return [await this.createCommand(device, commandString)];
        } else {
            // Multiple commands for face/palm from JSON template
            return this.createBiodataUpdateCommands(device, biodata);
        }
    }

    async createBiodataUpdateCommands(device: Device, biodata: Biodata): Promise<CommandDto[]> {
        const commands: CommandDto[] = [];
        
        // Parse JSON template for face/palm
        const templateData = JSON.parse(biodata.template);
        
        // Create command for each index in the template
        for (const [index, templateStr] of Object.entries(templateData)) {
            const commandString = this.updateBiodataIndex(biodata, parseInt(index), templateStr as string);
            commands.push(await this.createCommand(device, commandString));
        }
        
        return commands;
    }

    async createBiodataQueryCommand(device: Device, pin?: string, type?: BiometricType): Promise<CommandDto> {
        const commandString = this.getBiodata(pin, type);
        return this.createCommand(device, commandString);
    }

    // Device capability checking
    deviceSupportsBiometricTemplate(device: Device, type: BiometricType, majorVersion: number): boolean {
        switch (type) {
            case BiometricType.FINGERPRINT:
                return (device.fingerprint_version || 0) <= majorVersion;
            case BiometricType.FACE:
                return (device.face_version || 0) <= majorVersion;
            case BiometricType.PALM:
                return (device.palm_version || 0) <= majorVersion;
            default:
                return false;
        }
    }

    // Command builders
    getOptions(device: Device): string {
        const options = [
            `GET OPTION FROM: ${device.serial_number}`,
            `TransFlag=TransData AttLog\tOpLog\tAttPhoto\tEnrollFP\tEnrollUser\tFPImag\tChgUser\tChgFP\tFACE\tUserPic\tFVEIN\tBioPhoto`,
            `ServerVer=${device.push_version}`,
            `PushProtVer=${device.push_version}`,
            'Encrypt=0',
            'EncryptFlag=1000000000',
            'SupportPing=1',
            'PushOptionsFlag=1',
            'MaxPostSize=1048576',
            `PushOptions=UserCount,TransactionCount,FingerFunOn,FPVersion,FPCount,FaceFunOn,FaceVersion,FaceCount,FvFunOn,FvVersion,FvCount,PvFunOn,PvVersion,PvCount,BioPhotoFun,BioDataFun,PhotoFunOn,~LockFunOn,CardProtFormat,~Platform,MultiBioPhotoSupport,MultiBioDataSupport,MultiBioVersion`,
            `MultiBioDataSupport=0:1:1:0:0:0:0:1:1:1`,
            `MultiBioPhotoSupport=0:0:0:0:0:0:0:0:0:1`,
            `TimeZone=${device.time_zone}`,
            `TransTimes=00:00;14:05`,
            'TransInterval=1',
            'ErrorDelay=60',
            `Delay=${device.heartbeat}`,
            'Realtime=1',
            `Stamp=${Number(device.stamp)}`,
            `OpStamp=${Number(device.op_stamp)}`,
        ];

        return options.join('\n') + '\n';
    }

    getAttendance(filter?: AttendanceFilter): string {
        return this.buildCommand({
            method: Methods.QUERY,
            table: Tables.ATTENDANCE,
            where: filter
        });
    }

    getUser(pin: string): string {
        return this.buildCommand({
            method: Methods.QUERY,
            table: Tables.USERS,
            where: { PIN: pin }
        });
    }

    getFingerprints(pin?: string): string {
        const where = pin ? { PIN: pin } : {};
        return this.buildCommand({
            method: Methods.QUERY,
            table: Tables.FINGERPRINTS,
            where
        });
    }

    enrollFingerprint(pin: string, finger: number): string {
        return this.buildCommand({
            method: Methods.ENROLL,
            where: { PIN: pin },
            data: { FID: finger, RETRY: 3, OVERWRITE: 1 }
        });
    }

    updateFingerprint(pin: string, finger: number, template: string): string {
        return this.buildCommand({
            method: Methods.UPDATE,
            table: Tables.FINGERPRINTS,
            where: { PIN: pin, },
            data: {
                FID: finger,
                Size: template.length,
                Valid: 1,
                TMP: template
            }
        });
    }

    delete(pin: string, table: Tables): string {
        return this.buildCommand({
            method: Methods.DELETE,
            table,
            where: { PIN: pin }
        });
    }

    updateUser(pin: string, user: User): string {
        return this.buildCommand({
            method: Methods.UPDATE,
            table: Tables.USERS,
            where: { PIN: pin },
            data: {
                Name: user.name,
                Pri: user.role,
                Passwd: user.password,
                Card: user.card_number
            }
        });
    }

    getBiodata(pin?: string, type?: BiometricType): string {
        const where: Record<string, any> = {};
        if (pin) where.PIN = pin;
        
        // Use appropriate table based on biometric type
        const table = this.getBiodataTable(type);
        
        return this.buildCommand({
            method: Methods.QUERY,
            table,
            where
        });
    }

    updateBiodataIndex(biodata: Biodata, index: number, template: string): string {
        const table = this.getBiodataTable(biodata.type);
        const data: Record<string, any> = {
            No: biodata.number,
            Index: index,
            Valid: 1,
            Duress: 0,
            Type: biodata.type,
            MajorVer: biodata.major_version,
            MinorVer: biodata.minor_version,
            Size: template.length,
            Tmp: template
        };

        return this.buildCommand({
            method: Methods.UPDATE,
            table,
            where: { Pin: biodata.user_pin },
            data
        });
    }

    private getBiodataTable(type?: BiometricType): Tables {
        switch (type) {
            case BiometricType.FINGERPRINT:
                return Tables.FINGERPRINTS;
            case BiometricType.FACE:
                return Tables.BIOMETRIC;
            case BiometricType.PALM:
                return Tables.BIOMETRIC;
            default:
                return Tables.FINGERPRINTS;
        }
    }


    rawSql(query: string): string {
        return `${SQLITE} "${query}"`;
    }

    private buildCommand({ method, table, where, data }: CommandOptions): string {
        const parts = [method];

        if (table) {
            parts.push(table);
        }

        if (where) {
            const whereParams = Object.entries(where)
                .filter(([_, value]) => value !== undefined)
                .map(([key, value]) => `${key}=${value}`);
            parts.push(...whereParams);
        }

        let command = parts.join(' ');

        if (data) {
            const dataParams = Object.entries(data)
                .filter(([_, value]) => value !== undefined)
                .map(([key, value]) => {
                    if (value === null) {
                        value = '';
                    }
                    return `${key}=${value}`;
                })
                .join('\t');
            if (dataParams) {
                command += `\t${dataParams}`;
            }
        }

        return command;
    }
}
