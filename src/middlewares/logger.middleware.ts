import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export default class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || 'User-Agent not found';

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length') || '0';

      if (statusCode < 400) {
        this.logger.log(
          `${method} ${originalUrl} (${statusCode}) ${contentLength} - <${userAgent}> ${ip}`,
        );
      } else {
        this.logger.error(
          `${method} ${originalUrl} (${statusCode}) ${contentLength} - <${userAgent}> ${ip}`,
        );
      }
    });
    next();
  }
}
