// DTO creado para definir la creación (POST) de un Brand (Data Transfer Object son un tipo de objetos que sirven únicamente para transportar datos)

import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {

    @IsString()
    @MinLength(1)
    readonly name: string;

    // las propiedades id y las fechas se crean automáticamente
}
