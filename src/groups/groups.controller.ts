import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AddUserInGroupDto } from './dto/add-user-in-group.dto';
import { User } from 'src/users/models/users.model';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsService } from './groups.service';
import { Group } from './models/groups.model';
import { GroupInput } from './dto/group-input.dto';

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService: GroupsService) { }

    @Get()
    index(): Promise<Group[]> {
        return this.groupsService.getAllGroups()
    }
    @Get(':id')
    getUsers(@Param('id') id: number): Promise<User[]> {
        return this.groupsService.getGroupUsers(id)
    }
    @Post()
    create(@Body() createGroupDto: GroupInput): Promise<Group> {
        return this.groupsService.createGroup(createGroupDto)
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateGroupDto: GroupInput): Promise<Group> {

        return this.groupsService.updateGroup(id, updateGroupDto)
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.groupsService.deleteGroup(id)
    }
    @Post(':id')
    addUserInGroup(@Param('id') id: number, @Body() addUserInGroup: AddUserInGroupDto): Promise<User[]> {
        return this.groupsService.addUserInGroup(id, addUserInGroup)
    }

}
