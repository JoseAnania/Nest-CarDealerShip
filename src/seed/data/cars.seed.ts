// Archivo creado para simular la BD de Cars

import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Car[] = [

    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Ethios'
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
    }
]