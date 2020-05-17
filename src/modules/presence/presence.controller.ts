import { Controller, Body, Post, Put, Param } from '@nestjs/common';
import { PresenceService } from './presence.service';
import { Presence } from 'src/entities/presence.entity';

@Controller('presence')
export class PresenceController {
  constructor(private readonly presenceService: PresenceService) {}

  @Post('create')
  async create(@Body() presence: Presence) {
    return await this.presenceService.create(presence);
  }

  @Put('mark-presence/:id')
  async markPresence(@Param('id') id: string) {
    return await this.presenceService.markPresence(id);
  }

  @Put('mark-foul/:id')
  async markFoul(@Param('id') id: string) {
    return await this.presenceService.markFoul(id);
  }
}
