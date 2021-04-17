import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AddFriendDto } from './dto/add-friend.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}
    @Get()
    index(){
        return this.usersService.getAllUsers();
    }
    @Get(':id')
    getGroups(@Param('id') id:number) {
        return this.usersService.getUserGroups(id);
    }
    @Post()
    create(@Body() userDto: CreateUserDto) {
        this.usersService.createUser(userDto);
    }
    @Put(':id')
    update(@Param('id') id:number,@Body() updateUserDto: UpdateUserDto) {
        this.usersService.updateUser(updateUserDto,id);
    }
    @Delete(':id')
    delete(@Param('id') id:number) {
        this.usersService.deleteUser(id);
    }
    @Get('friends/:id')
    getFriends(@Param('id') id:number) {
        this.usersService.getFriends(id);
    }
    @Put('friends/:id')
    AddFriends(@Body() friendDto: AddFriendDto,@Param('id') id:number) {
        this.usersService.createFriends(friendDto,id);
    }
}
