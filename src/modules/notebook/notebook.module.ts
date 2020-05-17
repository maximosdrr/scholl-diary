import { Module } from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { NotebookController } from './notebook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notebook } from 'src/entities/notebook.entity';

@Module({
  providers: [NotebookService],
  controllers: [NotebookController],
  imports: [TypeOrmModule.forFeature([Notebook])],
})
export class NotebookModule {}
