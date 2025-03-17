import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Admin } from "../entities-old/admin.entity";
import { BaseEntity } from "./baseEntity.entity";

@Entity("departments")
export class Department extends BaseEntity {
  @Column({ unique: true })
  name: string;
}
