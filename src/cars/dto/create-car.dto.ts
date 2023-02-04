// DTO creado para definir la creación (POST) de un Car (Data Transfer Object son un tipo de objetos que sirven únicamente para transportar datos)

import { IsString } from "class-validator";

export class CreateCarDto {

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;
}