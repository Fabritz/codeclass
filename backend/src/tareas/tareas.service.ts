import { ForbiddenException, Injectable } from '@nestjs/common';
import { tipoGrupo, tipoTarea, tipoUsuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TareaDto } from './dto';

@Injectable()
export class TareasService {
  constructor(private prisma: PrismaService) {}

  async EncontrarTareas(user: any) {
    const alumno = await this.prisma.usuarios.findFirst({
      select: {
        gruposUnidos: {
          where: {
            estado: tipoGrupo.visible,
          },
          select: {
            tareas: {
              where: {
                estado: tipoTarea.visible,
              },
            },
          },
        },
      },
      where: {
        id: user.id,
      },
    });
    return alumno.gruposUnidos;
  }
  async EncontrarTareasProfesor(user: any) {
    if (user.tipo != tipoUsuario.profesor)
      throw new ForbiddenException('Solo profesores controlan grupos');
    const profesor = await this.prisma.usuarios.findFirst({
      select: {
        GruposCreados: {
          where: {
            OR: [{ estado: tipoTarea.oculto }, { estado: tipoTarea.visible }],
          },
        },
      },
      where: {
        id: user.id,
      },
    });
    return profesor.GruposCreados;
  }
  async CrearTarea(user: any, dto: TareaDto) {
    const clase = await this.prisma.grupos.findUnique({
      where: { id: dto.idClase },
    });
    if (clase.idProfesor !== user.id)
      throw new ForbiddenException('solo el profesor puede crear tareas');
    const tarea = await this.prisma.tareas.create({
      data: {
        titulo: dto.titulo,
        descripcion: dto.descripcion,
        idGrupo: dto.idClase,
        fechaDeEntrega: dto.fechaDeEntrega,
        estado: dto.estado,
      },
    });
    return tarea;
  }
  async ActualizarTarea(user: any, dto: TareaDto) {
    const clase = await this.prisma.grupos.findUnique({
      where: { id: dto.idClase },
    });
    if (clase.idProfesor !== user.id)
      throw new ForbiddenException('solo el profesor puede modificar tareas');
    const tarea = await this.prisma.tareas.update({
      data: {
        titulo: dto.titulo,
        descripcion: dto.descripcion,
        idGrupo: dto.idClase,
        fechaDeEntrega: dto.fechaDeEntrega,
        estado: dto.estado,
      },
      where: {
        id: dto.id,
      },
    });
    return tarea;
  }
}
