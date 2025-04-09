import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Patient } from "./patient.entity";
import { Order } from "./order.entity";

@Entity("sales")
export class Sale extends BaseEntity {
  @ManyToOne(() => Patient)
  @JoinColumn({ name: "customer_id" })
  customer: Patient;

  @ManyToOne(() => Order)
  @JoinColumn({ name: "order_id" })
  order: Order;

  @Column({ unsigned: true })
  totalAmount: number;

  @Column()
  status: string;

  @Column()
  paymentMethode: string;

  @Column()
  saleDate: Date;

  @Column()
  items: string;
}
