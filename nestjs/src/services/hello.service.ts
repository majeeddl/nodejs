import { Injectable } from "@nestjs/common";


@Injectable()
export class HelloService{

    private readonly data : any[] = [{ 'hello' : 'world'}];

    findAll():string[]{
        return this.data;
    }
}