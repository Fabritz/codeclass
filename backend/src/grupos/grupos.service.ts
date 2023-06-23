import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { grupoDto } from './dto';
import { tipoGrupo, tipoTarea, tipoUsuario } from '@prisma/client';

@Injectable()
export class GruposService {
  constructor(private prisma: PrismaService) {}

  async OverviewClase(user: any, id: number) {
    const clase = await this.prisma.grupos.findUnique({
      include: {
        tareas: true,
        alumnos: true,
      },
      where: {
        id: id,
      },
    });

    if (user.id === clase.idProfesor) {
      clase.tareas = clase.tareas.filter(
        (tarea) => tarea.estado !== tipoTarea.eliminado,
      );
      return clase;
    }
    const alumno = clase.alumnos.find((x) => x.id === user.id);
    if (!!alumno) {
      delete clase.alumnos;
      clase.tareas = clase.tareas.filter(
        (tarea) => tarea.estado === tipoTarea.visible,
      );
      return clase;
    }
    throw new ForbiddenException('No eres parte de esta clase');
  }

  async EncontrarClases(user: any) {
    const alumno = await this.prisma.usuarios.findFirst({
      select: {
        gruposUnidos: {
          where: {
            estado: tipoGrupo.visible,
          },
        },
      },
      where: {
        id: user.id,
      },
    });
    return alumno.gruposUnidos;
  }
  async EncontrarClasesProfesor(user: any) {
    if (user.tipo != tipoUsuario.profesor)
      throw new ForbiddenException('Solo profesores controlan grupos');
    const profesor = await this.prisma.usuarios.findFirst({
      select: {
        GruposCreados: true,
      },
      where: {
        id: user.id,
      },
    });
    return profesor.GruposCreados;
  }

  async CrearClase(user: any, dto: grupoDto) {
    if (user.tipo != tipoUsuario.profesor)
      throw new ForbiddenException('Solo profesor puede crear grupo');
    const clase = await this.prisma.grupos.create({
      data: {
        nombre: dto.nombre,
        idProfesor: user.id,
        estado: dto?.estado,
      },
    });
    return clase;
  }
  async UnirseAClase(user: any, idReceived: number) {
    const clase = await this.prisma.grupos.findUnique({
      where: { id: idReceived },
    });
    if (clase.idProfesor === user.id)
      throw new ForbiddenException('No se puede unir a su propia clase');

    const claseUnida = await this.prisma.grupos.update({
      where: {
        id: idReceived,
      },
      data: {
        alumnos: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
        alumnos: true,
      },
    });
    return claseUnida;
  }

  async BorrarClase(user: any, id: number) {
    const clase = await this.prisma.grupos.findUnique({
      where: { id: id },
    });
    if (clase.idProfesor !== user.id)
      throw new ForbiddenException('solo el profesor puede borrar la clase');
    const grupoBorrado = await this.prisma.grupos.delete({
      where: {
        id: id,
      },
    });
    return grupoBorrado;
  }

  async SalirseDeClase(user: any, id: number) {
    const clase = await this.prisma.grupos.findUnique({
      where: { id: id },
    });
    if (clase.idProfesor === user.id)
      throw new ForbiddenException('No se puede salir de su propia clase');
    const claseSalida = await this.prisma.grupos.update({
      where: {
        id: id,
      },
      data: {
        alumnos: {
          disconnect: {
            id: user.id,
          },
        },
      },
      include: {
        alumnos: true,
      },
    });
    return claseSalida;
  }

  async ActualizarGrupo(user: any, dto: grupoDto) {
    const clase = await this.prisma.grupos.findUnique({
      where: { id: dto.id },
    });
    if (clase.idProfesor !== user.id)
      throw new ForbiddenException('solo el profesor puede modificar la clase');
    const claseModificada = await this.prisma.grupos.update({
      where: {
        id: dto.id,
      },
      data: {
        nombre: dto.nombre,
        estado: dto?.estado,
      },
    });
    return claseModificada;
  }
}
