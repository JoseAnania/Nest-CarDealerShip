// Controlador generado para controlar las rutas de Brands, son los encargados de escuchar la solicitud y emitir una respuesta.

import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {

  //inyección de dependencias para poder usar la lógica del servicio
  constructor(private readonly brandsService: BrandsService) {}

  // método para agregar un Brand
  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  // método para obtener todos los Brands
  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  // método para obtener un Brand por Id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.findOne(id);
  }

  // método para actualizar un Brand por Id
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(id, updateBrandDto);
  }

  // método para eliminar un Brand por Id
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.remove(id);
  }
}
