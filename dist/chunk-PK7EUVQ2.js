import {
  BaseEntity,
  __name
} from "./chunk-U42KB4UB.js";

// src/entities/country.entity.ts
import { Entity, Column } from "typeorm";
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
_ts_decorate([
  Column({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "name", void 0);
_ts_decorate([
  Column({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "name_ar", void 0);
_ts_decorate([
  Column({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "tel_code", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], Country.prototype, "customer_support", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], Country.prototype, "currency", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], Country.prototype, "currency_vs_dollar", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], Country.prototype, "timezone", void 0);
_ts_decorate([
  Column(),
  _ts_metadata("design:type", String)
], Country.prototype, "flag_icon", void 0);
_ts_decorate([
  Column({
    default: false
  }),
  _ts_metadata("design:type", Boolean)
], Country.prototype, "is_active", void 0);
Country = _ts_decorate([
  Entity("countries")
], Country);

export {
  Country
};
