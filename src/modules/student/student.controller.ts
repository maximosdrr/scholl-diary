import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { Student } from 'src/entities/student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post('create')
  async create(@Body() student: Student) {
    return await this.studentService.create(student);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.studentService.delete(id);
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.studentService.findOne(id);
  }
}
