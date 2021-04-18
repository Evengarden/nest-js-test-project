import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupDocument } from './schemas/groups.schema';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { AddUserInGroupMongoDto } from './dto/add-user-in-group-mongo.dto';
import { User, UserDocument } from 'src/users/schemas/users.schema';


@Injectable()
export class GroupMongoService {
    constructor(@InjectModel(Group.name) private groupModel: Model<GroupDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async getAllGroups(): Promise<Group[]> {
        return this.groupModel.find().exec()
    }

    async getGroupUsers(id): Promise<Group> {
        return (await this.groupModel.findById(id)).populate("users").execPopulate();
    }

    async createGroup(groupDto: CreateGroupDto): Promise<Group> {
        const createdGroup = new this.groupModel(groupDto);
        return createdGroup.save();
    }

    async updateGroup(id, updateDto: UpdateGroupDto): Promise<Group> {
        return (await this.groupModel.findByIdAndUpdate(id, updateDto)).save()
    }

    async deleteGroup(id) {
        return this.groupModel.findByIdAndDelete(id)
    }

    async addUsersInGroup(id, usersDto: AddUserInGroupMongoDto): Promise<Group> {
        usersDto.users.forEach(element => {
            this.addUserInGroup(id, element)
        });

        return (await this.groupModel.findById(id)).populate("users").execPopulate()
    }

    async addUserInGroup(id, user) {
        let selectedUser = (await this.userModel.findById(user));
        let selectedGroup = (await this.groupModel.findById(id));
        if (selectedGroup.users.indexOf(selectedUser._id) != -1) throw new Error("Dublicate users in group!");
        if (selectedUser.groups.indexOf(selectedGroup._id) != -1) throw new Error("User has dublicate groups!");
        (await this.userModel.findByIdAndUpdate(user, { $push: { groups: selectedGroup._id } })).save();
        (await this.groupModel.findByIdAndUpdate(id, { $push: { users: selectedUser._id } })).save();


    }
}