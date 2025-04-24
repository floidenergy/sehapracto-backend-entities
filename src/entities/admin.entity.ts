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
  JoinTable,
  DeleteDateColumn,
} from "typeorm";
import { Department } from "./department.entity";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Permission } from "./adminPermission.entity";
import { User } from "./user.entity";

@Entity("admins")
export class Admin {
  @PrimaryGeneratedColumn()
  adminID: number;

  @ManyToOne(() => Department, { onDelete: "NO ACTION" })
  @JoinColumn({ name: "department_id" })
  department: Department;

  @Column({ default: false })
  isActive: boolean;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: "admin_permissions",
    joinColumn: {
      name: "admin_id",
      referencedColumnName: "adminID",
    },
    inverseJoinColumn: {
      name: "permission_id",
      referencedColumnName: "id",
    },
  })
  permissions: Permission[];

  @CreateDateColumn({ type: "timestamp" })
  readonly adminCreatedAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  readonly adminUpdatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  readonly adminDeletedAt!: Date;
}
