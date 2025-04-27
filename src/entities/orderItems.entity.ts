import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Order } from "./order.entity";
import { Product } from "./product.entity";

@Entity("order_items")
export class OrderItem extends BaseEntity {
  @ManyToOne(() => Order, { onDelete: "CASCADE" })
  @JoinColumn({ name: "orderId" })
  order: Order;

  @Column({ unsigned: true })
  quantity: number;

  @Column({ unsigned: true })
  price: number;

  @Column({
    type: "int",
    nullable: false,
  })
  product: number;
}
