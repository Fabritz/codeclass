import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { GruposService } from './grupos.service';
import { grupoDto } from './dto';

@UseGuards(AuthGuard('jwt'))
@Controller('grupos')
export class GruposController {
  constructor(private gruposService: GruposService) {}
  @Get('clases')
  EncontrarClases(@Req() req: Request) {
    return this.gruposService.EncontrarClases(req.user);
  }
  @Get('clases-profesor')
  EncontrarClasesProfesor(@Req() req: Request) {
    return this.gruposService.EncontrarClasesProfesor(req.user);
  }
  @Post('crear')
  CrearClase(@Req() req: Request, @Body() dto: grupoDto) {
    return this.gruposService.CrearClase(req.user, dto);
  }
  @Put('unirse')
  UnirseAClase(@Req() req: Request, @Body() id: number) {
    return this.gruposService.UnirseAClase(req.user, id);
  }
  @Delete('borrar')
  BorrarClase(@Req() req: Request, @Body() id: number) {
    return this.gruposService.BorrarClase(req.user, id);
  }
  @Put('salir')
  SalirseDeClase(@Req() req: Request, @Body() id: number) {
    return this.gruposService.SalirseDeClase(req.user, id);
  }
}
