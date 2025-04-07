var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/entities/pharmacyItem.entity.ts
import { Column as Column8, Entity as Entity8, JoinColumn as JoinColumn6, ManyToOne as ManyToOne5, OneToOne as OneToOne4 } from "typeorm";

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

// src/entities/product.entity.ts
import { Column as Column2, Entity as Entity2, JoinColumn, ManyToOne } from "typeorm";

// src/entities/category.entity.ts
import { Column, Entity, OneToMany } from "typeorm";
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
var Category = class extends BaseEntity {
  static {
    __name(this, "Category");
  }
  name;
  products;
};
_ts_decorate2([
  Column(),
  _ts_metadata2("design:type", String)
], Category.prototype, "name", void 0);
_ts_decorate2([
  OneToMany(() => Product, (product) => product.category),
  _ts_metadata2("design:type", Array)
], Category.prototype, "products", void 0);
Category = _ts_decorate2([
  Entity("categories")
], Category);

// src/entities/product.entity.ts
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
var Product = class extends BaseEntity {
  static {
    __name(this, "Product");
  }
  name;
  sku;
  category;
  require_prescription;
  price;
  description;
};
_ts_decorate3([
  Column2(),
  _ts_metadata3("design:type", String)
], Product.prototype, "name", void 0);
_ts_decorate3([
  Column2(),
  _ts_metadata3("design:type", String)
], Product.prototype, "sku", void 0);
_ts_decorate3([
  ManyToOne(() => Category, {
    onDelete: "SET NULL"
  }),
  JoinColumn({
    name: "category_id"
  }),
  _ts_metadata3("design:type", typeof Category === "undefined" ? Object : Category)
], Product.prototype, "category", void 0);
_ts_decorate3([
  Column2(),
  _ts_metadata3("design:type", Boolean)
], Product.prototype, "require_prescription", void 0);
_ts_decorate3([
  Column2({
    unsigned: true
  }),
  _ts_metadata3("design:type", Number)
], Product.prototype, "price", void 0);
_ts_decorate3([
  Column2(),
  _ts_metadata3("design:type", String)
], Product.prototype, "description", void 0);
Product = _ts_decorate3([
  Entity2("products")
], Product);

// src/entities/pharmacyStore.entity.ts
import { Column as Column7, Entity as Entity7, JoinColumn as JoinColumn5, ManyToOne as ManyToOne4, OneToOne as OneToOne3 } from "typeorm";

// src/entities/pharmacy.entity.ts
import { Column as Column5, CreateDateColumn as CreateDateColumn2, DeleteDateColumn as DeleteDateColumn2, Entity as Entity5, JoinColumn as JoinColumn3, OneToOne, PrimaryGeneratedColumn as PrimaryGeneratedColumn2, UpdateDateColumn as UpdateDateColumn2 } from "typeorm";

// src/entities/user.entity.ts
import { Entity as Entity4, Column as Column4, JoinColumn as JoinColumn2, ManyToOne as ManyToOne2, BeforeInsert, BeforeUpdate } from "typeorm";

