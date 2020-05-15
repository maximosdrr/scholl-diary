import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository, InsertResult, DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async insert(user: User): Promise<InsertResult> {
    return await this.userRepository.insert(user).catch(erro => {
      throw new HttpException(erro, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  async verifyCredentials(username: string, password: string): Promise<User> {
    const user = await this.userRepository
      .findOne({
        where: {
          username: username,
          password: password,
        },
      })
      .catch(erro => {
        throw new HttpException(erro, HttpStatus.INTERNAL_SERVER_ERROR);
      });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    const user = await this.userRepository.findOne(id).catch(erro => {
      throw new HttpException(erro, HttpStatus.INTERNAL_SERVER_ERROR);
    });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return this.userRepository.delete(user.id).catch(erro => {
      throw new HttpException(erro, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
