import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";

@Entity("permissions")
export class Permission extends BaseEntity {
  @Column({ unique: true })
  name: string;
}
