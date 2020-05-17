import { Controller, Body, Post, Delete, Param, Get } from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { Notebook } from 'src/entities/notebook.entity';

@Controller('notebook')
export class NotebookController {
  constructor(private readonly notebookService: NotebookService) {}

  @Post('create')
  async create(@Body() notebook: Notebook) {
    return await this.notebookService.create(notebook);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.notebookService.delete(id);
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.notebookService.findOne(id);
  }
}
