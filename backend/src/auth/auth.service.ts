import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.usuarios.create({
      data: {
        email: dto.email,
        password: hash,
        tipo: dto.tipo,
      },
    });
    return this.signToken(user.id, user.email);
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.usuarios.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new ForbiddenException('no existe email');

    const passwordCorrecto = await argon.verify(user.password, dto.password);

    if (!passwordCorrecto)
      throw new ForbiddenException('contraseña incorrecta');

    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '5h',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
