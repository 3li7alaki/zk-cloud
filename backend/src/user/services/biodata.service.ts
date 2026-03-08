import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodata } from '../entities/biodata.entity';
import { BiodataCrudDto } from '../dtos/biodata.dto';
import { BiometricType } from '../enums/biometric-type.enum';

@Injectable()
export class BiodataService {
    constructor(
        @InjectRepository(Biodata)
        private readonly biodataRepository: Repository<Biodata>,
    ) {}

    async findAll(userPin: string): Promise<Biodata[]> {
        return this.biodataRepository.find({
            where: { user_pin: userPin },
        });
    }

    async findFingerprint(userPin: string, finger: number): Promise<Biodata> {
        const fingerprint = await this.biodataRepository.findOne({
            where: { user_pin: userPin, type: BiometricType.FINGERPRINT, number: finger },
        });
        if (!fingerprint) {
            throw new Error(`Fingerprint not found for user ${userPin} and finger ${finger}`);
        }
        return fingerprint;
    }

    async upsert(biodataDto: BiodataCrudDto): Promise<Biodata> {
        const where = {
            user_pin: biodataDto.user_pin,
            type: biodataDto.type,
            number: biodataDto.number
        };
        const existing = await this.biodataRepository.findOne({where});

        if (existing) {
            // Update existing biodata
            Object.assign(existing, biodataDto);
            await this.biodataRepository.update(where, existing);
            return existing;
        } else {
            // Create new biodata
            const biodata = this.biodataRepository.create(biodataDto);
            return this.biodataRepository.save(biodata);
        }
    }

    async delete(userPin: string, type: BiometricType, index?: number): Promise<void> {
        const where: any = { user_pin: userPin, type };
        if (index !== undefined) {
            where.index = index;
        }
        
        await this.biodataRepository.delete(where);
    }

    async deleteByUser(userPin: string): Promise<void> {
        await this.biodataRepository.delete({ user_pin: userPin });
    }

    /**
     * Handle template storage based on biometric type
     * Fingerprints: Store template directly
     * Face/Palm: Store as JSON with index-value mapping
     */
    async processTemplate(
        userPin: string, 
        type: BiometricType, 
        number: number, 
        index: number,
        template: string,
        majorVersion: number,
        minorVersion: number,
        deviceId?: string
    ): Promise<Biodata> {
        if (type === BiometricType.FINGERPRINT) {
            // Store fingerprint template directly
            return this.upsert({
                user_pin: userPin,
                type,
                number,
                template,
                major_version: majorVersion,
                minor_version: minorVersion,
                device_id: deviceId
            });
        } else {
            // For face/palm, store as JSON object
            const existing = await this.biodataRepository.findOne({
                where: { user_pin: userPin, type, number }
            });

            let templates: Record<number, string> = {};
            
            if (existing) {
                try {
                    templates = JSON.parse(existing.template);
                } catch (e) {
                    templates = {};
                }
            }

            // Add/update the template at the specified number
            templates[index] = template;

            return this.upsert({
                user_pin: userPin,
                type,
                number,
                template: JSON.stringify(templates),
                major_version: majorVersion,
                minor_version: minorVersion,
                device_id: deviceId
            });
        }
    }
}