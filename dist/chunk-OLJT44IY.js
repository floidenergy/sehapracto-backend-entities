import {
  User
} from "./chunk-T2IUKJ5J.js";
import {
  BaseEntity,
  __name
} from "./chunk-U42KB4UB.js";

// src/entities/session.entity.ts
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
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
var Session = class extends BaseEntity {
  static {
    __name(this, "Session");
  }
  accessToken;
  refreshToken;
  user;
  ipAddress;
};
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], Session.prototype, "accessToken", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], Session.prototype, "refreshToken", void 0);
_ts_decorate([
  OneToOne(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn({
    name: "user_id"
  }),
  _ts_metadata("design:type", typeof User === "undefined" ? Object : User)
], Session.prototype, "user", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], Session.prototype, "ipAddress", void 0);
Session = _ts_decorate([
  Entity("sessions")
], Session);

export {
  Session
};
