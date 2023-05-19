import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sector } from './entities/sector.entity';
import { SectorController } from './controllers/sector.controller';
import { SectorService } from './services/sector.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Sector])],
  controllers: [UserController, SectorController],
  providers: [UserService, SectorService],
})
export class ApiModule { }
