import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entitiy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  description: string;

  @Column({ length: 20 })
  siret: string;

  @Column({ length: 250 })
  keyLicence: string;

  @Column({ length: 100 })
  website: string;

  @CreateDateColumn({ type:'datetime' })
  createdAt: Date;
}
