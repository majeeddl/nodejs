import {
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('exception')
export class ExceptionController {
  /**
   *
   */
  constructor() {}

  @Get('forbidden')
  getException() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('custom')
  getExceptionCustomMessage() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is custom exception message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  //Binding Filters
  @Get('filter')
  @UseFilters(new HttpExceptionFilter())
  useCustomFilters() {
    throw new ForbiddenException();
  }
}
