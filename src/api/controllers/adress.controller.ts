import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { AdressService } from '../services/adress.service';
import { AdressDTO } from '../dtos/adress.dto';

@Controller('/adress')
export class AdressController {
  constructor(private readonly adressService: AdressService) { }

  @Get()
  async findAll() {
    try {
      return await this.adressService.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post()
  async create(@Body() sectorDto: AdressDTO) {
    try {
      const Adress = await this.adressService.create(sectorDto);
      return Adress;
    } catch (e) {
      console.log(e);
    }
  }
  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.adressService.findById(+id);
    } catch (e) {
      console.log(e)
    }
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() sectorDto: AdressDTO) {
    try {
      return await this.adressService.update(+id, sectorDto);
    } catch (e) {
      console.log(e)
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.adressService.remove(+id);
  }
}
