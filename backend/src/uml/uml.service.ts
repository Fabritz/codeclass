import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UmlDto } from './dto';
@Injectable()
export class UmlService {
  async generateDiagram(dto: UmlDto): Promise<Buffer> {
    const url = `https://kroki.io/${dto.diagram_type}/svg`;

    const response = await axios.post(url, dto.diagram_source, {
      responseType: 'arraybuffer',
      headers: { 'Content-Type': 'text/plain' },
    });

    return Buffer.from(response.data, 'binary');
  }
}
