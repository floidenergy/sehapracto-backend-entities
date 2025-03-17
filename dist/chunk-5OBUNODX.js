import {
  User
} from "./chunk-T2IUKJ5J.js";
import {
  Department
} from "./chunk-TT2C6ERF.js";
import {
  BaseEntity,
  __name
} from "./chunk-U42KB4UB.js";

// src/entities/adminPermission.entity.ts
import { Column as Column2, Entity as Entity2, ManyToMany as ManyToMany2 } from "typeorm";

// src/entities/admin.entity.ts
import { Entity, Column, OneToOne, JoinColumn, ManyToMany } from "typeorm";
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var Admin = class extends BaseEntity {
  static {
    __name(this, "Admin");
  }
  department;
  is_active;
  user;
  permissions;
};
_ts_decorate([
  OneToOne(() => Department, {
    onDelete: "SET NULL"
  }),
  JoinColumn({
    name: "department_id"
  }),
  _ts_metadata("design:type", typeof Department === "undefined" ? Object : Department)
], Admin.prototype, "department", void 0);
_ts_decorate([
  Column({
    default: false
  }),
  _ts_metadata("design:type", Boolean)
], Admin.prototype, "is_active", void 0);
_ts_decorate([
  OneToOne(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn({
    name: "user_id"
  }),
  _ts_metadata("design:type", typeof User === "undefined" ? Object : User)
], Admin.prototype, "user", void 0);
_ts_decorate([
  ManyToMany(() => AdminPermission, (permission) => permission.admins),
  JoinColumn({
    name: "permissions_ids"
  }),
  _ts_metadata("design:type", Array)
], Admin.prototype, "permissions", void 0);
Admin = _ts_decorate([
  Entity("admins")
], Admin);

// src/entities/adminPermission.entity.ts
function _ts_decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate2, "_ts_decorate");
function _ts_metadata2(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata2, "_ts_metadata");
var AdminPermission = class extends BaseEntity {
  static {
    __name(this, "AdminPermission");
  }
  name;
  admins;
};
_ts_decorate2([
  Column2({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], AdminPermission.prototype, "name", void 0);
_ts_decorate2([
  ManyToMany2(() => Admin, (admin) => admin.permissions),
  _ts_metadata2("design:type", Array)
], AdminPermission.prototype, "admins", void 0);
AdminPermission = _ts_decorate2([
  Entity2("admin_permissions")
], AdminPermission);

export {
  AdminPermission,
  Admin
};
