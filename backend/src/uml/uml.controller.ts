import { Body, Controller, Post } from '@nestjs/common';
import { UmlService } from './uml.service';
import { UmlDto } from './dto';

@Controller('uml')
export class UmlController {
  constructor(private readonly umlService: UmlService) {}
  @Post('convert')
  async convertToUml(@Body() dto: UmlDto) {
    const umlDiagram = await this.umlService.generateDiagram(dto);
    return { umlDiagram };
  }
}
