import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { User } from "./user.entity";

@Entity("pharmacies")
export class Pharmacy extends BaseEntity {
  @Column()
  password: string;
  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
