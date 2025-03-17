import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { Department } from "./department.entity";
import { BaseEntity } from "./baseEntity.entity";
import { AdminPermission } from "./adminPermission.entity";
import { User } from "./user.entity";

@Entity("admins")
export class Admin extends BaseEntity {
  @OneToOne(() => Department, { onDelete: "SET NULL" })
  @JoinColumn({ name: "department_id" })
  department: Department;

  @Column({ default: false })
  is_active: boolean;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToMany(() => AdminPermission, (permission) => permission.admins)
  @JoinColumn({ name: "permissions_ids" })
  permissions: AdminPermission[];
}
