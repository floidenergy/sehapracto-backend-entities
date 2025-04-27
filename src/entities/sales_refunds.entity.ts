import { Column, Entity, OneToOne } from "typeorm";
import { Sale } from "./sale.entity";
import { BaseEntity } from "./abstracts/baseEntity.entity";

@Entity("sales_refunds")
export class SalesRefunds extends BaseEntity {
  @Column({ unsigned: true })
  total: number;
  @Column()
  status: string;
  @Column()
  refundedDate: Date;
  @Column()
  reason: number;
  @OneToOne(() => Sale, {})
  sale: Sale;
}
