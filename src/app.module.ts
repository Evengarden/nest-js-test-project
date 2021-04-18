import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { User } from './users/models/users.model';
import { Group } from './groups/models/groups.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest-test',
      entities: [User, Group],
      synchronize: true,
    }),
    MongooseModule.forRoot(`mongodb+srv://nest:nest@cluster0.fjeuh.mongodb.net/nest-test?retryWrites=true&w=majority`),
    GraphQLModule.forRoot({
      autoSchemaFile:'schema.gql'
    }),
    GroupsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
