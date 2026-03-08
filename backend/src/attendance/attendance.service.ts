import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './entities/attendance.entity';
import { AttendanceDto, AttendanceCrudDto } from './dtos/attendance.dto';

@Injectable()
export class AttendanceService {
    constructor(
        @InjectRepository(Attendance)
        private readonly attendanceRepository: Repository<Attendance>,
    ) {}

    async findAll(): Promise<AttendanceDto[]> {
        return this.attendanceRepository.find();
    }

    async findOne(id: string): Promise<AttendanceDto> {
        const attendance = await this.attendanceRepository.findOne({
            where: { id }
        });
        if (!attendance) {
            throw new NotFoundException('Attendance record not found');
        }
        return attendance;
    }

    async create(attendanceDto: AttendanceCrudDto): Promise<AttendanceDto> {
        const attendance = this.attendanceRepository.create({
            ...attendanceDto,
            time: new Date(attendanceDto.time)
        });
        return this.attendanceRepository.save(attendance);
    }

    async update(id: string, attendanceDto: AttendanceCrudDto): Promise<AttendanceDto> {
        const attendance = await this.findOne(id);
        return this.attendanceRepository.save({
            ...attendance,
            ...attendanceDto,
            time: new Date(attendanceDto.time)
        });
    }

    async delete(id: string): Promise<void> {
        const attendance = await this.findOne(id);
        await this.attendanceRepository.delete(attendance.id);
    }

    async findByUserPin(userPin: string): Promise<AttendanceDto[]> {
        return this.attendanceRepository.find({
            where: { user_pin: userPin },
            order: { time: 'DESC' }
        });
    }

    async findByDeviceId(deviceId: string): Promise<AttendanceDto[]> {
        return this.attendanceRepository.find({
            where: { device_id: deviceId },
            order: { time: 'DESC' }
        });
    }

    async createMany(attendanceDtos: AttendanceCrudDto[]): Promise<AttendanceDto[]> {
        if (attendanceDtos.length === 0) return [];
        
        const attendances = attendanceDtos.map(dto => 
            this.attendanceRepository.create({
                ...dto,
                time: new Date(dto.time)
            })
        );
        
        return this.attendanceRepository.save(attendances);
    }
}