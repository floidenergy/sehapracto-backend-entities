import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

@Entity("sale_items")
export class SaleItem extends BaseEntity {
  @OneToOne(() => Product, { onDelete: "CASCADE" })
  product: Product;

  @OneToOne(() => Sale, { onDelete: "CASCADE" })
  sale: Sale;

  @Column({ unsigned: true })
  quantity: number;

  @Column({ unsigned: true })
  selling_price: number;
}
