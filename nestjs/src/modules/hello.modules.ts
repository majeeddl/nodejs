import { Module } from "@nestjs/common";
import { HelloController } from "src/controllers/hello.controller";
import { HelloService } from "src/services/hello.service";



@Module({
    imports :[],
    controllers : [HelloController],
    providers : [HelloService]
})

export class HelloModule{
    
}