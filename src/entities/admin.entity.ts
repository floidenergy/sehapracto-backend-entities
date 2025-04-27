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
import { Profile } from "./abstracts/profile.entity";

@Entity("admins")
export class Admin extends Profile {
  @PrimaryGeneratedColumn()
  adminId: number;

  @ManyToOne(() => Department, { onDelete: "NO ACTION" })
  @JoinColumn({ name: "departmentId" })
  department: Department;

  @Column({ default: false })
  isActive: boolean;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: "adminPermissions",
    joinColumn: {
      name: "adminId",
      referencedColumnName: "adminId",
    },
    inverseJoinColumn: {
      name: "permissionId",
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
