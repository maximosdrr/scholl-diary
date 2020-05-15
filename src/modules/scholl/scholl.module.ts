import { Module } from '@nestjs/common';
import { SchollController } from './scholl.controller';
import { SchollService } from './scholl.service';

@Module({
  controllers: [SchollController],
  providers: [SchollService]
})
export class SchollModule {}
