import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Product } from "./product.entity";
import { PharmacyStore } from "./pharmacyStore.entity";

@Entity("pharmacy_item")
export class PharmacyItem extends BaseEntity {
  // @OneToOne(() => Product, { onDelete: "CASCADE" })
  // @JoinColumn({ name: "product_id" })
  // product: Product;
  @Column({
    type: "int",
    nullable: false,
    unique: true,
  })
  product: number;

  @Column({ unsigned: true })
  quantity: number;
  @Column({ unsigned: true })
  price: number;
  @Column()
  pharmacyStoreId: number;
}
