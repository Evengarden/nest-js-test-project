import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AddFriendMongoDto } from './dto/add-friend-mongo.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInput } from './dto/user-graph-input.dto';
import { User } from './schemas/users.schema';
import { UserMongoService } from './users-mongo.service';

@Controller('mongo/users')
export class UsersMongoController {
    constructor(private readonly usersMongoService: UserMongoService) { }
    @Get()
    index(): Promise<User[]> {
        return this.usersMongoService.getAllUsers();
    }
    @Get(':id')
    getGroups(@Param('id') id: string): Promise<User> {
        return this.usersMongoService.getUserGroups(id);
    }
    @Post()
    create(@Body() userDto: UserInput): Promise<User> {
        return this.usersMongoService.createUser(userDto);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersMongoService.updateUser(updateUserDto, id);
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersMongoService.deleteUser(id);
    }
    @Get('friends/:id')
    getFriends(@Param('id') id: string): Promise<User> {
        return this.usersMongoService.getFriends(id);
    }
    @Post('friends/:id')
    AddFriends(@Body() addFriendDto: AddFriendMongoDto, @Param('id') id: string): Promise<User> {
        return this.usersMongoService.createFriends(id, addFriendDto);
    }
}
