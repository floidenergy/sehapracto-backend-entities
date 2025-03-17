import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user.entity";
import { BaseEntity } from "./baseEntity.entity";

@Entity("sessions")
export class Session extends BaseEntity {
  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  ipAddress: string;
}
