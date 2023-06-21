import { WinstonModuleOptions } from 'nest-winston';
import moment = require('moment-timezone');
import winston = require('winston');
import DailyRotateFile = require('winston-daily-rotate-file');

export default function loggerConfig(): WinstonModuleOptions {
  return {
    format: winston.format.combine(
      winston.format.timestamp({
        format: (): string => {
          return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
        },
      }),
      winston.format.printf(({ level, message, timestamp }): string => {
        return `[${level}] ${timestamp}: ${message}`;
      }),
    ),
    transports: [
      new winston.transports.Console(),
      new DailyRotateFile({
        filename: 'logs/combined/%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxFiles: '30d',
      }),
      new DailyRotateFile({
        filename: 'logs/error/%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        level: 'error',
        maxFiles: '30d',
      }),
    ],
  };
}
