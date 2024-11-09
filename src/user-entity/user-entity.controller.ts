import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEntityService } from './user-entity.service';
import { CreateUserEntityDto } from './dto/create-user-entity.dto';
import { UpdateUserEntityDto } from './dto/update-user-entity.dto';

@Controller('user-entities')
export class UserEntityController {
  constructor(private readonly userEntityService: UserEntityService) {}

  @Post()
  create(@Body() createUserEntityDto: CreateUserEntityDto) {
    return this.userEntityService.create(createUserEntityDto);
  }

  @Get()
  findAll() {
    return this.userEntityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userEntityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserEntityDto: UpdateUserEntityDto) {
    return this.userEntityService.update(+id, updateUserEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userEntityService.remove(+id);
  }
}
