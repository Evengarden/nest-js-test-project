import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddFriendMongoDto } from './dto/add-friend-mongo.dto';


@Injectable()
export class UserMongoService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async getUserGroups(id): Promise<User> {
        return (await this.userModel.findById(id)).populate("groups")
    }

    async createUser(userDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
    }

    async updateUser(updateDto: UpdateUserDto, id): Promise<User> {
        return (await this.userModel.findByIdAndUpdate(id, updateDto)).save()
    }

    async deleteUser(id) {
        return this.userModel.findByIdAndDelete(id)
    }

    async getFriends(id): Promise<User> {
        return (await this.userModel.findById(id)).populate("friends").execPopulate()
    }

    async createFriends(id, friendDto: AddFriendMongoDto): Promise<User> {
        friendDto.friends.forEach(element => {
            this.addToFriendsArray(id, element)
        });

        return (await this.userModel.findById(id)).populate("friends").execPopulate()
    }

    async addToFriendsArray(id, friend) {
        if (id == friend) return;
        let selectedUser = (await this.userModel.findById(friend))._id;
        (await this.userModel.findByIdAndUpdate(id, { $push: { friends: selectedUser } })).save()
    }
}