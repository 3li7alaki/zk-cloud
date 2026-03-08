import { Test, TestingModule } from '@nestjs/testing';
import { IclockService } from './iclock.service';
import { DeviceService } from '../device/device.service';
import { CommanderService } from '../command/commander.service';
import { CommandService } from '../command/command.service';
import { UserService } from '../user/services/user.service';
import { BiodataService } from '../user/services/biodata.service';
import { AttendanceService } from '../attendance/attendance.service';
import { Device } from '../device/entities/device.entity';
import { Tables } from './enums/table.enum';

describe('IclockService', () => {
  let service: IclockService;

  const mockDeviceService = { update: jest.fn() };
  const mockUserService = { findExistingPins: jest.fn(), upsert: jest.fn() };
  const mockCommanderService = { getOptions: jest.fn() };
  const mockCommandService = {
    getRequest: jest.fn(),
    confirm: jest.fn(),
    processCommandTransactions: jest.fn(),
  };
  const mockBiodataService = { processTemplate: jest.fn() };
  const mockAttendanceService = { createMany: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IclockService,
        { provide: DeviceService, useValue: mockDeviceService },
        { provide: UserService, useValue: mockUserService },
        { provide: CommanderService, useValue: mockCommanderService },
        { provide: CommandService, useValue: mockCommandService },
        { provide: BiodataService, useValue: mockBiodataService },
        { provide: AttendanceService, useValue: mockAttendanceService },
      ],
    }).compile();

    service = module.get<IclockService>(IclockService);
    jest.clearAllMocks();
  });

  const mockDevice: Partial<Device> = {
    id: 'dev-1',
    serial_number: 'SN123',
    fingerprint_version: 10,
    face_version: 12,
  };

  describe('ok', () => {
    it('should return "OK"', async () => {
      expect(await service.ok()).toBe('OK');
    });
  });

  describe('getOptions', () => {
    it('should delegate to commanderService', async () => {
      mockCommanderService.getOptions.mockReturnValue('options-string');
      const result = await service.getOptions(mockDevice as Device);
      expect(result).toBe('options-string');
    });
  });

  describe('attendance parsing - tab delimited format', () => {
    it('should parse tab-delimited attendance data', async () => {
      const body =
        '123\t2025-01-15 09:30:00\t1\t0\n456\t2025-01-15 10:00:00\t1\t0';
      mockUserService.findExistingPins.mockResolvedValue(['123', '456']);
      mockAttendanceService.createMany.mockResolvedValue([]);
      mockDeviceService.update.mockResolvedValue(undefined);

      await service.attendance(mockDevice as Device, body);

      expect(mockUserService.findExistingPins).toHaveBeenCalledWith([
        '123',
        '456',
      ]);
      expect(mockAttendanceService.createMany).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ user_pin: '123', device_id: 'dev-1' }),
          expect.objectContaining({ user_pin: '456', device_id: 'dev-1' }),
        ]),
      );
    });
  });

  describe('attendance parsing - key-value format', () => {
    it('should parse key-value attendance data', async () => {
      const body =
        'PIN=123\tTime=2025-01-15 09:30:00\tStatus=0\nPIN=456\tTime=2025-01-15 10:00:00';
      mockUserService.findExistingPins.mockResolvedValue(['123']);
      mockAttendanceService.createMany.mockResolvedValue([]);
      mockDeviceService.update.mockResolvedValue(undefined);

      await service.attendance(mockDevice as Device, body);

      expect(mockAttendanceService.createMany).toHaveBeenCalledWith(
        expect.arrayContaining([expect.objectContaining({ user_pin: '123' })]),
      );
      // 456 should be filtered out since findExistingPins only returns 123
      const calls = mockAttendanceService.createMany.mock.calls[0][0];
      expect(calls.length).toBe(1);
    });
  });

  describe('attendance - empty data', () => {
    it('should handle empty body', async () => {
      await service.attendance(mockDevice as Device, '');
      expect(mockAttendanceService.createMany).not.toHaveBeenCalled();
    });
  });

  describe('operations - USER', () => {
    it('should parse and upsert users', async () => {
      const body = 'USER PIN=123\tName=John\tPri=0\tPasswd=1234\tCard=999';
      mockUserService.upsert.mockResolvedValue({});
      mockDeviceService.update.mockResolvedValue(undefined);

      await service.operations(mockDevice as Device, body);

      expect(mockUserService.upsert).toHaveBeenCalledWith(
        expect.objectContaining({
          pin: 123,
          name: 'John',
          role: 0,
        }),
      );
    });
  });

  describe('operations - FP', () => {
    it('should process fingerprint data', async () => {
      const body = 'FP PIN=123\tFID=1\tSize=100\tTMP=base64data';
      mockBiodataService.processTemplate.mockResolvedValue({});
      mockDeviceService.update.mockResolvedValue(undefined);

      await service.operations(mockDevice as Device, body);

      expect(mockBiodataService.processTemplate).toHaveBeenCalledWith(
        123,
        1,
        1,
        0,
        'base64data',
        10,
        0,
        'dev-1',
      );
    });
  });

  describe('operations - BIODATA', () => {
    it('should process biodata with type and version', async () => {
      const body =
        'BIODATA PIN=123\tNo=0\tIndex=4\tType=9\tMajorVer=12\tMinorVer=0\tTmp=facedata';
      mockBiodataService.processTemplate.mockResolvedValue({});
      mockDeviceService.update.mockResolvedValue(undefined);

      await service.operations(mockDevice as Device, body);

      expect(mockBiodataService.processTemplate).toHaveBeenCalledWith(
        123,
        9,
        0,
        4,
        'facedata',
        12,
        0,
        'dev-1',
      );
    });
  });

  describe('operations - unknown type', () => {
    it('should ignore unknown operation types', async () => {
      const body = 'UNKNOWN something=123';
      await service.operations(mockDevice as Device, body);
      expect(mockUserService.upsert).not.toHaveBeenCalled();
      expect(mockBiodataService.processTemplate).not.toHaveBeenCalled();
    });
  });

  describe('getRequest', () => {
    it('should return OK when no commands', async () => {
      mockCommandService.getRequest.mockResolvedValue([]);
      const result = await service.getRequest(mockDevice as Device);
      expect(result).toBe('OK');
    });

    it('should return formatted commands', async () => {
      mockCommandService.getRequest.mockResolvedValue([
        { id: 1, command: 'CHECK' },
        { id: 2, command: 'INFO' },
      ]);
      const result = await service.getRequest(mockDevice as Device);
      expect(result).toBe('C:1:CHECK\nC:2:INFO');
    });

    it('should parse INFO and update device counts', async () => {
      mockCommandService.getRequest.mockResolvedValue([]);
      mockDeviceService.update.mockResolvedValue(undefined);

      await service.getRequest(
        mockDevice as Device,
        'Ver 8.0,10,20,100,192.168.1.1',
      );

      expect(mockDeviceService.update).toHaveBeenCalled();
    });
  });

  describe('confirm', () => {
    it('should confirm command execution', async () => {
      const body = 'ID=1&Return=0&CMD=CHECK';
      mockCommandService.confirm.mockResolvedValue({});

      const result = await service.confirm(mockDevice as Device, body);
      expect(result).toBe('OK');
      expect(mockCommandService.confirm).toHaveBeenCalled();
    });

    it('should update device on INFO command', async () => {
      const body = 'ID=1&Return=0&CMD=INFO&DeviceName=ZK100&UserCount=5';
      mockCommandService.confirm.mockResolvedValue({});
      mockDeviceService.update.mockResolvedValue(undefined);

      await service.confirm(mockDevice as Device, body);
      expect(mockDeviceService.update).toHaveBeenCalled();
    });
  });

  describe('push', () => {
    it('should route ATTENDANCE table to attendance handler', async () => {
      const query = { SN: 'SN123', table: Tables.ATTENDANCE } as any;
      mockUserService.findExistingPins.mockResolvedValue(['123']);
      mockAttendanceService.createMany.mockResolvedValue([]);
      mockDeviceService.update.mockResolvedValue(undefined);

      const result = await service.push(
        mockDevice as Device,
        query,
        '123\t2025-01-15 09:30:00',
      );
      expect(result).toBe('OK');
    });

    it('should route to command transactions when CmdId present', async () => {
      const query = { SN: 'SN123', table: Tables.ATTENDANCE, CmdId: 1 } as any;
      mockCommandService.processCommandTransactions.mockResolvedValue(
        undefined,
      );

      const result = await service.push(
        mockDevice as Device,
        query,
        '123\t2025-01-15 09:30:00',
      );
      expect(result).toBe('OK');
      expect(mockCommandService.processCommandTransactions).toHaveBeenCalled();
    });
  });
});
