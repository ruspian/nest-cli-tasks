import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-tasks.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'ini adalah halaman tasks';
  }

  @Post()
  //   menggunakan dekorator @Body untuk mengambil data inputaan dari body/user
  createTask(@Body() body: CreateTaskDto) {
    return body;
  }

  @Get('/:id')

  //   menggunakan dekorator @Param('id') untuk mengambil id
  getTask(@Param('id') id: string) {
    return `ini adalah task dengan id: ${id}`;
  }
}
