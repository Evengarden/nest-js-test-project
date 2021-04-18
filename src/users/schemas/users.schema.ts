import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";
import { Document } from 'mongoose';
import { ObjectID } from "typeorm/driver/mongodb/typings";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    surname: string

    @Prop()
    name: string

    @Prop({ default: null })
    patronymic: string

    @Prop({ type: ObjectID, ref: User.name })
    friends: User[]

    @Prop()
    groups: [{
        type: ObjectId,
        ref: "Group"
    }]
}

export const UserSchema = SchemaFactory.createForClass(User);