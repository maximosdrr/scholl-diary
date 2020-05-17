import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notebook } from 'src/entities/notebook.entity';
import { Repository, InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class NotebookService {
  constructor(
    @InjectRepository(Notebook)
    private notebookRepository: Repository<Notebook>,
  ) {}

  async create(notebook: Notebook): Promise<InsertResult> {
    return await this.notebookRepository.insert(notebook).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.notebookRepository.delete(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }

  async findOne(id: string): Promise<Notebook> {
    return await this.notebookRepository.findOne(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    });
  }
}
