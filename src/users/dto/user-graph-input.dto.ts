import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class UserInput {
    @Field()
    surname: string

    @Field()
    name: string

    @Field({ nullable: true })
    patronymic: string
}