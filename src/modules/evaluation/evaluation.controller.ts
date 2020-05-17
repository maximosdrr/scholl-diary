import { Controller, Body, Post, Delete, Param } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { Evaluation } from 'src/entities/evaluation.entity';

@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post('create')
  async create(@Body() evaluation: Evaluation) {
    return await this.evaluationService.create(evaluation);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.evaluationService.delete(id);
  }
}
