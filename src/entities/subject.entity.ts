import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { ClassRoom } from './class-room.entity';
import { Teacher } from './teacher.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(
    type => ClassRoom,
    classRoom => classRoom.subject,
    { nullable: false },
  )
  classRoom: ClassRoom;

  @ManyToOne(
    type => Teacher,
    teacher => teacher.subject,
    { nullable: false },
  )
  teacher: Teacher;
}
