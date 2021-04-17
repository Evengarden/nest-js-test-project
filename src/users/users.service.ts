import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from 'src/groups/models/groups.model';
import { UserFriends } from 'src/user-friends/user-friends.model';
import { AddFriendDto } from './dto/add-friend.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>) {

    }
    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.find()
    }
    async getUserGroups(id): Promise<Group[]> {
        return ((await this.usersRepository.findOne(id, { relations: ["groups"] })).groups)
    }
    async createUser(userDto: CreateUserDto): Promise<User> {
        return await this.usersRepository.save(userDto)
    }
    async updateUser(updateDto: UpdateUserDto, id): Promise<User> {
        return await this.usersRepository.save({ ...updateDto, id: id })
    }
    async deleteUser(id) {
        await this.usersRepository.findOneOrFail(id)
        return this.usersRepository.delete(id)
    }
    async getFriends(id): Promise<User[]> {
        return ((await this.usersRepository.findOne(id, { relations: ["friends"] })).friends)
    }
    async createFriends(friendDto: AddFriendDto, id): Promise<User[]> {
        let user = await this.usersRepository.findOne(id)
        const promises = await friendDto.friends.map(element => this.usersRepository.findOne(element))
        const results = await Promise.all(promises)
        user.friends = results
        this.usersRepository.save(user)
        return (await this.usersRepository.findOne(id)).friends
    }
}
