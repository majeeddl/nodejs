import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './modules/authors/author.module';
import { HelloModule } from './modules/hello/hello.module';
import { PipeModule } from './pipes/pipe.module';

@Module({
  imports: [
    AuthorModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    // }),
    // GraphQLModule.forRoot({
    //   playground: true,
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: 'schema.gql',
    // }),
    HelloModule,
    PipeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes();
  }
}