// src/entities/country.entity.ts
import { Entity as Entity3, Column as Column3 } from "typeorm";
function _ts_decorate4(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate4, "_ts_decorate");
function _ts_metadata4(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata4, "_ts_metadata");
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
_ts_decorate4([
  Column3({
    unique: true
  }),
  _ts_metadata4("design:type", String)
], Country.prototype, "name", void 0);
_ts_decorate4([
  Column3({
    unique: true
  }),
  _ts_metadata4("design:type", String)
], Country.prototype, "name_ar", void 0);
_ts_decorate4([
  Column3({
    unique: true
  }),
  _ts_metadata4("design:type", String)
], Country.prototype, "tel_code", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "customer_support", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "currency", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "currency_vs_dollar", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "timezone", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "flag_icon", void 0);
_ts_decorate4([
  Column3({
    default: false
  }),
  _ts_metadata4("design:type", Boolean)
], Country.prototype, "is_active", void 0);
Country = _ts_decorate4([
  Entity3("countries")
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
function _ts_decorate5(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate5, "_ts_decorate");
function _ts_metadata5(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata5, "_ts_metadata");
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
_ts_decorate5([
  Column4(),
  _ts_metadata5("design:type", String)
], User.prototype, "first_name", void 0);
_ts_decorate5([
  Column4(),
  _ts_metadata5("design:type", String)
], User.prototype, "last_name", void 0);
_ts_decorate5([
  Column4({
    nullable: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "gender", void 0);
_ts_decorate5([
  Column4({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "birthdate", void 0);
_ts_decorate5([
  Column4({
    unique: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate5([
  Column4({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "email_verified_at", void 0);
_ts_decorate5([
  Column4({
    unique: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "phone", void 0);
_ts_decorate5([
  Column4({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "phone_verified_at", void 0);
_ts_decorate5([
  ManyToOne2(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  JoinColumn2({
    name: "country_id"
  }),
  _ts_metadata5("design:type", typeof Country === "undefined" ? Object : Country)
], User.prototype, "country", void 0);
_ts_decorate5([
  Column4({
    select: false
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate5([
  Column4({
    nullable: true,
    default: "avatar.png"
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "profile_img", void 0);
_ts_decorate5([
  Column4({
    type: "enum",
    enum: APP_TYPE,
    default: APP_TYPE.PATIENT
  }),
  _ts_metadata5("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], User.prototype, "types", void 0);
_ts_decorate5([
  BeforeInsert(),
  BeforeUpdate(),
  _ts_metadata5("design:type", Function),
  _ts_metadata5("design:paramtypes", []),
  _ts_metadata5("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = _ts_decorate5([
  Entity4("users")
], User);

// src/entities/pharmacy.entity.ts
function _ts_decorate6(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate6, "_ts_decorate");
function _ts_metadata6(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata6, "_ts_metadata");
var Pharmacy = class {
  static {
    __name(this, "Pharmacy");
  }
  pharmacy_id;
  pharmacy_createdAt;
  pharmacy_updatedAt;
  pharmacy_deletedAt;
  password;
  user;
};
_ts_decorate6([
  PrimaryGeneratedColumn2(),
  _ts_metadata6("design:type", Number)
], Pharmacy.prototype, "pharmacy_id", void 0);
_ts_decorate6([
  CreateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacy_createdAt", void 0);
_ts_decorate6([
  UpdateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacy_updatedAt", void 0);
_ts_decorate6([
  DeleteDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacy_deletedAt", void 0);
_ts_decorate6([
  Column5(),
  _ts_metadata6("design:type", String)
], Pharmacy.prototype, "password", void 0);
_ts_decorate6([
  OneToOne(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn3({
    name: "user_id"
  }),
  _ts_metadata6("design:type", typeof User === "undefined" ? Object : User)
], Pharmacy.prototype, "user", void 0);
Pharmacy = _ts_decorate6([
  Entity5("pharmacies")
], Pharmacy);

// src/entities/pharmacyBusiness.entity.ts
import { Column as Column6, Entity as Entity6, JoinColumn as JoinColumn4, ManyToOne as ManyToOne3, OneToOne as OneToOne2 } from "typeorm";
function _ts_decorate7(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate7, "_ts_decorate");
function _ts_metadata7(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata7, "_ts_metadata");
var PharmacyBusiness = class extends BaseEntity {
  static {
    __name(this, "PharmacyBusiness");
  }
  owner;
  name;
  country;
  phone;
  email;
};
_ts_decorate7([
  OneToOne2(() => Pharmacy, {
    onDelete: "CASCADE"
  }),
  JoinColumn4({
    name: "owner_id"
  }),
  _ts_metadata7("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyBusiness.prototype, "owner", void 0);
_ts_decorate7([
  Column6(),
  _ts_metadata7("design:type", String)
], PharmacyBusiness.prototype, "name", void 0);
_ts_decorate7([
  ManyToOne3(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  JoinColumn4({
    name: "country_id"
  }),
  _ts_metadata7("design:type", typeof Country === "undefined" ? Object : Country)
], PharmacyBusiness.prototype, "country", void 0);
_ts_decorate7([
  Column6(),
  _ts_metadata7("design:type", String)
], PharmacyBusiness.prototype, "phone", void 0);
_ts_decorate7([
  Column6(),
  _ts_metadata7("design:type", String)
], PharmacyBusiness.prototype, "email", void 0);
PharmacyBusiness = _ts_decorate7([
  Entity6("pharmacy_business")
], PharmacyBusiness);

// src/entities/pharmacyStore.entity.ts
function _ts_decorate8(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate8, "_ts_decorate");
function _ts_metadata8(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata8, "_ts_metadata");
var PharmacyStore = class extends BaseEntity {
  static {
    __name(this, "PharmacyStore");
  }
  manager;
  pharmacy_business;
  profile_img;
  cover_img;
  name;
  address;
  country;
  phone;
  email;
};
_ts_decorate8([
  OneToOne3(() => Pharmacy, {
    onDelete: "SET NULL"
  }),
  JoinColumn5({
    name: "manager_id"
  }),
  _ts_metadata8("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "manager", void 0);
_ts_decorate8([
  ManyToOne4(() => PharmacyBusiness, {
    onDelete: "SET NULL"
  }),
  JoinColumn5({
    name: "pharmacy_business_id"
  }),
  _ts_metadata8("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "pharmacy_business", void 0);
_ts_decorate8([
  Column7({
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "profile_img", void 0);
_ts_decorate8([
  Column7({
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "cover_img", void 0);
_ts_decorate8([
  Column7(),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "name", void 0);
_ts_decorate8([
  Column7(),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "address", void 0);
_ts_decorate8([
  ManyToOne4(() => Country),
  JoinColumn5({
    name: "country_id"
  }),
  _ts_metadata8("design:type", typeof Country === "undefined" ? Object : Country)
], PharmacyStore.prototype, "country", void 0);
_ts_decorate8([
  Column7(),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "phone", void 0);
_ts_decorate8([
  Column7(),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "email", void 0);
PharmacyStore = _ts_decorate8([
  Entity7("pharmacy_store")
], PharmacyStore);

// src/entities/pharmacyItem.entity.ts
function _ts_decorate9(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate9, "_ts_decorate");
function _ts_metadata9(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata9, "_ts_metadata");
var PharmacyItem = class extends BaseEntity {
  static {
    __name(this, "PharmacyItem");
  }
  product;
  quantity;
  pharmacy_store;
};
_ts_decorate9([
  OneToOne4(() => Product, {
    onDelete: "CASCADE"
  }),
  JoinColumn6({
    name: "product_id"
  }),
  _ts_metadata9("design:type", typeof Product === "undefined" ? Object : Product)
], PharmacyItem.prototype, "product", void 0);
_ts_decorate9([
  Column8({
    unsigned: true
  }),
  _ts_metadata9("design:type", Number)
], PharmacyItem.prototype, "quantity", void 0);
_ts_decorate9([
  ManyToOne5(() => PharmacyStore, {
    onDelete: "CASCADE"
  }),
  JoinColumn6({
    name: "pharmacy_store_id"
  }),
  _ts_metadata9("design:type", typeof PharmacyStore === "undefined" ? Object : PharmacyStore)
], PharmacyItem.prototype, "pharmacy_store", void 0);
PharmacyItem = _ts_decorate9([
  Entity8("pharmacy_item")
], PharmacyItem);
export {
  PharmacyItem
};
