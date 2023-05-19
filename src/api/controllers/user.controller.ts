import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDTO } from '../dtos/user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post()
  async create(@Body() userDto: UserDTO) {
    try {
      const user = await this.userService.create(userDto);
      return user;
    } catch (e) {
      console.log(e);
    }
  }
  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.userService.findById(+id);
    } catch (e) {
      console.log(e)
    }
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() userDTO: UserDTO) {
    try {
      return await this.userService.update(+id, userDTO);
    } catch (e) {
      console.log(e)
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
