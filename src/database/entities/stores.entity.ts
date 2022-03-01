import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Persons } from './persons.entity';
import { Products } from './products.entity';

@Entity()
export class Stores extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  logo: string;

  @Column("uuid")
  personId: string;

  @ManyToOne(() => Persons, (person) => person.store, {
    onDelete: "CASCADE",
  })
  person: Persons;

  @OneToMany(() => Products, (product) => product.store)
  products: Products[];

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