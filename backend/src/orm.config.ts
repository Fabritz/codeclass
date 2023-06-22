import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'codeclass',
  password: 'codeclass',
  port: 5432,
  host: '127.0.0.1',
  database: 'codeclass',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
