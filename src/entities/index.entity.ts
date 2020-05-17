import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Scholl } from './scholl.entity';
import { Evaluation } from './evaluation.entity';

@Entity()
export class Index {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  reference: string;

  @Column()
  description: string;

  @OneToMany(
    type => Evaluation,
    evaluation => evaluation.index,
  )
  evaluation: Evaluation;

  @ManyToOne(
    type => Scholl,
    scholl => scholl.index,
  )
  scholl: Scholl;
}
