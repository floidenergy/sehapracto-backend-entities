import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

@Entity("sale_items")
export class SaleItem extends BaseEntity {
  @Column({
    type: "int",
    nullable: false,
  })
  product: number;

  @OneToOne(() => Sale, { onDelete: "CASCADE" })
  sale: Sale;

  @Column({ unsigned: true })
  quantity: number;

  @Column({ unsigned: true })
  sellingPrice: number;
}
