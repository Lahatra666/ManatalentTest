import { IsNotEmpty } from 'class-validator';
import { User } from './../../user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entitiy } from './../../entity/entities/entity.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  userId: User | number;

  @ManyToOne(() => Entitiy, (entity) => entity.id, { nullable: false })
  entityId: Entitiy | number;
}
