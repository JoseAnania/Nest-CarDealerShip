// Servicio creado para alojar la lógica de negocio (Cars) de tal manera que sea reutilizable mediante inyección de dependencias.

import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    // defino una propiedad arreglo de Cars del tipo Car (definida en la interfaz, que se llenará con la Seed)
    private cars: Car[] = [];

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

    // método para crear un Car
    public create(createCarDto: CreateCarDto) {
        
        // creamos una constante con la data del nuevo Car
        const car: Car = {

            id: uuid(),
            model: createCarDto.brand,
            brand: createCarDto.model
        }

        // agregamos el nuevo Car 
        this.cars.push(car);

        return car;
    }

    // método para actualizar un Car
    public update(id: string, updateCarDto: UpdateCarDto) {

        // obtenemos el Car original a modificar
        let carBD = this.findOneById(id);

        // si encuentra, lo pasamos por el MAP para transformar el objeto
        this.cars = this.cars.map( car => {

            // validamos que el id recibido exista
            if (car.id === id) {
                
                // sobreescribimos el Car original por lo recibido
                carBD = {
                    ...carBD,
                    ...updateCarDto, id
                }

                // retornamos el Car actualizado
                return carBD;
            }

            // si el id no es igual retornamos el Car como original
            return car;
        });

        // retornamos el Car (actualizado o no)
        return carBD;
    }

    // método para eliminar un Car
    public delete(id: string) {

        // eliminamos el Car
        this.cars = this.cars.filter(car => car.id !== id);
    }

    // método para llenar la BD simulada definida en los Seed 
    fillCarsWithSeedData(cars: Car[]) {

        this.cars = cars;
    }
}
