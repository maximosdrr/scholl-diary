import { Module } from '@nestjs/common';
import { ClassRoomController } from './class-room.controller';
import { ClassRoomService } from './class-room.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassRoom } from 'src/entities/class-room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClassRoom])],
  controllers: [ClassRoomController],
  providers: [ClassRoomService],
})
export class ClassRoomModule {}
