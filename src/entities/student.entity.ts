import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Scholl } from './scholl.entity';
import { ClassRoom } from './class-room.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(
    type => ClassRoom,
    classRoom => classRoom.student,
    { nullable: false },
  )
  classRoom: ClassRoom;
}
