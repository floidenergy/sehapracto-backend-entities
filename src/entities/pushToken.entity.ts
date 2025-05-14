import { Column, Entity } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { APP_TYPE } from "../types";

export enum PLATFORM {
  ANDROID = "ANDROID",
  IOS = "IOS",
  WEB = "WEB",
}

@Entity("push_tokens")
export class PushToken extends BaseEntity {
  @Column()
  userId: number;

  @Column({ unique: true })
  token: string;

  @Column({
    type: "enum",
    enum: Object.values(PLATFORM),
  })
  platform: PLATFORM;

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
  })
  profile: APP_TYPE;

  @Column()
  deviceInfo: string;

  @Column({ default: new Date() })
  lastSeen: Date;
}
