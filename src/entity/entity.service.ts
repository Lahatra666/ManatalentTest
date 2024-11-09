import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entitiy } from './entities/entity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntityService {
  constructor(
    @InjectRepository(Entitiy)
    private readonly entityRepository: Repository<Entitiy>,
  ) {}

  create(createEntityDto: CreateEntityDto) {
    return this.entityRepository.save(createEntityDto);
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: number) {
    return this.entityRepository.findOneBy({id});
  }

  update(id: number, updateEntityDto: UpdateEntityDto) {
    return this.entityRepository.update(id,updateEntityDto);
  }

  remove(id: number) {
    return this.entityRepository.delete(id);
  }
}
