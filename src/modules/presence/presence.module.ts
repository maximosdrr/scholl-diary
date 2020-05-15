import { Module } from '@nestjs/common';
import { PresenceService } from './presence.service';
import { PresenceController } from './presence.controller';

@Module({
  providers: [PresenceService],
  controllers: [PresenceController]
})
export class PresenceModule {}
