import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Category } from "./category.entity";

@Entity("products")
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  pharmacyId: number;

  @Column()
  sku: string;
  @ManyToOne(() => Category, { onDelete: "SET NULL" })
  @JoinColumn({ name: "category_id" })
  category: Category;
  @Column()
  requirePrescription: boolean;
  @Column()
  description: string;
  // @Column({ unsigned: true })
  // price: number;
}
