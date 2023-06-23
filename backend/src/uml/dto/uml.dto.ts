import { IsNotEmpty, IsString } from 'class-validator';

export class UmlDto {
  @IsString()
  @IsNotEmpty()
  diagram_source: string;
  @IsString()
  diagram_type = 'graphviz';
  @IsString()
  output_format = 'svg';
}
