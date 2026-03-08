import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    
    // Check if the exception has status code 200
    if (status === 200) {
      // Return plain text response with just the message
      const message = exception.message;
      response.status(200).type('text/plain').send(message);
    } else {
      // For other status codes, return the default JSON response
      const exceptionResponse = exception.getResponse();
      response.status(status).json(exceptionResponse);
    }
  }
}