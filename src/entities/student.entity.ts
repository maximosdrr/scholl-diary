import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ClassRoom } from './class-room.entity';
import { Evaluation } from './evaluation.entity';
import { Presence } from './presence.entity';

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

  @OneToMany(
    type => Evaluation,
    evaluation => evaluation.student,
  )
  evaluation: Evaluation;

  @OneToMany(
    type => Presence,
    presence => presence.student,
  )
  presence: Presence;
}
