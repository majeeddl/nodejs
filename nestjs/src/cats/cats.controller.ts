import { Controller, Get, Req, Param, Post, Body, Put } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

  constructor(private catsService:CatsService){}

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
}
