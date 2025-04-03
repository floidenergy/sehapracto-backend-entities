import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Patient } from "./patient.entity";
import { Order } from "./order.entity";

@Entity("sales")
export class Sale extends BaseEntity {
  @ManyToOne(() => Patient, { onDelete: "CASCADE" })
  @JoinColumn({ name: "customer_id" })
  customer: Patient;

  @ManyToOne(() => Order, { onDelete: "CASCADE" })
  @JoinColumn({ name: "order_id" })
  order: Order;

  @Column()
  total_amount: number;

  @Column()
  status: string;

  @Column()
  payment_methode: string;

  @Column()
  sale_date: Date;

  @Column()
  items: string;
}
