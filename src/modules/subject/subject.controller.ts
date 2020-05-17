import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from 'src/entities/subject.entity';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post('create')
  async create(@Body() subject: Subject) {
    return await this.subjectService.create(subject);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.subjectService.delete(id);
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.subjectService.findOne(id);
  }
}
