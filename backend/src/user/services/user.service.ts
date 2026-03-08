import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto, UserCrudDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserDto> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findOneByPin(pin: string): Promise<UserDto> {
    const user = await this.userRepository.findOneBy({ pin });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(userDto: UserCrudDto): Promise<UserDto> {
    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }

  async update(id: string, userDto: UserCrudDto): Promise<UserDto> {
    const user = await this.findOne(id);
    return this.userRepository.save({ ...user, ...userDto });
  }

  async delete(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.delete(user);
  }

  async upsert(userDto: UserCrudDto): Promise<UserDto> {
    const user = await this.userRepository.findOneBy({ pin: userDto.pin });
    if (user) {
      return this.update(user.id, userDto);
    }
    return this.create(userDto);
  }

  async exists(pin: string): Promise<boolean> {
    const user = await this.userRepository.findOneBy({ pin });
    return !!user;
  }

  async findExistingPins(pins: string[]): Promise<string[]> {
    if (pins.length === 0) return [];

    const users = await this.userRepository
      .createQueryBuilder('user')
      .select('user.pin')
      .where('user.pin IN (:...pins)', { pins })
      .getMany();

    return users.map((user) => user.pin);
  }
}
