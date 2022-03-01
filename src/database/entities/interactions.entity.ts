import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Comments } from './comments.entity';
import { Users } from './users.entity';

@Entity()
export class Interactions extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    type: "boolean",
    default: false,
  })
  liked: boolean;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => Users, (user) => user.store, {
    onDelete: "CASCADE",
  })
  user: Users;

  @OneToMany(() => Comments, (comment) => comment.interaction)
  comments: Interactions[];

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    default: () => "now()",
  })
  updatedAt: Date | null;
}