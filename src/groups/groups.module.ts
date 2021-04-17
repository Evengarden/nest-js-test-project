import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/models/users.model';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Group } from './models/groups.model';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), TypeOrmModule.forFeature([User])],
  controllers: [GroupsController],
  providers: [
    GroupsService,
  ],
})
export class GroupsModule {

}
