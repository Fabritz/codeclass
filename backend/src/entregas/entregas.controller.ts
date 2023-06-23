import { Body, Controller, Post, Put, Req } from '@nestjs/common';
import { EntregasService } from './entregas.service';
import { EntregaDto } from './dto';
import { Request } from 'express';

@Controller('entregas')
export class EntregasController {
  constructor(private entregasService: EntregasService) {}
  @Post('crear')
  CrearClase(@Req() req: Request, @Body() dto: EntregaDto) {
    return this.entregasService.CrearEntrega(req.user, dto);
  }
  @Put('actualizar')
  Actualizar(@Req() req: Request, @Body() dto: EntregaDto) {
    return this.entregasService.ActualizarEntrega(req.user, dto);
  }
}
