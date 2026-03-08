import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../../user/entities/user.entity";
import { Device } from "../../device/entities/device.entity";

@Entity()
export class Attendance {
    @PrimaryColumn('uuid')
    id: string = uuidv4();

    @Column()
    user_pin: string;

    @Column()
    time: Date;

    @Column('uuid')
    device_id: string;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_pin', referencedColumnName: 'pin' })
    user: User;

    @ManyToOne(() => Device, { eager: true })
    @JoinColumn({ name: 'device_id' })
    device: Device;
}