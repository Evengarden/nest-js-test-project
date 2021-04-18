import { Field, ID, ObjectType } from '@nestjs/graphql'
import { GroupType } from 'src/groups/dto/group-graph.dto'

@ObjectType()
export class UserType {
    @Field(() => ID)
    id: string

    @Field()
    surname: string

    @Field()
    name: string

    @Field({ nullable: true })
    patronymic: string

    @Field(type => [UserType])
    friends: [UserType]

    @Field(type => [GroupType])
    groups: [GroupType]
}