import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import envConfig from '@/configs/env.config';
import ormConfig from '@/configs/orm.config';
import LoggerMiddleware from '@/middlewares/logger.middleware';

@Module({
  imports: [ConfigModule.forRoot(envConfig()), TypeOrmModule.forRoot(ormConfig())],
  providers: [Logger],
})
export default class AppModule implements NestModule {
  // eslint-disable-next-line class-methods-use-this
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
