import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AddUserInGroupMongoDto } from "./dto/add-user-in-group-mongo.dto";
import { GroupType } from "./dto/group-graph.dto";
import { GroupInput } from "./dto/group-input.dto";
import { GroupMongoService } from "./groups-mongo.service";

@Resolver()
export class GroupsResolver {
    constructor(private readonly groupService: GroupMongoService) { }
    @Query(() => [GroupType])
    async groups() {
        return this.groupService.getAllGroups()
    }

    @Query(() => GroupType)
    async groupUsers(@Args('id') id: string) {
        return this.groupService.getGroupUsers(id)
    }

    @Mutation(() => GroupType)
    async createGroup(@Args('input') input: GroupInput) {
        return this.groupService.createGroup(input)
    }

    @Mutation(() => GroupType)
    async updateGroup(@Args('id') id: string, @Args('input') input: GroupInput) {
        return this.groupService.updateGroup(id, input)
    }
    @Mutation(() => GroupType)
    async deleteGroup(@Args('id') id: string) {
        return this.groupService.deleteGroup(id)
    }
    @Mutation(() => GroupType)
    async addUserInGroup(@Args('id') id: string, @Args('input') input: AddUserInGroupMongoDto) {
        return this.groupService.addUsersInGroup(id, input)
    }
}