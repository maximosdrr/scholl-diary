import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'src/entities/subject.entity';
import { Repository, InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject) private subjectRepository: Repository<Subject>,
  ) {}

  async create(subject: Subject): Promise<InsertResult> {
    return await this.subjectRepository.insert(subject).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.subjectRepository.delete(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async findOne(id: string): Promise<Subject> {
    return await this.subjectRepository
      .findOne(id, {
        join: {
          alias: 'subj',
          leftJoinAndSelect: {
            teacher: 'subj.teacher',
          },
        },
      })
      .catch(erro => {
        throw new HttpException(erro, HttpStatus.BAD_REQUEST);
      });
  }
}
