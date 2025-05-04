import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Product } from "./product.entity";
import { PharmacyStore } from "./pharmacyStore.entity";

@Entity("store_item")
export class StoreItem extends BaseEntity {
  @OneToOne(() => Product, { onDelete: "CASCADE" })
  @JoinColumn({ name: "product_id" })
  product: Product;

  @Column({ unsigned: true })
  quantity: number;

  @Column({ default: 0 })
  lowStockThreshold: number;

  @Column({ unsigned: true, nullable: true })
  overridenPrice?: number;

  @Column()
  pharmacyStoreId: number;
}
