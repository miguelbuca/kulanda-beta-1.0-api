import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Users } from './users.entity';

@Entity()
export class WishList extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  keyword: string;

  @Column({
    type: "decimal",
  })
  min_price: number;

  @Column({
    type: "decimal",
  })
  max_price: number;

  @Column("uuid")
  userId: string;

  @OneToOne(() => Users, (user) => user.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: Users;

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