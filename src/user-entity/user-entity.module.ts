import { Module } from '@nestjs/common';
import { UserEntityService } from './user-entity.service';
import { UserEntityController } from './user-entity.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UserEntity } from './entities/user-entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserEntityController],
  providers: [UserEntityService],
})
export class UserEntityModule {}
