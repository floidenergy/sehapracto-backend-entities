import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Admin } from "./admin.entity";


@Entity("admin_permissions")
export class AdminPermission extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Admin, (admin) => admin.permissions)
  admins: Admin[];
}
