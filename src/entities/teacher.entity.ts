import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subject } from './subject.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    type => Subject,
    subject => subject.teacher,
  )
  subject: Subject;
}
