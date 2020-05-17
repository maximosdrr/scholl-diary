import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Subject } from './subject.entity';
import { Evaluation } from './evaluation.entity';
import { type } from 'os';
import { Presence } from './presence.entity';

@Entity()
export class Notebook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToOne(type => Subject, { nullable: false })
  @JoinColumn()
  subject: Subject;

  @OneToMany(
    type => Evaluation,
    evaluation => evaluation.notebook,
  )
  evaluation: Evaluation;

  @OneToMany(
    type => Presence,
    presence => presence.notebook,
  )
  presence: Presence;
}
