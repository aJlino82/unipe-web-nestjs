import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sector } from '../entities/sector.entity';
import { SectorDTO } from '../dtos/sector.dto';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
  ) { }

  async findAll(): Promise<any> {
    try {
      const sector = await this.sectorRepository.find({});
      return sector;
    } catch (e) {
      console.log(e);
    }
  }

  async create(sectorDTO: SectorDTO): Promise<Sector> {
    try {
      const sector = await this.sectorRepository.save(sectorDTO);
      return sector;
    } catch (e) {
      console.log(e);
    }
  }

  async findById(id: number) {
    try {
      const sector = await this.sectorRepository.findOneBy({ id: id })
      return sector;
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, sectorDTO: SectorDTO) {
    try {
      const sector = await this.sectorRepository.update(id, sectorDTO)
      return sector;
    } catch (e) {
      console.log(e)
    }
  }

  async remove(id: number) {
    try {
      await this.sectorRepository.delete(id);
    } catch (e) {
      console.log(e);
    }
  }

}
