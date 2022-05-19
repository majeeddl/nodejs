import { Module, NestModule } from "@nestjs/common";
import { ExceptionController } from "./exception.controller";



@Module({
    imports : [],
    controllers :[ExceptionController],
    providers : []
})


export class ExceptionModule {}