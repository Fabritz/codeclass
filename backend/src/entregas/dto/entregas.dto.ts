import { tipoEntrega } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EntregaDto {
  id: number;
  @IsString()
  ArchivoCodigo: string;
  @IsString()
  archivoUML: string;
  @IsString()
  comentario: string;
  @IsNumber()
  @IsNotEmpty()
  idTarea: number;
  @IsNumber()
  calificacion: number;
  @IsNumber()
  @IsNotEmpty()
  idUsuario: number;
  @IsEnum(tipoEntrega)
  estado: tipoEntrega = 'enviado';
}
