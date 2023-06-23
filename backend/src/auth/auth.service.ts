import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.usuarios.create({
      data: {
        email: dto.email,
        password: hash,
        tipo: dto.tipo,
      },
    });
    return user;
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.usuarios.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new ForbiddenException('no existe email');

    const passwordCorrecto = await argon.verify(user.password, dto.password);

    if (!passwordCorrecto)
      throw new ForbiddenException('contraseña incorrecta');

    return user;
  }
}
