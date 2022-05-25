import { Controller, Get, Req, Param, Post, Body, Put, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { Request } from 'express';
import { ForbiddenException } from 'src/exceptions/forbidden.exception';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(@Req() request: Request = null): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get()
  async findOne(@Param('id') id: string): Promise<string> {
    return 'Cat id is : ' + id;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    return 'create cat';
  }

  @Put()
  async update(@Param('id') id: string, @Body() updateCatDto: any) {
    return 'update cat';
  }

  @Get('exception')
  async handleException() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('exception/message')
  async handleExceptionCustomMessage() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'this is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get('exception/custom')
  async handleExceptionWithCustomException() {
    throw new ForbiddenException();
  }

  @Get('exception/filter')
  @UseFilters(new HttpExceptionFilter())
  async exceptionFilter() {
    throw new ForbiddenException();
  }
}
