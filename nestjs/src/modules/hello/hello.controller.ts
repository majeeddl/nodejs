import { Controller, Get, Param, Post, Req, Query, UseInterceptors } from '@nestjs/common';
import { HelloService } from 'src/modules/hello/hello.service';
import { Request } from 'express';
import { CustomPipe } from 'src/modules/pipes/custom.pipe';
import { LoggerInceptor } from 'src/interceptors/logger.interceptor';


@UseInterceptors(LoggerInceptor)
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
