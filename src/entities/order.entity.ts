import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { User } from "./user.entity";
import { OrderItem } from "./orderItems.entity";
import { OrderStatus } from "../types";
import { Patient } from "./patient.entity";

@Entity("orders")
export class Order extends BaseEntity {
  @Column({
    type: "int",
    nullable: false,
  })
  patient: number;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column({ unsigned: true })
  price: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];
  //   prescription
}
