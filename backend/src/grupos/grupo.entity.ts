import { BaseEntity } from 'src/base-entity';
import { Entity, Column } from 'typeorm';

@Entity('Grupos')
export class grupo extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  estado: string;
  @Column({ type: 'integer', nullable: false })
  idProfesor: number;
}
