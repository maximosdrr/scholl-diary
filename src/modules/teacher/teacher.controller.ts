import { Controller, Body, Post, Get, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from 'src/entities/teacher.entity';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post('create')
  async create(@Body() teacher: Teacher) {
    return await this.teacherService.create(teacher);
  }

  @Get('find/:id')
  async delete(@Param('id') id: string) {
    return await this.teacherService.findOne(id);
  }

  @Delete('delete/:id')
  async findOne(@Param('id') id: string) {
    return await this.teacherService.delete(id);
  }
}
