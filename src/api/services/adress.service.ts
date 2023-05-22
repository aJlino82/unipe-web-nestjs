import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Adress } from '../entities/adress.entity';
import { AdressDTO } from '../dtos/adress.dto';

@Injectable()
export class AdressService {
  constructor(
    @InjectRepository(Adress)
    private readonly adressRepository: Repository<Adress>,
  ) { }

  async findAll(): Promise<any> {
    try {
      const adress = await this.adressRepository.find({});
      return adress;
    } catch (e) {
      console.log(e);
    }
  }

  async create(adressDTO: AdressDTO): Promise<Adress> {
    try {
      const adress = await this.adressRepository.save(adressDTO);
      return adress;
    } catch (e) {
      console.log(e);
    }
  }

  async findById(id: number) {
    try {
      const adress = await this.adressRepository.findOneBy({ id: id })
      return adress;
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, adressDTO: AdressDTO) {
    try {
      const adress = await this.adressRepository.update(id, adressDTO)
      return adress;
    } catch (e) {
      console.log(e)
    }
  }

  async remove(id: number) {
    try {
      await this.adressRepository.delete(id);
    } catch (e) {
      console.log(e);
    }
  }

}
