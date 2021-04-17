import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Group } from 'src/groups/models/groups.model';
import { User } from 'src/users/models/users.model';

@Table
export class UserGroups extends Model {
    @ForeignKey(() => User)
    @Column
    userId: number
  
    @ForeignKey(() => Group)
    @Column
    groupId: number
}