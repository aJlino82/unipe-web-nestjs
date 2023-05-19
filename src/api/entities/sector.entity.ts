import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('sector')
export class Sector {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    description: string;

}