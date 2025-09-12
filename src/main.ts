import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS настройки для всех Vercel доменов
  app.enableCors({
    origin: [
      'http://localhost:3000', // React dev server
      'http://localhost:3001', // Альтернативный порт
      'https://zenbit-frontend-react.vercel.app', // Production domain
      'https://zenbit-frontend-react-gmblccy06-maksymchukhrais-projects.vercel.app', // Deployment URL
      /^https:\/\/zenbit-frontend-react.*\.vercel\.app$/, // Регулярное выражение для всех Vercel preview URLs
      /^https:\/\/zenbit-frontend-react.*maksymchukhrais-projects\.vercel\.app$/, // User project URLs
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // Включаем глобальную валидацию
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap().catch((error) => {
  console.error('❌ Error starting the application:', error);
  process.exit(1);
});
