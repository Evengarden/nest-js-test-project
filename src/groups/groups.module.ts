import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Group } from './models/groups.model';

@Module({
    imports: [SequelizeModule.forFeature([Group])]
})
@Module({
    imports: [SequelizeModule.forFeature([Group])],
    controllers: [GroupsController],
    providers: [
      GroupsService,
    ],
  })
export class GroupsModule {

}
