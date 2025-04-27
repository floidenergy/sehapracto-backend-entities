import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Order } from "./order.entity";
import { Patient } from "./patient.entity";
import { Attachement } from "./attachements.entity";

@Entity("prescriptions")
export class Prescription extends BaseEntity {
  @ManyToOne(() => Order, { onDelete: "SET NULL" })
  @JoinColumn({ name: "orderId" })
  order: Order;

  @Column({
    type: "int",
    nullable: false,
  })
  patient: number;

  @Column({
    type: "int",
    nullable: false,
  })
  attachement: number;
}
