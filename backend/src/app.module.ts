import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UmlModule } from './uml/uml.module';
import { GruposModule } from './grupos/grupos.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TareasModule } from './tareas/tareas.module';
import { EntregasModule } from './entregas/entregas.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UmlModule,
    GruposModule,
    PrismaModule,
    TareasModule,
    EntregasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
