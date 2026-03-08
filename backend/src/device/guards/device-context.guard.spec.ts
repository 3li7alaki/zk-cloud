import { ExecutionContext, HttpException } from '@nestjs/common';
import { DeviceContextGuard } from './device-context.guard';
import { DeviceService } from '../device.service';

describe('DeviceContextGuard', () => {
  let guard: DeviceContextGuard;
  const mockDeviceService = {
    findOneBySerialNumber: jest.fn(),
    updateWithHeartbeat: jest.fn(),
  };

  beforeEach(() => {
    guard = new DeviceContextGuard(
      mockDeviceService as unknown as DeviceService,
    );
    jest.clearAllMocks();
  });

  const createContext = (query: Record<string, any> = {}) => {
    const request = { query } as any;
    return {
      switchToHttp: () => ({
        getRequest: () => request,
      }),
      _request: request,
    } as any;
  };

  it('should return true and attach device for valid SN', async () => {
    const device = { id: 'dev-1', serial_number: 'SN123' };
    mockDeviceService.findOneBySerialNumber.mockResolvedValue(device);
    mockDeviceService.updateWithHeartbeat.mockResolvedValue(undefined);

    const context = createContext({ SN: 'SN123' });
    const result = await guard.canActivate(context);

    expect(result).toBe(true);
    expect(context._request.device).toEqual(device);
  });

  it('should throw when SN is missing', async () => {
    const context = createContext({});
    await expect(guard.canActivate(context)).rejects.toThrow(HttpException);
  });

  it('should throw when device not found', async () => {
    mockDeviceService.findOneBySerialNumber.mockRejectedValue(
      new Error('Not found'),
    );
    const context = createContext({ SN: 'INVALID' });
    await expect(guard.canActivate(context)).rejects.toThrow(HttpException);
  });

  it('should parse INFO query param', async () => {
    const device = { id: 'dev-1', serial_number: 'SN123' };
    mockDeviceService.findOneBySerialNumber.mockResolvedValue(device);
    mockDeviceService.updateWithHeartbeat.mockResolvedValue(undefined);

    const context = createContext({
      SN: 'SN123',
      INFO: 'Ver 8.0,10,20,100,192.168.1.1',
    });
    await guard.canActivate(context);

    expect(mockDeviceService.updateWithHeartbeat).toHaveBeenCalledWith(
      'dev-1',
      expect.objectContaining({
        user_count: 10,
        fingerprint_count: 20,
        transaction_count: 100,
        ip_address: '192.168.1.1',
      }),
    );
  });

  it('should parse pushver query param', async () => {
    const device = { id: 'dev-1', serial_number: 'SN123' };
    mockDeviceService.findOneBySerialNumber.mockResolvedValue(device);
    mockDeviceService.updateWithHeartbeat.mockResolvedValue(undefined);

    const context = createContext({ SN: 'SN123', pushver: '2.4.0' });
    await guard.canActivate(context);

    expect(mockDeviceService.updateWithHeartbeat).toHaveBeenCalledWith(
      'dev-1',
      expect.objectContaining({
        push_version: '2.4.0',
      }),
    );
  });
});
