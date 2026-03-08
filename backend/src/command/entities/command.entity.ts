import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Device } from "../../device/entities/device.entity";

@Entity()
export class Command {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    command: string;

    @Column({ nullable: true })
    response?: string;

    @Column({ nullable: true })
    return?: number;

    @Column({ default: false })
    executed: boolean;

    @Column({ default: false })
    successful: boolean;

    @CreateDateColumn()    
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    transferred_at?: Date;

    @Column({ type: 'timestamp', nullable: true })
    executed_at?: Date;

    @Column()
    device_id: string;

    @ManyToOne(() => Device, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'device_id' })
    device: Device;
}