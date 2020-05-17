import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ClassRoom } from './class-room.entity';

@Entity()
export class Scholl {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    type => ClassRoom,
    classRoom => classRoom.scholl,
  )
  classRoom: ClassRoom;
}
