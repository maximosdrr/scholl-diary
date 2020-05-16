import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ClassRoom } from './class-room.entity';
import { Teacher } from './teacher.entity';
import { Student } from './student.entity';

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

  @OneToMany(
    type => Teacher,
    teacher => teacher.scholl,
  )
  teacher: Teacher;

  @OneToMany(
    type => Student,
    teacher => teacher.scholl,
  )
  student: Student;
}
