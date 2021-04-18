import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserType } from 'src/users/dto/user-graph.dto'

@ObjectType()
export class GroupType {
    @Field(() => ID)
    id: string

    @Field()
    name: string

    @Field(type => [UserType])
    users: [UserType]
}