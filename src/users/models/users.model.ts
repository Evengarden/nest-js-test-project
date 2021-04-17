import { Column, Model, Table, BelongsToMany} from 'sequelize-typescript';
import { JSON } from 'sequelize';
import { UserGroups } from 'src/user-groups/user-groups.model';
import { Group } from '../../groups/models/groups.model';
import { Serializer } from 'node:v8';

@Table
export class User extends Model {
  @Column({allowNull: false})
  surname: string;

  @Column({allowNull: false})
  name: string;

  @Column({allowNull: true})
  patronymic: string;

  

  @Column({type:JSON,allowNull: true})
  friends;

  @BelongsToMany(() => Group,()=>UserGroups)
  groups: Group[]
}