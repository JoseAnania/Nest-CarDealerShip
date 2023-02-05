// Servicio creado para alojar la lógica de negocio (Seed) de tal manera que sea reutilizable mediante inyección de dependencias.

import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {

     // realizamos la inyección de los servicios cuyas BD quiero simular
     constructor(
      private readonly carsService: CarsService, 
      private readonly brandsService: BrandsService
    ) {}

  populateDB() {

    // llamamos las BD simuladas
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'SEED executed';
  }
}
