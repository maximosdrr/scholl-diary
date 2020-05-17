import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ClassRoom } from './class-room.entity';
import { Subject } from './subject.entity';
import { Notebook } from './notebook.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(
    type => ClassRoom,
    classRoom => classRoom.teacher,
    { nullable: false },
  )
  classRoom: ClassRoom;

  @OneToMany(
    type => Notebook,
    notebook => notebook.teacher,
  )
  notebook: Notebook;
}
