import { PartialType } from '@nestjs/mapped-types';
import { CreateUserEntityDto } from './create-user-entity.dto';

export class UpdateUserEntityDto extends PartialType(CreateUserEntityDto) {}
