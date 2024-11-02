import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

// menambahkan module yang kita buat sendiri dengan peritah nest generate module (nama-module)
import { TasksModule } from './tasks/tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);

  // menambahkan validasi dengan decorator pipe / pipe adalah validasi
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
