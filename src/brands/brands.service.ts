// Servicio creado para alojar la lógica de negocio (Brands) de tal manera que sea reutilizable mediante inyección de dependencias.

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from "uuid";

@Injectable()
export class BrandsService {

  // defino una propiedad arreglo de Brands del tipo Brand (definida en la entity, que se llenará con la Seed)
  private brands: Brand[] = [];

  // método para crear un Brand
  create(createBrandDto: CreateBrandDto) {
    
    // creamos una constante con la data del nuevo Brand
    const brand: Brand = {

      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    }

    // agregamos el nuevo Brand
    this.brands.push(brand);

    return brand;
  }

  // método para obtener todos los Brands
  findAll() {

    return this.brands;
  }
  
  // método para obtener un Brand por Id
  findOne(id: string) {
    
    // creamos una constante para verificar que exista el id recibido
    const brand = this.brands.find(brand => brand.id === id);

    // si no existe mandamos respuesta con mensaje
    if (!brand)
      throw new NotFoundException(`Brand whit id '${id}' not found`);

    // si existe, retornamos el Brand 
    return brand;
  }

  // método para actualizar un Brand
  update(id: string, updateBrandDto: UpdateBrandDto) {
    
    // obtenemos el Brand original a modificar
    let brandDB = this.findOne(id);

    // si encuentra, lo pasamos por el MAP para transformar el objeto
    this.brands = this.brands.map(brand => {
      
      // validamos que el id recibido exista
      if (brand.id === id) {

        // sobreescribimos el Car original por lo recibido
        brandDB = {
        
          ...brandDB,
          ...updateBrandDto, id
        }

        brandDB.updateAt = new Date().getTime();

        // retornamos el Brand actualizado
        return brandDB;
      }

      // si el id no es igual retornamos el Brand como original
      return brand;
    });

    // retornamos el Brand (actualizado o no)
    return brandDB;
  }

  // método para eliminar un Brand
  remove(id: string) {

    // eliminamos el Brand
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  // método para llenar la BD simulada definida en los Seed 
  fillBrandsWithSeedData(brands: Brand[]) {

    this.brands = brands;
}
}
