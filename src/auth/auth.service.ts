import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InsertResult } from 'typeorm';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async insert(user: User): Promise<InsertResult> {
    return await this.userService.insert(user);
  }

  async validateUser(username: string, password: string): Promise<User> {
    const user: User = await this.userService.verifyCredentials(
      username,
      password,
    );

    if (!user) return null;

    return user;
  }

  async login(user: User): Promise<object> {
    const payload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
