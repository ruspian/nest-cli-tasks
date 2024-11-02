import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-tasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  tasksService: TasksService;

  constructor() {
    this.tasksService = new TasksService();
  }

  @Get()
  listTasks() {
    return this.tasksService.findAll();
  }

  @Post()
  //   menggunakan dekorator @Body untuk mengambil data inputaan dari body/user
  createTask(@Body() body: CreateTaskDto) {
    return this.tasksService.create(body.content);
  }

  @Get('/:id')

  //   menggunakan dekorator @Param('id') untuk mengambil id
  getTask(@Param('id') id: string) {
    return this.tasksService.findOne(parseInt(id));
  }
}
