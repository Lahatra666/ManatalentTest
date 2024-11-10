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
import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.get('MYSQL_HOST').required().asString(),
      port: env.get('MYSQL_PORT').required().asPortNumber(),
      username: env.get('MYSQL_USER').required().asString(),
      password: env.get('MYSQL_PASSWORD').asString(),
      database: env.get('MYSQL_DATABASE_NAME').required().asString(),
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
