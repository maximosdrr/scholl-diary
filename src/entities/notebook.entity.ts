import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Subject } from './subject.entity';
import { Teacher } from './teacher.entity';

@Entity()
export class Notebook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToOne(type => Subject, { nullable: false })
  @JoinColumn()
  subject: Subject;

  @ManyToOne(
    type => Teacher,
    teacher => teacher.notebook,
    { nullable: false },
  )
  teacher: Teacher;
}
