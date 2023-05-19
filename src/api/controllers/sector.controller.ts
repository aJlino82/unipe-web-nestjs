import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { SectorService } from '../services/sector.service';
import { SectorDTO } from '../dtos/sector.dto';

@Controller('/sector')
export class SectorController {
  constructor(private readonly sectorService: SectorService) { }

  @Get()
  async findAll() {
    try {
      return await this.sectorService.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post()
  async create(@Body() sectorDto: SectorDTO) {
    try {
      const Sector = await this.sectorService.create(sectorDto);
      return Sector;
    } catch (e) {
      console.log(e);
    }
  }
  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.sectorService.findById(+id);
    } catch (e) {
      console.log(e)
    }
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() sectorDto: SectorDTO) {
    try {
      return await this.sectorService.update(+id, sectorDto);
    } catch (e) {
      console.log(e)
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sectorService.remove(+id);
  }
}
