import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Student } from './student.entity';
import { Notebook } from './notebook.entity';

@Entity()
export class Presence {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 0 })
  presence: number;

  @Column({ default: 0 })
  foul: number;

  @ManyToOne(
    type => Student,
    student => student.presence,
  )
  student: Student;

  @ManyToOne(
    type => Notebook,
    notebook => notebook.presence,
  )
  notebook: Notebook;
}
