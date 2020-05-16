import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassRoom } from 'src/entities/class-room.entity';
import { Repository, InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class ClassRoomService {
  constructor(
    @InjectRepository(ClassRoom) private classRoom: Repository<ClassRoom>,
  ) {}

  async create(classRoom: ClassRoom): Promise<InsertResult> {
    return await this.classRoom.insert(classRoom).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.classRoom.delete(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async find(scholl: string): Promise<ClassRoom[]> {
    return await this.classRoom
      .find({ where: { scholl: scholl } })
      .catch(erro => {
        throw new HttpException(erro, HttpStatus.BAD_REQUEST);
      });
  }
}
