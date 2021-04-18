import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/models/users.model';
import { User as UserMongo, UserSchema } from '../users/schemas/users.schema';
import { GroupsMongoController } from './groups-mongo.controller';
import { GroupMongoService } from './groups-mongo.service';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Group } from './models/groups.model';
import { Group as GroupMongo, GroupSchema } from './schemas/groups.schema';

import { GroupsResolver } from './groups.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), TypeOrmModule.forFeature([User]),
  MongooseModule.forFeature([{ name: GroupMongo.name, schema: GroupSchema }]),
  MongooseModule.forFeature([{ name: UserMongo.name, schema: UserSchema }])],
  controllers: [GroupsController, GroupsMongoController],
  providers: [
    GroupsService,
    GroupMongoService,
    GroupsResolver
  ],
})
export class GroupsModule {

}
