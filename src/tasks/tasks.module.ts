import { Module } from '@nestjs/common';

// menambahkan controller yang kita buat sendiri dengan peritah nest generate controller foldet/nama-controller --flat
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController]
})
export class TasksModule {}
