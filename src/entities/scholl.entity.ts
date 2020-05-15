import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Scholl {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
