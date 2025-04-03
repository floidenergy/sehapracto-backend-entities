import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { User } from "./user.entity";
import { OrderItem } from "./orderItems.entity";

@Entity("orders")
export class Order extends BaseEntity {
  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "customer_id" })
  customer: User;

  @Column()
  status: string;

  @Column()
  price: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];
  //   prescription
}
