import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpCustomFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalFilters(new HttpCustomFilter())
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
