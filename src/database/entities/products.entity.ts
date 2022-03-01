import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Stores } from './stores.entity';
import { Subcategories } from './subcategories.entity';

@Entity()
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  image: string;

  @Column({
    type: "decimal",
  })
  price: number;

  @Column({
    type: "boolean",
  })
  promotion: boolean;

  @Column({
    type: "decimal",
  })
  new_price: number;

  @Column("uuid")
  subcategoryId: string;

  @ManyToOne(() => Subcategories, (subcategory) => subcategory.products, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  subcategory: Subcategories;

  @Column("uuid")
  storeId: string;

  @ManyToOne(() => Stores, (store) => store.products, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  store: Stores;

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