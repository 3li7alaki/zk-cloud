import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ApiKeyGuard } from './api-key.guard';

describe('ApiKeyGuard', () => {
  let guard: ApiKeyGuard;
  const originalEnv = process.env;

  beforeEach(() => {
    guard = new ApiKeyGuard();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  const createMockContext = (headers: Record<string, string> = {}): ExecutionContext => ({
    switchToHttp: () => ({
      getRequest: () => ({ headers }),
    }),
  }) as any;

  it('should allow request when API_KEY is not configured', () => {
    delete process.env.API_KEY;
    const context = createMockContext();
    expect(guard.canActivate(context)).toBe(true);
  });

  it('should allow request with valid Bearer token', () => {
    process.env.API_KEY = 'test-key';
    const context = createMockContext({ authorization: 'Bearer test-key' });
    expect(guard.canActivate(context)).toBe(true);
  });

  it('should allow request with valid x-api-key header', () => {
    process.env.API_KEY = 'test-key';
    const context = createMockContext({ 'x-api-key': 'test-key' });
    expect(guard.canActivate(context)).toBe(true);
  });

  it('should reject request with missing API key', () => {
    process.env.API_KEY = 'test-key';
    const context = createMockContext();
    expect(() => guard.canActivate(context)).toThrow(UnauthorizedException);
  });

  it('should reject request with wrong API key', () => {
    process.env.API_KEY = 'test-key';
    const context = createMockContext({ authorization: 'Bearer wrong-key' });
    expect(() => guard.canActivate(context)).toThrow(UnauthorizedException);
  });

  it('should reject request with wrong x-api-key', () => {
    process.env.API_KEY = 'test-key';
    const context = createMockContext({ 'x-api-key': 'wrong-key' });
    expect(() => guard.canActivate(context)).toThrow(UnauthorizedException);
  });
});
