import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Обновленные CORS настройки
  app.enableCors({
    origin: [
      'http://localhost:3000', // React dev server
      'http://localhost:3001', // Альтернативный порт
      'https://zenbit-frontend-react.vercel.app', // Production Vercel
      'https://zenbit-frontend-react-git-main-maksymchukhrai.vercel.app', // Vercel branch URLs
      'https://zenbit-frontend-react-maksymchukhrai.vercel.app', // Vercel user URL
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Включаем глобальную валидацию
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap().catch((error) => {
  console.error('Error starting the application:', error);
  process.exit(1);
});
