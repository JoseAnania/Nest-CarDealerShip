// El Main es el punto de entrada de nuestra aplicación

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// código que se ejecuta al iniciar el proyecto
async function bootstrap() {

  // ejecuta el Módulo principal
  const app = await NestFactory.create(AppModule);

  // puerto
  await app.listen(3000);
}
bootstrap();
