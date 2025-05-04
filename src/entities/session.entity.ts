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
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { APP_TYPE } from "../types";

@Entity("sessions")
export class Session extends BaseEntity {
  @Column({ nullable: true })
  accessKey: string;

  @Column({ nullable: true })
  refreshKey: string;

  @Column()
  userId: number;

  @Column({ nullable: true })
  ipAddress: string;
  @Column({
    type: "enum",
    enum: Object.values([
      APP_TYPE.ADMIN,
      APP_TYPE.PATIENT,
      APP_TYPE.HCP,
      APP_TYPE.PHARMACY,
      APP_TYPE.HOSPITAL,
      APP_TYPE.DOCTOR,
    ]),
    default: APP_TYPE.PATIENT,
  })
  sessionRole:
    | APP_TYPE.ADMIN
    | APP_TYPE.PATIENT
    | APP_TYPE.HCP
    | APP_TYPE.PHARMACY
    | APP_TYPE.HOSPITAL
    | APP_TYPE.DOCTOR;

  // CREATE TOKEN EVERY TIME U CREATE A SESSION
  @BeforeInsert()
  async createTokens(): Promise<void> {
    this.accessKey = uuid();
    this.refreshKey = uuid();
  }
}
