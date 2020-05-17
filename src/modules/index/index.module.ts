import { Module } from '@nestjs/common';
import { IndexService } from './index.service';
import { IndexController } from './index.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Index } from 'src/entities/index.entity';

@Module({
  providers: [IndexService],
  controllers: [IndexController],
  imports: [TypeOrmModule.forFeature([Index])],
})
export class IndexModule {}
