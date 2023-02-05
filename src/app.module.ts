// Los Módulos agrupan un conjunto de funcionalidad específica por dominio. Este es el módulo principal o root (aquí estará la definición de todos los submódulos)

import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
