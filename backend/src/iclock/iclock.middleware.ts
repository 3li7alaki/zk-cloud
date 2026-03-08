import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const HEADERS = {
    'Content-Type': 'text/plain;charset=UTF-8',
    'Connection': 'close',
    'Cache-Control': 'no-store',
    'Pragma': 'no-cache',
    'Vary': 'Accept-Language,Cookie',
    'Server': 'ZK Cloud'
};

@Injectable()
export class IclockMiddleware implements NestMiddleware {
    use(_req: Request, res: Response, next: NextFunction) {
        res.set(HEADERS);

        res.json = function(body: any) {
            res.set(HEADERS);
            return res.send(typeof body === 'string' ? body : JSON.stringify(body));
        };
        
        next();
    }
}