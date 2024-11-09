import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityModule } from './entity/entity.module';
import { Entitiy } from './entity/entities/entity.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { UserEntityModule } from './user-entity/user-entity.module';
import { UserEntity } from './user-entity/entities/user-entity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mana',
      entities: [Entitiy,User,UserEntity],
      synchronize: true,
    }),
    EntityModule,
    UserModule,
    UserEntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
