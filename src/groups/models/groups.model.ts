import { Column, Model, Table,BelongsToMany } from 'sequelize-typescript';
import { UserGroups } from 'src/user-groups/user-groups.model';
import { User } from '../../users/models/users.model';

@Table
export class Group extends Model {
  @Column
  name: string;

  @BelongsToMany(() => User,()=>UserGroups)
  users: User[]

}