import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Entitiy } from './entities/entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entitiy])],
  controllers: [EntityController],
  providers: [EntityService],
})
export class EntityModule {}
