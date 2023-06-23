import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
export enum tiposDeGrupo {
  visible = 'visible',
  oculto = 'oculto',
}

export class grupoDto {
  id?: number;
  @IsString()
  @IsNotEmpty()
  nombre: string;
  idProfesor?: number;
  @IsEnum(tiposDeGrupo)
  estado?: tiposDeGrupo = tiposDeGrupo.visible;
}
