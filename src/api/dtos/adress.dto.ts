import {
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';

export class AdressDTO {

    cep: number;
    @IsNotEmpty()
    @IsString()
    street: string;
    @IsNumber()
    number: number;
    @IsNotEmpty()
    @IsString()
    complement: string;
    @IsNotEmpty()
    @IsString()
    neighborhood: string;
    @IsNotEmpty()
    @IsString()
    city: string;
    @IsNotEmpty()
    @IsString()
    state: string;

}