import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/entities/subject.entity';

@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
  imports: [TypeOrmModule.forFeature([Subject])],
})
export class SubjectModule {}
