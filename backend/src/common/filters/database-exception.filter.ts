import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Determine the type of database error
    const errorType = this.getErrorType(exception);

    // Handle different types of errors with appropriate responses
    switch (errorType) {
      case 'UniqueViolation':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'A record with the same unique values already exists',
          error: 'Bad Request',
        });
        break;

      case 'ForeignKeyViolation':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message:
            'Cannot delete or update a parent row: a foreign key constraint fails',
          error: 'Bad Request',
        });
        break;

      case 'NotNullViolation':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'NOT NULL constraint failed: Required field is missing',
          error: 'Bad Request',
        });
        break;

      case 'CheckViolation':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message:
            'Check constraint violated: Value does not match required conditions',
          error: 'Bad Request',
        });
        break;

      default:
        // Handle other database errors
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Database error occurred',
          error: 'Internal Server Error',
        });
    }
  }

  private getErrorType(exception: QueryFailedError): string {
    if (!exception.driverError) {
      return 'UnknownDatabaseError';
    }

    const { code } = exception.driverError as { code?: string };

    // PostgreSQL error codes
    if (code === '23505') return 'UniqueViolation';
    if (code === '23503') return 'ForeignKeyViolation';
    if (code === '23502') return 'NotNullViolation';
    if (code === '23514') return 'CheckViolation';

    return 'UnknownDatabaseError';
  }
}
