import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Scholl } from './scholl.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(
    type => Scholl,
    scholl => scholl.teacher,
  )
  scholl: Scholl;
}
