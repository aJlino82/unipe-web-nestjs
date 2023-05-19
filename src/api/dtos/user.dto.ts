import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MinLength
} from 'class-validator';
import { Sector } from '../entities/sector.entity';

const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(cpfRegex)
  @Length(11)
  cpf: string;

  @IsDate()
  birthDate: Date;

  sectorId: number;

  sector: Sector
}
