import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Group } from 'src/groups/models/groups.model';
import { AddFriendDto } from './dto/add-friend.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInput } from './dto/user-graph-input.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    index(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }
    @Get(':id')
    getGroups(@Param('id') id: number): Promise<Group[]> {
        return this.usersService.getUserGroups(id);
    }
    @Post()
    create(@Body() userDto: UserInput): Promise<User> {
        return this.usersService.createUser(userDto);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.updateUser(updateUserDto, id);
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.usersService.deleteUser(id);
    }
    @Get('friends/:id')
    getFriends(@Param('id') id: number): Promise<User[]> {
        return this.usersService.getFriends(id);
    }
    @Post('friends/:id')
    AddFriends(@Body() friendDto: AddFriendDto, @Param('id') id: number): Promise<User[]> {
        return this.usersService.createFriends(friendDto, id);
    }
}
