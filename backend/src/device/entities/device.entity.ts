import { Command } from "../../command/entities/command.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Device {
    @PrimaryColumn('uuid')
    id: string = uuidv4();

    @Column({ unique: true })
    serial_number: string;

    @Column({ nullable: true })
    name?: string;

    @Column({ nullable: true })
    push_version?: string;

    @Column({ nullable: true })
    fingerprint_version?: number;

    @Column({ default: false })
    online: boolean;

    @Column({ nullable: true })
    last_heartbeat?: Date;

    @Column({ default: 10 })
    heartbeat: number;

    @Column({ default: 3 })
    time_zone: number;

    @Column({ nullable: true })
    ip_address?: string;

    @Column({ default: 69 })
    language: number;

    @Column({ default: 0 })
    user_count: number;

    @Column({ default: 0 })
    fingerprint_count: number;

    @Column({ default: 0 })
    transaction_count: number;

    @OneToMany(() => Command, (command) => command.device, {
        cascade: ["insert", "update", "remove"]
    })
    commands: Command[];
}
