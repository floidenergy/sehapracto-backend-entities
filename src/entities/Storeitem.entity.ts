import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Product } from "./product.entity";
import { PharmacyStore } from "./pharmacyStore.entity";

@Entity("store_item")
export class StoreItem extends BaseEntity {
  @OneToOne(() => Product, { onDelete: "CASCADE" })
  @JoinColumn({ name: "productId" })
  product: Product;

  @Column({ unsigned: true })
  quantity: number;

  @Column({ default: 0 })
  lowStockThreshold: number;

  @Column()
  overridenPrice: number;

  @Column()
  pharmacyStoreId: number;

  @Column({ nullable: true })
  priceOverride?: number;
}
