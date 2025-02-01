import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
import { filterGeral } from './filter/filterGeral';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Registrando seu filtro
  app.use(cors());
  app.useGlobalFilters(new filterGeral())

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
