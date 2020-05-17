import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Student } from './student.entity';
import { Notebook } from './notebook.entity';
import { Index } from './index.entity';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  grade: number;

  @ManyToOne(
    type => Student,
    student => student.evaluation,
    { nullable: false },
  )
  student: Student;

  @ManyToOne(
    type => Notebook,
    notebook => notebook.evaluation,
    { nullable: false },
  )
  notebook: Notebook;

  @ManyToOne(
    type => Index,
    index => index.evaluation,
    { nullable: false },
  )
  index: Index;
}
