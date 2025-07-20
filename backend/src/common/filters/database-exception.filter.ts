import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
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
          error: 'Bad Request'
        });
        break;
        
      case 'ForeignKeyViolation':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Cannot delete or update a parent row: a foreign key constraint fails',
          error: 'Bad Request'
        });
        break;
        
      case 'NotNullViolation':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'NOT NULL constraint failed: Required field is missing',
          error: 'Bad Request'
        });
        break;
        
      case 'CheckViolation':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Check constraint violated: Value does not match required conditions',
          error: 'Bad Request'
        });
        break;
        
      default:
        // Handle other database errors
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Database error occurred',
          error: 'Internal Server Error'
        });
    }
  }
  
  private getErrorType(exception: QueryFailedError): string {
    if (!exception.driverError) {
      return 'UnknownDatabaseError';
    }

    const { code , message } = exception.driverError as any;
    
    // PostgreSQL error codes
    if (code === '23505') return 'UniqueViolation';
    if (code === '23503') return 'ForeignKeyViolation';
    if (code === '23502') return 'NotNullViolation';
    if (code === '23514') return 'CheckViolation';
    
    // MySQL error codes
    if (code === 'ER_DUP_ENTRY') return 'UniqueViolation';
    if (code === 'ER_NO_REFERENCED_ROW' || code === 'ER_ROW_IS_REFERENCED') return 'ForeignKeyViolation';
    if (code === 'ER_BAD_NULL_ERROR') return 'NotNullViolation';
    if (code === 'ER_CHECK_CONSTRAINT_VIOLATED') return 'CheckViolation';
    
    // SQLite error messages (doesn't use error codes in the same way)
    if ((message || exception.message).includes('UNIQUE constraint failed')) return 'UniqueViolation';
    if ((message || exception.message).includes('FOREIGN KEY constraint failed')) return 'ForeignKeyViolation';
    if ((message || exception.message).includes('NOT NULL constraint failed')) return 'NotNullViolation';
    if ((message || exception.message).includes('CHECK constraint failed')) return 'CheckViolation';
    
    // Default case
    return 'UnknownDatabaseError';
  }
}