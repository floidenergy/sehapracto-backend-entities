import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";
import { BaseEntity } from "./baseEntity.entity";
import { APP_TYPE } from "../types";

@Entity("sessions")
export class Session extends BaseEntity {
  @Column({ nullable: true })
  accessKey: string;

  @Column({ nullable: true })
  refreshKey: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({ nullable: true })
  ipAddress: string;
  @Column({
    type: "enum",
    enum: APP_TYPE,
    default: APP_TYPE.PATIENT,
  })
  session_role: APP_TYPE;

  // CREATE TOKEN EVERY TIME U CREATE A SESSION
  @BeforeInsert()
  async createTokens(): Promise<void> {
    this.accessKey = uuid();
    this.refreshKey = uuid();
  }
}
