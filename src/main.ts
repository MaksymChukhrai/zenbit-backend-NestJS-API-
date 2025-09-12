import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Настройка статических файлов
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // CORS настройки для всех Vercel доменов
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://zenbit-frontend-react.vercel.app',
      'https://zenbit-frontend-react-gmblccy06-maksymchukhrais-projects.vercel.app',
      /^https:\/\/zenbit-frontend-react.*\.vercel\.app$/,
      /^https:\/\/zenbit-frontend-react.*maksymchukhrais-projects\.vercel\.app$/,
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap().catch((error) => {
  console.error('❌ Error starting the application:', error);
  process.exit(1);
});
