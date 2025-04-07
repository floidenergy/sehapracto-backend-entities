var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/entities/user.entity.ts
import { Entity as Entity2, Column as Column2, JoinColumn, ManyToOne, BeforeInsert, BeforeUpdate } from "typeorm";

// src/entities/baseEntity.entity.ts
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
var BaseEntity = class {
  static {
    __name(this, "BaseEntity");
  }
  id;
  createdAt;
  updatedAt;
  deletedAt;
};
_ts_decorate([
  PrimaryGeneratedColumn(),
  _ts_metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
_ts_decorate([
  CreateDateColumn({
    type: "timestamp"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseEntity.prototype, "createdAt", void 0);
_ts_decorate([
  UpdateDateColumn({
    type: "timestamp"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseEntity.prototype, "updatedAt", void 0);
_ts_decorate([
  DeleteDateColumn({
    type: "timestamp"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseEntity.prototype, "deletedAt", void 0);

// src/entities/country.entity.ts
import { Entity, Column } from "typeorm";
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
var Country = class extends BaseEntity {
  static {
    __name(this, "Country");
  }
  name;
  name_ar;
  tel_code;
  customer_support;
  currency;
  currency_vs_dollar;
  timezone;
  flag_icon;
  is_active;
};
_ts_decorate2([
  Column({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Country.prototype, "name", void 0);
_ts_decorate2([
  Column({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Country.prototype, "name_ar", void 0);
_ts_decorate2([
  Column({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Country.prototype, "tel_code", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], Country.prototype, "customer_support", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], Country.prototype, "currency", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], Country.prototype, "currency_vs_dollar", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], Country.prototype, "timezone", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], Country.prototype, "flag_icon", void 0);
_ts_decorate2([
  Column({
    default: false
  }),
  _ts_metadata2("design:type", Boolean)
], Country.prototype, "is_active", void 0);
Country = _ts_decorate2([
  Entity("countries")
], Country);

// src/types/userType.enum.ts
var APP_TYPE = /* @__PURE__ */ function(APP_TYPE2) {
  APP_TYPE2["ADMIN"] = "ADMIN";
  APP_TYPE2["PATIENT"] = "PATIENT";
  APP_TYPE2["PHARMACY"] = "PHARMACY";
  APP_TYPE2["HCP"] = "HCP";
  APP_TYPE2["HOSPITAL"] = "HOSPITAL";
  APP_TYPE2["DOCTOR"] = "DOCTOR";
  return APP_TYPE2;
}({});

// src/entities/user.entity.ts
import { genSalt, hash, compare } from "bcrypt";
function _ts_decorate3(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate3, "_ts_decorate");
function _ts_metadata3(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata3, "_ts_metadata");
var User = class extends BaseEntity {
  static {
    __name(this, "User");
  }
  first_name;
  last_name;
  gender;
  birthdate;
  email;
  email_verified_at;
  phone;
  phone_verified_at;
  country;
  password;
  profile_img;
  // TODO: many to many
  types;
  // Hash password before saving
  async hashPassword() {
    if (!this.password) return;
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
  }
  // Validate password
  async validatePassword(plainPassword) {
    return compare(plainPassword, this.password);
  }
};
_ts_decorate3([
  Column2(),
  _ts_metadata3("design:type", String)
], User.prototype, "first_name", void 0);
_ts_decorate3([
  Column2(),
  _ts_metadata3("design:type", String)
], User.prototype, "last_name", void 0);
_ts_decorate3([
  Column2({
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "gender", void 0);
_ts_decorate3([
  Column2({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "birthdate", void 0);
_ts_decorate3([
  Column2({
    unique: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate3([
  Column2({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "email_verified_at", void 0);
_ts_decorate3([
  Column2({
    unique: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "phone", void 0);
_ts_decorate3([
  Column2({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "phone_verified_at", void 0);
_ts_decorate3([
  ManyToOne(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  JoinColumn({
    name: "country_id"
  }),
  _ts_metadata3("design:type", typeof Country === "undefined" ? Object : Country)
], User.prototype, "country", void 0);
_ts_decorate3([
  Column2({
    select: false
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate3([
  Column2({
    nullable: true,
    default: "avatar.png"
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "profile_img", void 0);
_ts_decorate3([
  Column2({
    type: "enum",
    enum: APP_TYPE,
    default: APP_TYPE.PATIENT
  }),
  _ts_metadata3("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], User.prototype, "types", void 0);
_ts_decorate3([
  BeforeInsert(),
  BeforeUpdate(),
  _ts_metadata3("design:type", Function),
  _ts_metadata3("design:paramtypes", []),
  _ts_metadata3("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = _ts_decorate3([
  Entity2("users")
], User);
export {
  User
};
