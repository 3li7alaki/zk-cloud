import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { BiodataService } from './services/biodata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Biodata } from './entities/biodata.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Biodata])],
    controllers: [UserController],
    providers: [UserService, BiodataService],
    exports: [UserService, BiodataService],
})
export class UserModule {}
