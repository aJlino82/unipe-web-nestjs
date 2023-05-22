import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sector } from './sector.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ name: 'birth_date', nullable: true })
  birthDate?: Date;

  @OneToOne(() => Sector)
  @JoinColumn({ name: 'sectorId' })
  sector: Sector

  toJSON(): any {
    const { sector, ...rest } = this;
    return {
      ...rest,
      sector: sector ? sector.toJSON() : null,
    };
  }

}
