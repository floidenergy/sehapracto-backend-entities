import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Category } from "./category.entity";

@Entity("products")
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  sku: string;
  @ManyToOne(() => Category, { onDelete: "CASCADE" })
  @JoinColumn({ name: "category_id" })
  category: Category;
  @Column()
  require_prescription: boolean;
  @Column()
  price: number;
  @Column()
  description: string;
}
