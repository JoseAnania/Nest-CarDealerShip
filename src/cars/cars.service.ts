// Servicio creado para alojar la lógica de negocio (Cars) de tal manera que sea reutilizable mediante inyección de dependencias.

import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";

@Injectable()
export class CarsService {

    // defino una propiedad arreglo de Cars del tipo Car (definida en las interfaces)
    // los id se trabajan con UUID
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Fit'
        },
        {
            id: uuid(),
            brand: 'Suzuki',
            model: 'Swift'
        },
    ];

    // método para obtener todos los Cars
    public findAll() {

        return this.cars;
    }

    // método para obtener un Car por Id
    public findOneById(id: string) {

        // creamos una constante con la condición para encontrar el Car por id
        const car = this.cars.find(car => car.id === id);

        // validamos que el id solicitado, exista
        if (!car )
            throw new NotFoundException(`Car whit id '${id}' not found`);

        return car;
    }
}
