import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sector } from './entities/sector.entity';
import { SectorController } from './controllers/sector.controller';
import { SectorService } from './services/sector.service';
import { AdressController } from './controllers/adress.controller';
import { AdressService } from './services/adress.service';
import { Adress } from './entities/adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Sector, Adress])],
  controllers: [UserController, SectorController, AdressController],
  providers: [UserService, SectorService, AdressService],
})
export class ApiModule { }
