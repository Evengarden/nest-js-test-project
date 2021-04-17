import { Inject, Injectable, Logger } from '@nestjs/common';
import { async } from 'rxjs';
import { where } from 'sequelize';
import { Sequelize } from 'sequelize';
import { Group } from 'src/groups/models/groups.model';
import { AddFriendDto } from './dto/add-friend.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name)
    async getAllUsers(): Promise<User[]> {
        return User.findAll()
    }
    async getUserGroups(id): Promise<Group[]> {
        return (await User.findOne({ where: { id: id } })).groups
    }
    async createUser(userDto: CreateUserDto): Promise<User> {
        const newUser = new User(userDto)
        return newUser.save()
    }
    async updateUser(updateDto: UpdateUserDto, id): Promise<User> {
        return (await User.findOne({ where: { id: id } })).update(updateDto)
    }
    async deleteUser(id) {
        return (await User.findOne({ where: { id: id } })).destroy()
    }
    async getFriends(id):Promise<User>  {
        return (await User.findOne({ where: { id: id } }))
    }
    async createFriends(friendDto: AddFriendDto, id):Promise<User>  {

        this.logger.debug(this.getUsersInfo(friendDto))
        let result = await this.getUsersInfo(friendDto)
        var addedFriends = {
            friends:{

            }
        };
        result.forEach(function(element,i) {
            addedFriends.friends[i] = element
        });
        return (await User.findOne({ where: { id: id } })).update(addedFriends)
    }

    async getUsersInfo(friendDto) {
        const promises = friendDto.friends.map(element => User.findOne({ where: { id: element } }).then((u)=>u.toJSON()))

        let result = await Promise.all(promises)

        return result
    }
}
