import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { User } from "./user.entity";
import { OrderItem } from "./orderItems.entity";
import { OrderStatus } from "../types";
import { Patient } from "./patient.entity";


@Entity("orders")
export class Order extends BaseEntity {
  @ManyToOne(() => Patient, { onDelete: "CASCADE" })
  @JoinColumn({ name: "patient_id" })
  patient: Patient;

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
