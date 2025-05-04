import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { User } from "./user.entity";
import { OrderItem } from "./orderItems.entity";
import { OrderStatus, OrderType, PaymentMethod } from "../types";
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
  @Column({
    type: "enum",
    enum: OrderType,
    default: OrderType.DELIVERY,
  })
  orderType: OrderType;
  @Column({
    type: "enum",
    enum: PaymentMethod,
    default: PaymentMethod.CASH,
  })
  paymentMethod: PaymentMethod;

  @Column({ unsigned: true })
  price: number;

  // @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  // orderItems: OrderItem[];

  @Column()
  adress: string;
  @Column()
  phone: string;
  //   prescription
}
