import { Column, Entity } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { APP_TYPE } from "../types";

@Entity("notifications")
export class Notification extends BaseEntity {
  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column({ type: "json", nullable: true })
  metadata: any; // for other informations like redirection link

  @Column({ default: false })
  isRead: boolean;

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
}
