import { User } from "src/users/models/users.model";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, JoinColumn } from "typeorm";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string;


  @ManyToMany(type => User, user => user.groups, {
    cascade: true
  })
  @JoinTable({
    name: "user_groups",
  })
  @JoinColumn([
    {
      name: "group_id", referencedColumnName: "id"
    },
    {
      name: "user_id", referencedColumnName: "user.id"
    }
  ])
  users: User[]

}