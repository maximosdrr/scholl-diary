import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository, InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentService: Repository<Student>,
  ) {}

  async create(student: Student): Promise<InsertResult> {
    return await this.studentService.insert(student).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.studentService.delete(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async findOne(id: string): Promise<Student> {
    return await this.studentService
      .findOne(id, {
        join: {
          alias: 'st',
          leftJoinAndSelect: {
            presence: 'st.presence',
            evaluation: 'st.evaluation',
          },
        },
      })
      .catch(erro => {
        throw new HttpException(erro, HttpStatus.BAD_REQUEST);
      });
  }
}
