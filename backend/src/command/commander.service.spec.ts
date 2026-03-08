import { Test, TestingModule } from '@nestjs/testing';
import { CommanderService } from './commander.service';
import { CommandService } from './command.service';
import { BiodataService } from '../user/services/biodata.service';
import { Device } from '../device/entities/device.entity';
import { BiometricType } from '../user/enums/biometric-type.enum';

describe('CommanderService', () => {
    let service: CommanderService;

    const mockCommandService = {
        create: jest.fn().mockImplementation(dto => ({ id: 1, ...dto })),
    };

    const mockBiodataService = {
        findAll: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommanderService,
                { provide: CommandService, useValue: mockCommandService },
                { provide: BiodataService, useValue: mockBiodataService },
            ],
        }).compile();

        service = module.get<CommanderService>(CommanderService);
        jest.clearAllMocks();
        mockCommandService.create.mockImplementation(dto => ({ id: 1, ...dto }));
    });

    const mockDevice: Partial<Device> = {
        id: 'dev-1',
        serial_number: 'SN123',
        name: 'Test',
        heartbeat: 10,
        time_zone: 3,
        push_version: '2.4.0',
        fingerprint_version: 10,
        face_version: 12,
        palm_version: 0,
        stamp: new Date(1000000),
        op_stamp: new Date(2000000),
    };

    describe('getOptions', () => {
        it('should build multi-line options string', () => {
            const result = service.getOptions(mockDevice as Device);
            expect(result).toContain('GET OPTION FROM: SN123');
            expect(result).toContain('Delay=10');
            expect(result).toContain('TimeZone=3');
            expect(result).toContain('Realtime=1');
            expect(result).toContain('TransFlag=');
            expect(result.endsWith('\n')).toBe(true);
        });
    });

    describe('command string builders', () => {
        it('getAttendance without filter', () => {
            const result = service.getAttendance();
            expect(result).toBe('DATA QUERY ATTLOG');
        });

        it('getAttendance with filters', () => {
            const result = service.getAttendance({ StartTime: '2025-01-01', EndTime: '2025-01-31', PIN: '123' });
            expect(result).toContain('DATA QUERY ATTLOG');
            expect(result).toContain('StartTime=2025-01-01');
            expect(result).toContain('EndTime=2025-01-31');
            expect(result).toContain('PIN=123');
        });

        it('getUser', () => {
            expect(service.getUser('123')).toBe('DATA QUERY USERINFO PIN=123');
        });

        it('getFingerprints without PIN', () => {
            expect(service.getFingerprints()).toBe('DATA QUERY FINGERTMP');
        });

        it('getFingerprints with PIN', () => {
            expect(service.getFingerprints('123')).toBe('DATA QUERY FINGERTMP PIN=123');
        });

        it('enrollFingerprint', () => {
            const result = service.enrollFingerprint('123', 1);
            expect(result).toBe('ENROLL_FP PIN=123\tFID=1\tRETRY=3\tOVERWRITE=1');
        });

        it('updateFingerprint', () => {
            const result = service.updateFingerprint('123', 1, 'TMPL');
            expect(result).toContain('DATA UPDATE FINGERTMP PIN=123');
            expect(result).toContain('FID=1');
            expect(result).toContain('Size=4');
            expect(result).toContain('TMP=TMPL');
        });

        it('delete', () => {
            expect(service.delete('123', 'USERINFO' as any)).toBe('DATA DELETE USERINFO PIN=123');
        });

        it('updateUser', () => {
            const user = { name: 'John', role: 0, password: '1234', card_number: '999' } as any;
            const result = service.updateUser('123', user);
            expect(result).toContain('DATA UPDATE USERINFO PIN=123');
            expect(result).toContain('Name=John');
            expect(result).toContain('Pri=0');
            expect(result).toContain('Passwd=1234');
            expect(result).toContain('Card=999');
        });

        it('updateUser with null password', () => {
            const user = { name: 'John', role: 0, password: null, card_number: null } as any;
            const result = service.updateUser('123', user);
            expect(result).toContain('Passwd=');
            expect(result).toContain('Card=');
        });

        it('rawSql', () => {
            const result = service.rawSql('SELECT * FROM users');
            expect(result).toBe('shell /mnt/mtdblock/service/sqlite3 /mnt/mtdblock/data/ZKDB.db "SELECT * FROM users"');
        });
    });

    describe('deviceSupportsBiometricTemplate', () => {
        it('should support fingerprint when device version <= template version', () => {
            expect(service.deviceSupportsBiometricTemplate(mockDevice as Device, BiometricType.FINGERPRINT, 10)).toBe(true);
            expect(service.deviceSupportsBiometricTemplate(mockDevice as Device, BiometricType.FINGERPRINT, 9)).toBe(false);
        });

        it('should support face when device version <= template version', () => {
            expect(service.deviceSupportsBiometricTemplate(mockDevice as Device, BiometricType.FACE, 12)).toBe(true);
            expect(service.deviceSupportsBiometricTemplate(mockDevice as Device, BiometricType.FACE, 11)).toBe(false);
        });

        it('should support palm when device version <= template version', () => {
            expect(service.deviceSupportsBiometricTemplate(mockDevice as Device, BiometricType.PALM, 0)).toBe(true);
        });
    });

    describe('createCommand', () => {
        it('should delegate to commandService.create', async () => {
            const result = await service.createCommand(mockDevice as Device, 'CHECK');
            expect(mockCommandService.create).toHaveBeenCalledWith({
                command: 'CHECK',
                device_id: 'dev-1',
            });
            expect(result.command).toBe('CHECK');
        });
    });

    describe('createAttendanceCommand', () => {
        it('should create attendance query command', async () => {
            await service.createAttendanceCommand(mockDevice as Device, { PIN: '123' });
            expect(mockCommandService.create).toHaveBeenCalledWith(expect.objectContaining({
                command: expect.stringContaining('DATA QUERY ATTLOG'),
            }));
        });
    });
});
