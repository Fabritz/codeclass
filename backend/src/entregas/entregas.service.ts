import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntregaDto } from './dto';
import { tipoTarea } from '@prisma/client';

@Injectable()
export class EntregasService {
  constructor(private prisma: PrismaService) {}

  async CrearEntrega(user: any, dto: EntregaDto) {
    const tarea = await this.prisma.tareas.findUnique({
      where: { id: dto.idTarea },
    });
    if (tarea.estado !== tipoTarea.visible)
      throw new ForbiddenException('No se puede entregar tarea');
    const entregable = await this.prisma.entregas.create({
      data: {
        estado: dto.estado,
        ArchivoCodigo: dto.ArchivoCodigo,
        ArchivoUML: dto.archivoUML,
        comentario: dto.comentario,
        calificacion: dto.calificacion,
        tarea: {
          connect: {
            id: dto.idTarea,
          },
        },
        estudiante: {
          connect: {
            id: dto.idUsuario,
          },
        },
      },
    });
    return entregable;
  }
  async ActualizarEntrega(user: any, dto: EntregaDto) {
    const tarea = await this.prisma.tareas.findUnique({
      where: { id: dto.idTarea },
    });
    if (tarea.estado !== tipoTarea.visible)
      throw new ForbiddenException('No se puede entregar tarea');
    const entregable = await this.prisma.entregas.update({
      data: {
        estado: dto.estado,
        ArchivoCodigo: dto.ArchivoCodigo,
        ArchivoUML: dto.archivoUML,
        comentario: dto.comentario,
        calificacion: dto.calificacion,
      },
      where: {
        id: dto.id,
      },
    });
    return entregable;
  }
}
