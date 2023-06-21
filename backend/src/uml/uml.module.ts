import { Module } from '@nestjs/common';
import { UmlService } from './uml.service';
import { UmlController } from './uml.controller';

@Module({
  providers: [UmlService],
  controllers: [UmlController],
})
export class UmlModule {}
