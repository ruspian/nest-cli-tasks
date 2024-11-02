import { NestFactory } from '@nestjs/core';

// menambahkan module yang kita buat sendiri dengan peritah nest generate module (nama-module)
import { TasksModule } from './tasks/tasks.module';


async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
