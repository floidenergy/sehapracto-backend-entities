import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Product } from "./product.entity";

@Entity("categories")
export class Category extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
