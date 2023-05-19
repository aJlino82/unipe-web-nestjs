import {
    IsNotEmpty,
    IsString,
    Length,
    MinLength
} from 'class-validator';

export class SectorDTO {
    @IsNotEmpty()
    @IsString()
    @Length(256)
    @MinLength(10)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(256)
    @MinLength(10)
    description: string;

}