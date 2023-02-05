// Controlador generado para controlar las rutas de Cars, son los encargados de escuchar la solicitud y emitir una respuesta.

import { Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Patch, Post } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')

export class CarsController {

    // realizamos la inyección de dependencias para poder usar la lógica del servicio
    constructor(private readonly carsService: CarsService) {}

    // método para obtener todos los Cars
    @Get()
    getAllCars() {

        return this.carsService.findAll();
    }

    // método para obtener un Car por Id
    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {

        return this.carsService.findOneById(id);
    }

    // método para agregar un Car
    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        
        return this.carsService.create(createCarDto);
    }

    // método para actualizar un Car por Id
    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto) {
        
        return this.carsService.update(id, updateCarDto);
    }

    // método para eliminar un Car por Id
    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        
        return this.carsService.delete(id);
    }
}
