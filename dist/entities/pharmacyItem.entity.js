var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/entities/pharmacyItem.entity.ts
import { Column as Column2, Entity as Entity2, JoinColumn, ManyToOne } from "typeorm";

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

// src/entities/pharmacyStore.entity.ts
import { Column, Entity } from "typeorm";
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
var PharmacyStore = class extends BaseEntity {
  static {
    __name(this, "PharmacyStore");
  }
  // @OneToOne(() => Pharmacy, { onDelete: "SET NULL" })
  // @JoinColumn({ name: "manager_id" })
  // manager: Pharmacy;
  // @ManyToOne(() => PharmacyBusiness, { onDelete: "SET NULL" })
  // @JoinColumn({ name: "pharmacy_business_id" })
  // pharmacyBusiness: Pharmacy;
  manager;
  pharmacyBusiness;
  profileImg;
  coverImg;
  name;
  address;
  // @ManyToOne(() => Country)
  // @JoinColumn({ name: "country_id" })
  // country: Country;
  country;
  phone;
  email;
};
_ts_decorate2([
  Column({
    type: "int",
    nullable: false,
    unique: true
  }),
  _ts_metadata2("design:type", Number)
], PharmacyStore.prototype, "manager", void 0);
_ts_decorate2([
  Column({
    type: "int",
    nullable: false,
    unique: true
  }),
  _ts_metadata2("design:type", Number)
], PharmacyStore.prototype, "pharmacyBusiness", void 0);
_ts_decorate2([
  Column({
    nullable: true
  }),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "profileImg", void 0);
_ts_decorate2([
  Column({
    nullable: true
  }),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "coverImg", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "name", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "address", void 0);
_ts_decorate2([
  Column({
    type: "int",
    nullable: false,
    unique: true
  }),
  _ts_metadata2("design:type", Number)
], PharmacyStore.prototype, "country", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "phone", void 0);
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "email", void 0);
PharmacyStore = _ts_decorate2([
  Entity("pharmacy_store")
], PharmacyStore);

// src/entities/pharmacyItem.entity.ts
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
var PharmacyItem = class extends BaseEntity {
  static {
    __name(this, "PharmacyItem");
  }
  // @OneToOne(() => Product, { onDelete: "CASCADE" })
  // @JoinColumn({ name: "product_id" })
  // product: Product;
  product;
  quantity;
  pharmacyStore;
};
_ts_decorate3([
  Column2({
    type: "int",
    nullable: false,
    unique: true
  }),
  _ts_metadata3("design:type", Number)
], PharmacyItem.prototype, "product", void 0);
_ts_decorate3([
  Column2({
    unsigned: true
  }),
  _ts_metadata3("design:type", Number)
], PharmacyItem.prototype, "quantity", void 0);
_ts_decorate3([
  ManyToOne(() => PharmacyStore, {
    onDelete: "CASCADE"
  }),
  JoinColumn({
    name: "pharmacy_store_id"
  }),
  _ts_metadata3("design:type", typeof PharmacyStore === "undefined" ? Object : PharmacyStore)
], PharmacyItem.prototype, "pharmacyStore", void 0);
PharmacyItem = _ts_decorate3([
  Entity2("pharmacy_item")
], PharmacyItem);
export {
  PharmacyItem
};
