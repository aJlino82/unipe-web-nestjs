import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { type } from "os";

@Entity('adress')
export class Adress {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    cep: number;
    @Column()
    street: string;
    @Column()
    number: number;
    @Column()
    complement: string;
    @Column()
    neighborhood: string;
    @Column()
    city: string;
    @Column()
    state: string;

    @OneToOne(() => User, (user) => user.adress)
    user: User;

}