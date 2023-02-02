// DTO creado para definir la creación de un Car (Data Transfer Object son un tipo de objetos que sirven únicamente para transportar datos)

export class CreateCarDto {
    readonly brand: string;
    readonly model: string;
}