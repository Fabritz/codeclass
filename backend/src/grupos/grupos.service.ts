import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { grupoDto } from './dto';
import { tipoUsuario } from '@prisma/client';

@Injectable()
export class GruposService {
  constructor(private prisma: PrismaService) {}

  async EncontrarClases(user: any) {
    return user;
    // this.prisma.grupos.findMany({
    //   where: {
    //         alumnos: {
    //         some
    //     },
    //   },
    // });
  }
  async EncontrarClasesProfesor(user: any) {
    return user;
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
    if (clase.id === user.id)
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
    return user;
  }

  async SalirseDeClase(user: any, id: number) {
    return user;
  }
}
