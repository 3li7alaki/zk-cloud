import { Device } from "../../device/entities/device.entity";
import { User } from "./user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { BiometricType } from "../enums/biometric-type.enum";
import { Finger } from "../enums/finger.enum";

@Entity()
export class Biodata {
    @PrimaryColumn()
    user_pin: string;

    @ManyToOne(() => User, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'user_pin', referencedColumnName: 'pin' })
    user: User;
    
    @PrimaryColumn()
    type: BiometricType;
    
    @PrimaryColumn()
    number: number; // For fingerprints: finger number, for face/palm: template number
    
    @Column('text')
    template: string; // For fingerprints: direct template, for face/palm: JSON object
    
    @Column()
    major_version: number;
    
    @Column()
    minor_version: number;
    
    @Column('uuid', { nullable: true })
    device_id?: string;

    @ManyToOne(() => Device, {
        eager: true,
        nullable: true,
    })
    @JoinColumn({ name: 'device_id' })
    device?: Device;
}