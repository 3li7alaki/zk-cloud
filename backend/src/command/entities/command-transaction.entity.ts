import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, Index } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Command } from "./command.entity";

@Entity()
@Index(['command_id'])
export class CommandTransaction {
    @PrimaryColumn('uuid')
    id: string = uuidv4();

    @Column()
    user_pin: string;

    @Column()
    time: Date;

    @Column()
    command_id: number;

    @ManyToOne(() => Command, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'command_id' })
    command: Command;
}