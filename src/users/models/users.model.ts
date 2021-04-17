import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, JoinColumn } from "typeorm";
import { Group } from '../../groups/models/groups.model';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  surname: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  patronymic: string;

  @ManyToMany(type => User, users => users.friends)
  @JoinTable({
    name: "users_friends",
  })
  @JoinColumn([
    {
      name: "user_id", referencedColumnName: "user.id"
    },
    {
      name: "friend_id", referencedColumnName: "user.id"
    }
  ])
  friends: User[]

  @ManyToMany(type => Group, group => group.users)
  groups: Group[]
}