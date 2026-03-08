import { IclockMiddleware } from './iclock.middleware';

describe('IclockMiddleware', () => {
    let middleware: IclockMiddleware;

    beforeEach(() => {
        middleware = new IclockMiddleware();
    });

    it('should set required headers on response', () => {
        const headers: Record<string, string> = {};
        const res = {
            set: jest.fn((obj: Record<string, string>) => { Object.assign(headers, obj); }),
            json: undefined as any,
        };
        const next = jest.fn();

        middleware.use({} as any, res as any, next);

        expect(res.set).toHaveBeenCalledWith(expect.objectContaining({
            'Content-Type': 'text/plain;charset=UTF-8',
            'Connection': 'close',
            'Server': 'ZK Cloud',
        }));
        expect(next).toHaveBeenCalled();
    });

    it('should override res.json to send text/plain', () => {
        const sent: any[] = [];
        const res = {
            set: jest.fn(),
            send: jest.fn((body: any) => { sent.push(body); return res; }),
            json: undefined as any,
        };
        const next = jest.fn();

        middleware.use({} as any, res as any, next);

        // Call the overridden json method
        res.json('test response');
        expect(res.send).toHaveBeenCalledWith('test response');
    });

    it('should stringify non-string json bodies', () => {
        const res = {
            set: jest.fn(),
            send: jest.fn().mockReturnThis(),
            json: undefined as any,
        };
        const next = jest.fn();

        middleware.use({} as any, res as any, next);
        res.json({ key: 'value' });
        expect(res.send).toHaveBeenCalledWith('{"key":"value"}');
    });
});
