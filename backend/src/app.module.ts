import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UmlModule } from './uml/uml.module';
import { GruposModule } from './grupos/grupos.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [AuthModule, UsersModule, UmlModule, GruposModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
