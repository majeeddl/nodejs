import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";


@Injectable()
export class LoggerInceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log("before interceptor ...");

        const nowDate = Date.now();
        return next.handle().pipe(
            tap(()=>{

                console.log(`Log after interceptor ... ${Date.now() - nowDate}ms`)
            })
        )
    }

}