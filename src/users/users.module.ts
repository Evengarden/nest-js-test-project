import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/users.model';
import { User as UserMongo, UserSchema } from './schemas/users.schema';
import { UsersMongoController } from './users-mongo.controller';
import { UserMongoService } from './users-mongo.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MongooseModule.forFeature([{ name: UserMongo.name, schema: UserSchema }])],
  controllers: [UsersController, UsersMongoController],
  providers: [
    UsersService,
    UserMongoService
  ]
})
export class UsersModule { }