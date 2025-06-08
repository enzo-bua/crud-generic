import { IError } from '../utils/errorsDictionary';
export class HttpException extends Error {
  public status: number;
  public message: string;
  public details?: any = [];
  public code?: string = 'unknown_error';

  constructor(status: number, message: string, code?: string, details?: any[]) {
    super(message);
    this.status = status;
    this.message = message;
    this.code = code;
    this.details = details;
  }
}

export const HttpExceptionError = (error: IError, errors?: any[]) =>
  new HttpException(error.httpCode, error.message, error.code, errors);
