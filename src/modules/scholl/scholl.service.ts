import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Scholl } from 'src/entities/scholl.entity';
import { Repository, InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class SchollService {
  constructor(
    @InjectRepository(Scholl) private schollRepository: Repository<Scholl>,
  ) {}

  async create(scholl: Scholl): Promise<InsertResult> {
    return await this.schollRepository.insert(scholl).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.schollRepository.delete(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }
}
