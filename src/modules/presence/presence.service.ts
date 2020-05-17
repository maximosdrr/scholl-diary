import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Presence } from 'src/entities/presence.entity';
import { Repository, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class PresenceService {
  constructor(
    @InjectRepository(Presence)
    private presenceRepository: Repository<Presence>,
  ) {}

  async create(presence: Presence): Promise<InsertResult> {
    return await this.presenceRepository.insert(presence).catch(erro => {
      throw new HttpException(erro, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  async markPresence(id: string): Promise<UpdateResult> {
    return await this.presenceRepository
      .increment({ id: id }, 'presence', 1)
      .catch(erro => {
        throw new HttpException(erro, HttpStatus.BAD_REQUEST);
      });
  }

  async markFoul(id: string): Promise<UpdateResult> {
    return await this.presenceRepository
      .increment({ id: id }, 'foul', 1)
      .catch(erro => {
        throw new HttpException(erro, HttpStatus.BAD_REQUEST);
      });
  }
}
