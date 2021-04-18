import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AddFriendMongoDto } from "./dto/add-friend-mongo.dto";
import { UserInput } from "./dto/user-graph-input.dto";
import { UserType } from "./dto/user-graph.dto";
import { UserMongoService } from "./users-mongo.service";

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UserMongoService) { }
    @Query(() => [UserType])
    async users() {
        return this.userService.getAllUsers()
    }

    @Query(() => UserType)
    async userGroups(@Args('id') id: string) {
        return this.userService.getUserGroups(id)
    }

    @Query(() => UserType)
    async userFriends(@Args('id') id: string) {
        return this.userService.getFriends(id)
    }

    @Mutation(() => UserType)
    async createUser(@Args('input') input: UserInput) {
        return this.userService.createUser(input)
    }

    @Mutation(() => UserType)
    async updateUser(@Args('id') id: string, @Args('input') input: UserInput) {
        return this.userService.updateUser(input, id)
    }
    @Mutation(() => UserType)
    async deleteUser(@Args('id') id: string) {
        return this.userService.deleteUser(id)
    }
    @Mutation(() => UserType)
    async createFriends(@Args('id') id: string, @Args('input') input: AddFriendMongoDto) {
        return this.userService.createFriends(id, input)
    }
}