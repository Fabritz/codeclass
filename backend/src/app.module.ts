import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UmlModule } from './uml/uml.module';
import { config } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposModule } from './grupos/grupos.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AuthModule,
    UsersModule,
    UmlModule,
    GruposModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
