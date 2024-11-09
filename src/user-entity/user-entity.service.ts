import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserEntityDto } from './dto/create-user-entity.dto';
import { UpdateUserEntityDto } from './dto/update-user-entity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user-entity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserEntityService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
  ) {}

  create(createUserEntityDto: CreateUserEntityDto) {
    return this.userEntityRepository.save(createUserEntityDto);
  }

  findAll() {
    return this.userEntityRepository.find({
      relations: ['userId', 'entityId'],
    });
  }

  findOne(id: number) {
    return this.userEntityRepository.findOne({
      where: { id },
      relations: ['userId', 'entityId'],
    });
  }

  update(id: number, updateUserEntityDto: UpdateUserEntityDto) {
    return this.userEntityRepository.update(id, updateUserEntityDto);
  }

  remove(id: number) {
    return this.userEntityRepository.delete(id);
  }
}
