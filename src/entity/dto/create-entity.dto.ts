import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateEntityDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  description: string;

  @Length(1, 20)
  siret: string;

  @Length(1, 250)
  keyLicence: string;

  @IsString()
  @Length(1, 100)
  website: string;

  createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }
}
