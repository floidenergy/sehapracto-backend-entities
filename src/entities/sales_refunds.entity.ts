import { BaseEntity, Column, Entity, OneToOne } from "typeorm";
import { Sale } from "./sale.entity";

@Entity("sales_refunds")
export class SalesRefunds extends BaseEntity {
  @Column({ unsigned: true })
  total: number;
  @Column()
  status: string;
  @Column()
  refunded_date: Date;
  @Column()
  reason: number;
  @OneToOne(() => Sale, {})
  sale: Sale;
}
