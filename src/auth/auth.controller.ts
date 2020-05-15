import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Delete,
} from '@nestjs/common';
import { UserService } from '../modules/user/user.service';
import { AuthService } from './auth.service';
import { InsertResult } from 'typeorm';
import { User } from '../entities/user.entity';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('insert')
  async insert(@Body() user: User): Promise<InsertResult> {
    return this.authService.insert(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getProfile')
  getProfile(@Req() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  delete(@Req() req) {
    const id: string = req.user.id;
    return this.userService.deleteUser(id);
  }
}
