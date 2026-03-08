import { HttpException, HttpStatus } from '@nestjs/common';
import { CustomExceptionFilter } from './exception.filter';

describe('CustomExceptionFilter', () => {
    let filter: CustomExceptionFilter;

    beforeEach(() => {
        filter = new CustomExceptionFilter();
    });

    it('should return text/plain for status 200 exceptions', () => {
        const send = jest.fn();
        const type = jest.fn().mockReturnValue({ send });
        const status = jest.fn().mockReturnValue({ type });
        const host = {
            switchToHttp: () => ({ getResponse: () => ({ status }) }),
        };

        const exception = new HttpException('Not Authorized Terminal', HttpStatus.OK);
        filter.catch(exception, host as any);

        expect(status).toHaveBeenCalledWith(200);
        expect(type).toHaveBeenCalledWith('text/plain');
        expect(send).toHaveBeenCalledWith('Not Authorized Terminal');
    });

    it('should return JSON for non-200 status codes', () => {
        const json = jest.fn();
        const status = jest.fn().mockReturnValue({ json });
        const host = {
            switchToHttp: () => ({ getResponse: () => ({ status }) }),
        };

        const exception = new HttpException('Not Found', HttpStatus.NOT_FOUND);
        filter.catch(exception, host as any);

        expect(status).toHaveBeenCalledWith(404);
        expect(json).toHaveBeenCalled();
    });
});
