import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService:GroupsService){

    }

    @Get()
    index() {
        this.groupsService.getAllGroups()
    }
    @Get(':id')
    getUsers() {
        this.groupsService.getGroupUsers()
    }
    @Post()
    create() {
        this.groupsService.createGroup()
    }
    @Put(':id')
    update() {
        this.groupsService.updateGroup()
    }
    @Delete(':id')
    delete() {
        this.groupsService.deleteGroup()
    }
    @Post()
    addUserInGroup(){
        this.groupsService.addUserInGroup()
    }

}
