import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript'
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { User } from './users/models/users.model';
import { Group } from './groups/models/groups.model';
import { UserGroups } from './user-groups/user-groups.model';

const sequelize = new Sequelize({
  database: 'nest-test',
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  storage: ':memory:',
  models: [User,Group,UserGroups]
})

sequelize.addModels([User,Group,UserGroups])
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest-test',
      autoLoadModels:true,
      synchronize:true,
      repositoryMode: true,
      models: [User,Group,UserGroups],
    }),
    GroupsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
