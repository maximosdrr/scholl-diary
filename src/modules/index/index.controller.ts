import { Controller, Post, Body, Param, Get, Delete } from '@nestjs/common';
import { IndexService } from './index.service';
import { Index } from 'src/entities/index.entity';

@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Post('create')
  async create(@Body() index: Index) {
    return await this.indexService.create(index);
  }

  @Get('find/:scholl')
  async find(@Param('scholl') scholl: string) {
    return await this.indexService.find(scholl);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.indexService.delete(id);
  }
}
