import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.info('process.env.FRONTEND======', process.env.FRONTEND);

  app.enableCors({
    origin: process.env.FRONTEND,
  });

  await app.listen(3005);
}
bootstrap();
