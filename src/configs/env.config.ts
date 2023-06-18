import { ConfigModuleOptions } from '@nestjs/config';

export default function envConfig(): ConfigModuleOptions {
  return {
    envFilePath: process.env.NODE_ENV === 'development' ? 'envs/.env.dev' : 'envs/.env.prod',
    cache: true,
    isGlobal: true,
  };
}
