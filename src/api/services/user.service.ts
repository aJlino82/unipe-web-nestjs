import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserDTO } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<any> {
    try {
      const users = await this.userRepository.find({});
      return users;
    } catch (e) {
      console.log(e);
    }
  }

  async create(userDTO: UserDTO): Promise<User> {
    try {
      const user = await this.userRepository.save(userDTO);
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async findById(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id: id })
      return user;
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, userDTO: UserDTO) {
    try {
      const user = await this.userRepository.update(id, userDTO)
      return user;
    } catch (e) {
      console.log(e)
    }
  }

  async remove(id: number) {
    try {
      await this.userRepository.delete(id);
    } catch (e) {
      console.log(e);
    }
  }

}
