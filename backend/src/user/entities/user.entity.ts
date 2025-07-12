import { Entity, Column, PrimaryColumn } from "typeorm";
import { Role } from "../enums/role.enum";
import { v4 as uuidv4 } from 'uuid';

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
}

