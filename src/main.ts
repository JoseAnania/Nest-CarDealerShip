// El Main es el punto de entrada de nuestra aplicación

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// código que se ejecuta al iniciar el proyecto
async function bootstrap() {

  // ejecuta el Módulo principal
  const app = await NestFactory.create(AppModule);

  // utilizamos los PIPES a nivel global para validar la forma de los DTO 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
      }),
  );


  // puerto
  await app.listen(3000);
}
bootstrap();
