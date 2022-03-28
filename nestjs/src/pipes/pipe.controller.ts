import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";


@Controller()
export class PipeController{


    constructor() {
    }


    @Get(':id')
    async findOne(@Param('id',ParseIntPipe) id : number){
        return id
    }
}