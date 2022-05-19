import { Module } from "@nestjs/common";
import { HelloService } from "src/modules/hello/hello.service";
import { HelloController } from "./hello.controller";



@Module({
    imports :[],
    controllers : [HelloController],
    providers : [HelloService]
})

export class HelloModule{
    
}