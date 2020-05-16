import { Module } from '@nestjs/common';
import { SchollController } from './scholl.controller';
import { SchollService } from './scholl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scholl } from 'src/entities/scholl.entity';

@Module({
  controllers: [SchollController],
  providers: [SchollService],
  imports: [TypeOrmModule.forFeature([Scholl])],
})
export class SchollModule {}
