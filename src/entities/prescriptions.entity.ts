import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Order } from "./order.entity";
import { Patient } from "./patient.entity";
import { Attachement } from "./attachements.entity";

@Entity("prescriptions")
export class Prescription extends BaseEntity {
  @ManyToOne(() => Order, { onDelete: "SET NULL" })
  @JoinColumn({ name: "order_id" })
  order: Order;

  @ManyToOne(() => Patient, { onDelete: "SET NULL" })
  @JoinColumn({ name: "customer_id" })
  customer: Patient;

  @ManyToOne(() => Attachement, { onDelete: "SET NULL" })
  @JoinColumn({ name: "attachement_id" })
  attachement: Attachement;
}
