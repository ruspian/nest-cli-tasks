import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'ini adalah halaman tasks';
  }

  @Post()
  createTask() {
    return 'ini adalah halaman create tasks dengan metod POST';
  }

  @Get('/:id')
  getTask() {
    return 'ini adalah halaman id dari tasks';
  }
}
