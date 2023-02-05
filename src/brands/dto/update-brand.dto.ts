// DTO creado para definir la modificación (PATCH) de un Brand (Data Transfer Object son un tipo de objetos que sirven únicamente para transportar datos)

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto {

    @IsString()
    @MinLength(1)
    readonly name: string;
}
