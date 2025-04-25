import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { APP_TYPE } from "../types";
import { BaseEntity } from "./abstracts/baseEntity.entity";

@Entity("api_keys")
export class ApiKey extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "enum", enum: APP_TYPE })
  type: APP_TYPE;

  @Column({ default: true })
  actif: boolean;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: 1 })
  version: number;
}
