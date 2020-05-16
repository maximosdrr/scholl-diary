import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';
import { ClassRoom } from 'src/entities/class-room.entity';

@Controller('class-room')
export class ClassRoomController {
  constructor(private readonly classRoomService: ClassRoomService) {}

  @Post('create')
  async create(@Body() classRoom: ClassRoom) {
    return await this.classRoomService.create(classRoom);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.classRoomService.delete(id);
  }

  @Get('find/:scholl')
  async find(@Param('scholl') scholl: string) {
    return await this.classRoomService.find(scholl);
  }
}
