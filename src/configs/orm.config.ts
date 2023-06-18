import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default function ormConfig(): TypeOrmModuleOptions {
  return {
    type: 'mariadb',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadEntities: true,
    entities: [`${__dirname}/../entities/*.entity.{ts,js}`],
    migrations: [`${__dirname}/../migrations/*.migration.{ts,js}}`],
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
  };
}
