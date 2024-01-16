import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://keri4.shinefix.pro',
  });

  await app.listen(3005);
}
bootstrap();
