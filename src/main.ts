import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включаем CORS для фронтенда
  app.enableCors({
    origin: 'http://localhost:3001', // React обычно на 3001 (если NestJS на 3000)
    credentials: true,
  });

  // Включаем глобальную валидацию
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

// Исправляем вызов bootstrap
bootstrap().catch((error) => {
  console.error('Error starting the application:', error);
  process.exit(1);
});
