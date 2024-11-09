import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  firstName: string;

  @Column()
  language: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  lastLogin: Date;

  @CreateDateColumn()
  createdAt: Date;
}
