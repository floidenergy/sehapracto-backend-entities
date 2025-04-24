import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Product } from "./product.entity";
import { PharmacyStore } from "./pharmacyStore.entity";

@Entity("pharmacy_item")
export class PharmacyItem extends BaseEntity {
  @OneToOne(() => Product, { onDelete: "CASCADE" })
  @JoinColumn({ name: "product_id" })
  product: Product;

  @Column({ unsigned: true })
  quantity: number;

  @Column()
  pharmacyStoreId: number;
}
