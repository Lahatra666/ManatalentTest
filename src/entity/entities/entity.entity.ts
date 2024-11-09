import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Entitiy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  description: string;

  @Column()
  siret: string;

  @Column()
  keyLicence: string;

  @Column()
  website: string;

  @CreateDateColumn()
  createdAt: Date;
}
