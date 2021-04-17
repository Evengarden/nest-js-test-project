import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/models/users.model';
import { Repository } from 'typeorm';
import { AddUserInGroupDto } from './dto/add-user-in-group.dto';
import { Group } from './models/groups.model';

@Injectable()
export class GroupsService {
    constructor(@InjectRepository(Group)
    private groupsRepository: Repository<Group>, @InjectRepository(User) private usersRepository: Repository<User>) {

    }
    async getAllGroups(): Promise<Group[]> {
        return this.groupsRepository.find()
    }
    async getGroupUsers(id): Promise<User[]> {
        return ((await this.groupsRepository.findOne(id, { relations: ["users"] })).users)
    }
    async createGroup(groupDto): Promise<Group> {
        return this.groupsRepository.save(groupDto)
    }
    async updateGroup(id, updateGroupDto): Promise<Group> {
        return this.groupsRepository.save({ ...updateGroupDto, id: id })
    }
    async deleteGroup(id) {
        await this.groupsRepository.findOneOrFail(id)
        return this.groupsRepository.delete(id)
    }
    async addUserInGroup(id, addUserInGroupDto: AddUserInGroupDto): Promise<User[]> {
        let group = await this.groupsRepository.findOne(id)
        const promises = await addUserInGroupDto.users.map(element => this.usersRepository.findOne(element))
        const results = await Promise.all(promises)
        group.users = results
        this.groupsRepository.save(group)
        return (await this.groupsRepository.findOne(id)).users
    }
}
