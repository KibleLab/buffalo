import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WinstonModule } from 'nest-winston';

import AppModule from '@/modules/app.module';
import loggerConfig from '@/configs/logger.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: WinstonModule.createLogger(loggerConfig()),
  });
  const logger = new Logger('bootstrap');
  const port = process.env.PORT || 4000;

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(port, () => {
    logger.log(`Server Listening on port ${port}`);
  });
}
bootstrap();
