import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/entities/teacher.entity';
import { Repository, InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}

  async create(teacher: Teacher): Promise<InsertResult> {
    return await this.teacherRepository.insert(teacher).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.teacherRepository.delete(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async findOne(id: string): Promise<Teacher> {
    return await this.teacherRepository
      .findOne(id, {
        join: {
          alias: 't',
          leftJoinAndSelect: {
            subjects: 't.subject',
          },
        },
      })
      .catch(erro => {
        throw new HttpException(erro, HttpStatus.BAD_REQUEST);
      });
  }
}
