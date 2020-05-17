import { Module } from '@nestjs/common';
import { PresenceService } from './presence.service';
import { PresenceController } from './presence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Presence } from 'src/entities/presence.entity';

@Module({
  providers: [PresenceService],
  controllers: [PresenceController],
  imports: [TypeOrmModule.forFeature([Presence])],
})
export class PresenceModule {}
