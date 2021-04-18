import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './schemas/groups.schema';
import { GroupMongoService } from './groups-mongo.service';
import { AddUserInGroupMongoDto } from './dto/add-user-in-group-mongo.dto';

@Controller('mongo/groups')
export class GroupsMongoController {
    constructor(private readonly groupsMongoService: GroupMongoService) { }

    @Get()
    index(): Promise<Group[]> {
        return this.groupsMongoService.getAllGroups()
    }
    @Get(':id')
    getUsers(@Param('id') id: string): Promise<Group> {
        return this.groupsMongoService.getGroupUsers(id)
    }
    @Post()
    create(@Body() createGroupDto: CreateGroupDto): Promise<Group> {
        return this.groupsMongoService.createGroup(createGroupDto)
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateGroupDto: CreateGroupDto): Promise<Group> {

        return this.groupsMongoService.updateGroup(id, updateGroupDto)
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.groupsMongoService.deleteGroup(id)
    }
    @Post(':id')
    addUserInGroup(@Param('id') id: string, @Body() addUserInGroup: AddUserInGroupMongoDto): Promise<Group> {
        return this.groupsMongoService.addUsersInGroup(id, addUserInGroup)
    }

}
