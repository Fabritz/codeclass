import { Body, Controller, Post } from '@nestjs/common';
import { UmlService } from './uml.service';

@Controller('uml')
export class UmlController {
  constructor(private readonly umlService: UmlService) {}
  @Post('convert')
  async convertToUml(@Body('code') pythonCode: string) {
    const umlDiagram = await this.umlService.generateUmlDiagram(pythonCode);
    return { umlDiagram };
  }
}
