import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Role } from "../enums/role.enum";
import { v4 as uuidv4 } from 'uuid';
import { Biodata } from "./biodata.entity";

@Entity()
export class User {
    @PrimaryColumn('uuid')
    id: string = uuidv4();

    @Column({ unique: true })
    pin: string;
    
    @Column()
    name: string;

    @Column({ nullable: true })
    password?: string;

    @Column()
    role: Role;

    @Column({ nullable: true })
    card_number?: string;

    @OneToMany(() => Biodata, (biodata) => biodata.user, {
        eager: true,
    })
    biodata: Biodata[];
}

