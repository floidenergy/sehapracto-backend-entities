import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { User } from "./user.entity";

@Entity("patients")
export class Patient extends BaseEntity {
  @Column({ default: 0 })
  balance: number;

  @Column()
  password: string;

  @Column()
  blood_group: string;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
