import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sector } from './sector.entity';
import { Adress } from './adress.entity';
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

  @ManyToOne(() => Sector, (sector) => sector.user)
  sector: Sector

  @OneToOne(() => Adress, (adress) => adress.user, { eager: true })
  @JoinColumn()
  adress: Adress
}
