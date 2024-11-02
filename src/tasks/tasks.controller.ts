import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'ini adalah halaman tasks';
  }

  @Post()
  //   menggunakan dekorator @Body untuk mengambil data inputaan dari body/user
  createTask(@Body() body: any) {
    return body;
  }

  @Get('/:id')

  //   menggunakan dekorator @Param('id') untuk mengambil id
  getTask(@Param('id') id: string) {
    return `ini adalah task dengan id: ${id}`;
  }
}
