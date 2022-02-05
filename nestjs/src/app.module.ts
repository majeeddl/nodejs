import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './authors/author.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    AuthorModule,
    GraphQLModule.forRoot({
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes();
  }
}
