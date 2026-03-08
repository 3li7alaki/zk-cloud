import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>();
        const apiKey = this.extractApiKey(request);

        if (!process.env.API_KEY) {
            return true;
        }

        if (!apiKey || apiKey !== process.env.API_KEY) {
            throw new UnauthorizedException('Invalid or missing API key');
        }

        return true;
    }

    private extractApiKey(request: Request): string | undefined {
        const authHeader = request.headers.authorization;
        if (authHeader?.startsWith('Bearer ')) {
            return authHeader.slice(7);
        }
        return request.headers['x-api-key'] as string | undefined;
    }
}
