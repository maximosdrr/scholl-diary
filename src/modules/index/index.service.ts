import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Index } from 'src/entities/index.entity';
import { Repository, InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class IndexService {
  constructor(
    @InjectRepository(Index) private indexRepository: Repository<Index>,
  ) {}

  async create(index: Index): Promise<InsertResult> {
    return await this.indexRepository.insert(index).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.indexRepository.delete(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async find(scholl: string): Promise<Index[]> {
    return await this.indexRepository
      .find({ where: { scholl: scholl } })
      .catch(erro => {
        throw new HttpException(erro, HttpStatus.BAD_REQUEST);
      });
  }
}
