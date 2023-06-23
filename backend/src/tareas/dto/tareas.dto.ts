import { tipoTarea } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class TareaDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  titulo: string;
  @IsString()
  descripcion?: string;
  @IsNumber()
  @IsNotEmpty()
  idClase: number;
  @IsDate()
  @IsNotEmpty()
  fechaDeEntrega: Date;
  @IsEnum(tipoTarea)
  estado: tipoTarea;
}
