var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/entities/apikey.entity.ts
import { Column, Entity } from "typeorm";

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

// src/entities/apikey.entity.ts
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
var ApiKey = class extends BaseEntity {
  static {
    __name(this, "ApiKey");
  }
  key;
  type;
  actif;
  description;
  version;
};
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], ApiKey.prototype, "key", void 0);
_ts_decorate2([
  Column({
    type: "enum",
    enum: APP_TYPE
  }),
  _ts_metadata2("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], ApiKey.prototype, "type", void 0);
_ts_decorate2([
  Column({
    default: true
  }),
  _ts_metadata2("design:type", Boolean)
], ApiKey.prototype, "actif", void 0);
_ts_decorate2([
  Column({
    nullable: true
  }),
  _ts_metadata2("design:type", String)
], ApiKey.prototype, "description", void 0);
_ts_decorate2([
  Column({
    default: 1
  }),
  _ts_metadata2("design:type", Number)
], ApiKey.prototype, "version", void 0);
ApiKey = _ts_decorate2([
  Entity("api_keys")
], ApiKey);
export {
  ApiKey
};
