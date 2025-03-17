import {
  Country
} from "./chunk-PK7EUVQ2.js";
import {
  BaseEntity,
  __name
} from "./chunk-U42KB4UB.js";

// src/entities/user.entity.ts
import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
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
};
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], User.prototype, "first_name", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], User.prototype, "last_name", void 0);
_ts_decorate([
  Column({
    nullable: true
  }),
  _ts_metadata("design:type", String)
], User.prototype, "gender", void 0);
_ts_decorate([
  Column({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "birthdate", void 0);
_ts_decorate([
  Column({
    unique: true
  }),
  _ts_metadata("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate([
  Column({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata("design:type", String)
], User.prototype, "email_verified_at", void 0);
_ts_decorate([
  Column({
    unique: true
  }),
  _ts_metadata("design:type", String)
], User.prototype, "phone", void 0);
_ts_decorate([
  Column({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata("design:type", String)
], User.prototype, "phone_verified_at", void 0);
_ts_decorate([
  ManyToOne(() => Country, {
    nullable: false,
    onDelete: "SET NULL"
  }),
  JoinColumn({
    name: "country_id"
  }),
  _ts_metadata("design:type", typeof Country === "undefined" ? Object : Country)
], User.prototype, "country", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate([
  Column({
    nullable: true,
    default: "avatar.png"
  }),
  _ts_metadata("design:type", String)
], User.prototype, "profile_img", void 0);
User = _ts_decorate([
  Entity("users")
], User);

export {
  User
};
