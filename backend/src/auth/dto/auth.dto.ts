import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
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
  @IsOptional()
  @IsEnum(tiposDeUsuario)
  tipo: tiposDeUsuario;
}
