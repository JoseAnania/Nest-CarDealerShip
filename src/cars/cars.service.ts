// Servicio creado para alojar la lógica de negocio (Cars) de tal manera que sea reutilizable mediante inyección de dependencias.

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    // defino una propiedad arreglo de Cars
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Fit'
        },
        {
            id: 3,
            brand: 'Suzuki',
            model: 'Swift'
        },
    ];

    // método para obtener todos los Cars
    public findAll() {

        return this.cars;
    }

    // método para obtener un Car por Id
    public findOneById(id: number) {

        // creamos una constante con la condición para encontrar el Car por id
        const car = this.cars.find(car => car.id === id);

        // validamos que el id solicitado, exista
        if (!car )
            throw new NotFoundException(`Car whit id '${id}' not found`);

        return car;
    }
}
