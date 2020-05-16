import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { SchollService } from './scholl.service';
import { Scholl } from 'src/entities/scholl.entity';

@Controller('scholl')
export class SchollController {
  constructor(private readonly schollService: SchollService) {}

  @Post('create')
  async create(@Body() scholl: Scholl) {
    return await this.schollService.create(scholl);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.schollService.delete(id);
  }
}
