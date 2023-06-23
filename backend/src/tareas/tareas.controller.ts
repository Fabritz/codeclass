import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { TareasService } from './tareas.service';
import { TareaDto } from './dto';

@UseGuards(AuthGuard('jwt'))
@Controller('tareas')
export class TareasController {
  constructor(private tareasService: TareasService) {}
  @Get('tareas')
  EncontrarTareas(@Req() req: Request) {
    return this.tareasService.EncontrarTareas(req.user);
  }
  @Get('tareas-profesor')
  EncontrarTareasProfesor(@Req() req: Request) {
    return this.tareasService.EncontrarTareasProfesor(req.user);
  }
  @Post('crear')
  CrearClase(@Req() req: Request, @Body() dto: TareaDto) {
    return this.tareasService.CrearTarea(req.user, dto);
  }
  @Put('actualizar')
  Actualizar(@Req() req: Request, @Body() dto: TareaDto) {
    return this.tareasService.ActualizarTarea(req.user, dto);
  }
}
