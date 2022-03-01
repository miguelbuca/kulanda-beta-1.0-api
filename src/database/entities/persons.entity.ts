import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Stores } from './stores.entity';
import { Users } from './users.entity';

@Entity()
export class Persons extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  fullname: string;

  @Column({
    type: "enum",
    enum: ["colective", "singular"],
  })
  type: string;

  @Column()
  website: string;

  @Column()
  profile_image: string;

  @Column("uuid")
  userId: string;

  @OneToOne(() => Users, (user) => user.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: Users;

  @OneToMany(() => Stores, (store) => store.person)
  store: Stores[];

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