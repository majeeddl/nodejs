import { Controller, Get, Req, Param, Post, Body, Put } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request = null): string {
    return 'This action returns all cats';
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
}
