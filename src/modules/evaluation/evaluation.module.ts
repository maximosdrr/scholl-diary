import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from 'src/entities/evaluation.entity';

@Module({
  providers: [EvaluationService],
  controllers: [EvaluationController],
  imports: [TypeOrmModule.forFeature([Evaluation])],
})
export class EvaluationModule {}
