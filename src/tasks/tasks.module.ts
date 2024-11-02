import { Module } from '@nestjs/common';

// menambahkan controller yang kita buat sendiri dengan peritah nest generate controller foldet/nama-controller --flat
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
