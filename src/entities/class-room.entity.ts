import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Scholl } from './scholl.entity';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';
import { Subject } from './subject.entity';

@Entity()
export class ClassRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(
    type => Scholl,
    scholl => scholl.classRoom,
    { nullable: false },
  )
  scholl: Scholl;

  @OneToMany(
    type => Student,
    student => student.classRoom,
  )
  student: Student;

  @OneToMany(
    type => Teacher,
    teacher => teacher.classRoom,
  )
  teacher: Teacher;

  @OneToMany(
    type => Subject,
    subject => subject.classRoom,
  )
  subject: Subject;
}
