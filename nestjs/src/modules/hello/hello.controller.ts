import { Controller, Get, Param, Post, Req, Query } from '@nestjs/common';
import { HelloService } from 'src/modules/hello/hello.service';
import { Request } from 'express';
import { CustomPipe } from 'src/pipes/custom.pipe';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get()
  findAll(@Query() query): string[] {
    console.log(query);
    return this.helloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new CustomPipe()) id) {
    return id;
  }

  @Post()
  create(@Param() params) {
    return 'salam';
  }
}
