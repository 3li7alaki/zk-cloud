import { DatabaseExceptionFilter } from './database-exception.filter';
import { QueryFailedError } from 'typeorm';

describe('DatabaseExceptionFilter', () => {
    let filter: DatabaseExceptionFilter;

    beforeEach(() => {
        filter = new DatabaseExceptionFilter();
    });

    const createMockHost = () => {
        const json = jest.fn();
        const status = jest.fn().mockReturnValue({ json });
        return {
            switchToHttp: () => ({ getResponse: () => ({ status }) }),
            status,
            json,
        };
    };

    const createError = (code: string, message = '') => {
        const error = new QueryFailedError('query', [], new Error(message) as any);
        (error as any).driverError = { code, message };
        return error;
    };

    it('should handle PostgreSQL unique violation (23505) as 400', () => {
        const { switchToHttp, status, json } = createMockHost();
        filter.catch(createError('23505'), { switchToHttp } as any);
        expect(status).toHaveBeenCalledWith(400);
        expect(json).toHaveBeenCalledWith(expect.objectContaining({ statusCode: 400 }));
    });

    it('should handle foreign key violation (23503) as 400', () => {
        const { switchToHttp, status, json } = createMockHost();
        filter.catch(createError('23503'), { switchToHttp } as any);
        expect(status).toHaveBeenCalledWith(400);
    });

    it('should handle not null violation (23502) as 400', () => {
        const { switchToHttp, status, json } = createMockHost();
        filter.catch(createError('23502'), { switchToHttp } as any);
        expect(status).toHaveBeenCalledWith(400);
    });

    it('should handle check violation (23514) as 400', () => {
        const { switchToHttp, status, json } = createMockHost();
        filter.catch(createError('23514'), { switchToHttp } as any);
        expect(status).toHaveBeenCalledWith(400);
    });

    it('should handle unknown errors as 500', () => {
        const { switchToHttp, status, json } = createMockHost();
        filter.catch(createError('99999'), { switchToHttp } as any);
        expect(status).toHaveBeenCalledWith(500);
    });

    it('should handle MySQL unique violation', () => {
        const { switchToHttp, status, json } = createMockHost();
        filter.catch(createError('ER_DUP_ENTRY'), { switchToHttp } as any);
        expect(status).toHaveBeenCalledWith(400);
    });
});
