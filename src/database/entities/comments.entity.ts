import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Interactions } from './interactions.entity';
import { Users } from './users.entity';

@Entity()
export class Comments extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  message: string;

  @Column("uuid")
  interactionId: string;

  @ManyToOne(() => Interactions, (interaction) => interaction.comments, {
    onDelete: "CASCADE",
  })
  interaction: Interactions;

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