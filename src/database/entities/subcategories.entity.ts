import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Categories } from './categories.entity';
import { Products } from './products.entity';

@Entity()
export class Subcategories extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("uuid")
  categoryId: string;

  @ManyToOne(() => Categories, (category) => category.categories, {
    onDelete: "CASCADE",
  })
  category: Categories;

  @OneToMany(() => Products, (product) => product.subcategory)
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