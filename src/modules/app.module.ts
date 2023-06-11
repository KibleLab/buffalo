import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import LoggerMiddleware from '@/middlewares/logger.middleware';

@Module({
  providers: [Logger],
})
export default class AppModule implements NestModule {
  // eslint-disable-next-line class-methods-use-this
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
