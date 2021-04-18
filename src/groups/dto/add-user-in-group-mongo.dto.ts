import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AddUserInGroupMongoDto {
    @Field(type=> [String])
    users:[string]
}