import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserEntityDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  entityId: number;
}
