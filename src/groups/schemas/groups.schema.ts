import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { User } from "src/users/schemas/users.schema";
import { ObjectID } from "typeorm";

export type GroupDocument = Group & Document;

@Schema()
export class Group {
    @Prop()
    name: string

    @Prop({ type: ObjectID, ref: User.name })
    users: User[]
}

export const GroupSchema = SchemaFactory.createForClass(Group);