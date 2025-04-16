var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/entities/pharmacyItem.entity.ts
import { Column as Column8, Entity as Entity8, JoinColumn as JoinColumn5, ManyToOne as ManyToOne5, OneToOne as OneToOne4 } from "typeorm";

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
  requirePrescription;
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
], Product.prototype, "requirePrescription", void 0);
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
import { Column as Column7, Entity as Entity7, JoinColumn as JoinColumn4, ManyToOne as ManyToOne4, OneToOne as OneToOne3 } from "typeorm";

// src/entities/pharmacy.entity.ts
import { Column as Column5, CreateDateColumn as CreateDateColumn2, DeleteDateColumn as DeleteDateColumn2, Entity as Entity5, JoinColumn as JoinColumn2, OneToOne, PrimaryGeneratedColumn as PrimaryGeneratedColumn2, UpdateDateColumn as UpdateDateColumn2 } from "typeorm";

// src/entities/user.entity.ts
import { Entity as Entity4, Column as Column4, ManyToOne as ManyToOne2, JoinTable } from "typeorm";

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
  nameAr;
  telCode;
  customerSupport;
  currency;
  currencyVsDollar;
  timezone;
  flagIcon;
  isActive;
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
], Country.prototype, "nameAr", void 0);
_ts_decorate4([
  Column3({
    unique: true
  }),
  _ts_metadata4("design:type", String)
], Country.prototype, "telCode", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "customerSupport", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "currency", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "currencyVsDollar", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "timezone", void 0);
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Country.prototype, "flagIcon", void 0);
_ts_decorate4([
  Column3({
    default: false
  }),
  _ts_metadata4("design:type", Boolean)
], Country.prototype, "isActive", void 0);
Country = _ts_decorate4([
  Entity3("countries")
], Country);

// src/entities/user.entity.ts
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
  firstName;
  lastName;
  userName;
  gender;
  birthdate;
  email;
  emailVerifiedAt;
  phone;
  phoneVerifiedAt;
  country;
  profileImg;
};
_ts_decorate5([
  Column4(),
  _ts_metadata5("design:type", String)
], User.prototype, "firstName", void 0);
_ts_decorate5([
  Column4(),
  _ts_metadata5("design:type", String)
], User.prototype, "lastName", void 0);
_ts_decorate5([
  Column4({
    unique: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "userName", void 0);
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
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "emailVerifiedAt", void 0);
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
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "phoneVerifiedAt", void 0);
_ts_decorate5([
  ManyToOne2(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  JoinTable({
    name: "country_id"
  }),
  _ts_metadata5("design:type", typeof Country === "undefined" ? Object : Country)
], User.prototype, "country", void 0);
_ts_decorate5([
  Column4({
    nullable: true,
    default: "avatar.png"
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "profileImg", void 0);
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
  pharmacyId;
  pharmacyCreatedAt;
  pharmacyUpdatedAt;
  pharmacyDeletedAt;
  password;
  user;
};
_ts_decorate6([
  PrimaryGeneratedColumn2(),
  _ts_metadata6("design:type", Number)
], Pharmacy.prototype, "pharmacyId", void 0);
_ts_decorate6([
  CreateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyCreatedAt", void 0);
_ts_decorate6([
  UpdateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyUpdatedAt", void 0);
_ts_decorate6([
  DeleteDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyDeletedAt", void 0);
_ts_decorate6([
  Column5(),
  _ts_metadata6("design:type", String)
], Pharmacy.prototype, "password", void 0);
_ts_decorate6([
  OneToOne(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn2({
    name: "user_id"
  }),
  _ts_metadata6("design:type", typeof User === "undefined" ? Object : User)
], Pharmacy.prototype, "user", void 0);
Pharmacy = _ts_decorate6([
  Entity5("pharmacies")
], Pharmacy);

// src/entities/pharmacyBusiness.entity.ts
import { Column as Column6, Entity as Entity6, JoinColumn as JoinColumn3, ManyToOne as ManyToOne3, OneToOne as OneToOne2 } from "typeorm";
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
  JoinColumn3({
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
  JoinColumn3({
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
  pharmacyBusiness;
  profileImg;
  coverImg;
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
  JoinColumn4({
    name: "manager_id"
  }),
  _ts_metadata8("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "manager", void 0);
_ts_decorate8([
  ManyToOne4(() => PharmacyBusiness, {
    onDelete: "SET NULL"
  }),
  JoinColumn4({
    name: "pharmacy_business_id"
  }),
  _ts_metadata8("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "pharmacyBusiness", void 0);
_ts_decorate8([
  Column7({
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "profileImg", void 0);
_ts_decorate8([
  Column7({
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "coverImg", void 0);
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
  JoinColumn4({
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
  pharmacyStore;
};
_ts_decorate9([
  OneToOne4(() => Product, {
    onDelete: "CASCADE"
  }),
  JoinColumn5({
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
  JoinColumn5({
    name: "pharmacy_store_id"
  }),
  _ts_metadata9("design:type", typeof PharmacyStore === "undefined" ? Object : PharmacyStore)
], PharmacyItem.prototype, "pharmacyStore", void 0);
PharmacyItem = _ts_decorate9([
  Entity8("pharmacy_item")
], PharmacyItem);
export {
  PharmacyItem
};
