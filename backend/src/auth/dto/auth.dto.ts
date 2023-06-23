import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
export enum tiposDeUsuario {
  alumno = 'alumno',
  profesor = 'profesor',
}

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsEnum(tiposDeUsuario)
  tipo: string;
}
