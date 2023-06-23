import { IsNotEmpty, IsNumber } from 'class-validator';
export class grupoIdDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
