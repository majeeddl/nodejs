import { Controller, Get, Param, Post, Req, Query } from '@nestjs/common';
import { HelloService } from 'src/services/hello.service';
import { Request } from 'express';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get()
  findAll(@Query() query): string[] {
    console.log(query);
    return this.helloService.findAll();
  }

  @Post()
  create(@Param() params) {
    return 'salam';
  }
}
