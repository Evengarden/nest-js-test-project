import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AddFriendMongoDto {
    @Field(type=> [String])
    friends:[string]
}