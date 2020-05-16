import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Scholl } from './scholl.entity';

@Entity()
export class ClassRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(
    type => Scholl,
    scholl => scholl.classRoom,
  )
  scholl: Scholl;
}
