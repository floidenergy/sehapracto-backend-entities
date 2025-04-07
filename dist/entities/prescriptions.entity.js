var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/entities/prescriptions.entity.ts
import { Entity as Entity9, JoinColumn as JoinColumn6, ManyToOne as ManyToOne5 } from "typeorm";

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

// src/entities/order.entity.ts
import { Column as Column6, Entity as Entity6, JoinColumn as JoinColumn4, ManyToOne as ManyToOne4, OneToMany as OneToMany2 } from "typeorm";

// src/entities/user.entity.ts
import { Entity as Entity2, Column as Column2, JoinColumn, ManyToOne, BeforeInsert, BeforeUpdate } from "typeorm";

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
  APP_TYPE2["CLIENT"] = "CLIENT";
  APP_TYPE2["PHARMACIE"] = "PHARMACIE";
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
    default: APP_TYPE.CLIENT
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

// src/entities/orderItems.entity.ts
import { Column as Column5, Entity as Entity5, JoinColumn as JoinColumn3, ManyToOne as ManyToOne3, OneToOne } from "typeorm";

// src/entities/product.entity.ts
import { Column as Column4, Entity as Entity4, JoinColumn as JoinColumn2, ManyToOne as ManyToOne2 } from "typeorm";

// src/entities/category.entity.ts
import { Column as Column3, Entity as Entity3, OneToMany } from "typeorm";
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
var Category = class extends BaseEntity {
  static {
    __name(this, "Category");
  }
  name;
  products;
};
_ts_decorate4([
  Column3(),
  _ts_metadata4("design:type", String)
], Category.prototype, "name", void 0);
_ts_decorate4([
  OneToMany(() => Product, (product) => product.category),
  _ts_metadata4("design:type", Array)
], Category.prototype, "products", void 0);
Category = _ts_decorate4([
  Entity3("categories")
], Category);

// src/entities/product.entity.ts
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
_ts_decorate5([
  Column4(),
  _ts_metadata5("design:type", String)
], Product.prototype, "name", void 0);
_ts_decorate5([
  Column4(),
  _ts_metadata5("design:type", String)
], Product.prototype, "sku", void 0);
_ts_decorate5([
  ManyToOne2(() => Category, {
    onDelete: "SET NULL"
  }),
  JoinColumn2({
    name: "category_id"
  }),
  _ts_metadata5("design:type", typeof Category === "undefined" ? Object : Category)
], Product.prototype, "category", void 0);
_ts_decorate5([
  Column4(),
  _ts_metadata5("design:type", Boolean)
], Product.prototype, "require_prescription", void 0);
_ts_decorate5([
  Column4({
    unsigned: true
  }),
  _ts_metadata5("design:type", Number)
], Product.prototype, "price", void 0);
_ts_decorate5([
  Column4(),
  _ts_metadata5("design:type", String)
], Product.prototype, "description", void 0);
Product = _ts_decorate5([
  Entity4("products")
], Product);

// src/entities/orderItems.entity.ts
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
var OrderItem = class extends BaseEntity {
  static {
    __name(this, "OrderItem");
  }
  order;
  quantity;
  price;
  product;
};
_ts_decorate6([
  ManyToOne3(() => Order, {
    onDelete: "CASCADE"
  }),
  JoinColumn3({
    name: "order_id"
  }),
  _ts_metadata6("design:type", typeof Order === "undefined" ? Object : Order)
], OrderItem.prototype, "order", void 0);
_ts_decorate6([
  Column5({
    unsigned: true
  }),
  _ts_metadata6("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
_ts_decorate6([
  Column5({
    unsigned: true
  }),
  _ts_metadata6("design:type", Number)
], OrderItem.prototype, "price", void 0);
_ts_decorate6([
  OneToOne(() => Product, {
    onDelete: "CASCADE"
  }),
  JoinColumn3({
    name: "product_id"
  }),
  _ts_metadata6("design:type", typeof Product === "undefined" ? Object : Product)
], OrderItem.prototype, "product", void 0);
OrderItem = _ts_decorate6([
  Entity5("order_items")
], OrderItem);

// src/types/orderStatus.ts
var OrderStatus = /* @__PURE__ */ function(OrderStatus2) {
  OrderStatus2["PENDING"] = "PENDING";
  OrderStatus2["CONFIRMED"] = "CONFIRMED";
  OrderStatus2["REJECTED"] = "REJECTED";
  OrderStatus2["CLOSED"] = "CLOSED";
  return OrderStatus2;
}({});

// src/entities/order.entity.ts
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
var Order = class extends BaseEntity {
  static {
    __name(this, "Order");
  }
  customer;
  status;
  price;
  orderItems;
};
_ts_decorate7([
  ManyToOne4(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn4({
    name: "customer_id"
  }),
  _ts_metadata7("design:type", typeof User === "undefined" ? Object : User)
], Order.prototype, "customer", void 0);
_ts_decorate7([
  Column6({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PENDING
  }),
  _ts_metadata7("design:type", typeof OrderStatus === "undefined" ? Object : OrderStatus)
], Order.prototype, "status", void 0);
_ts_decorate7([
  Column6({
    unsigned: true
  }),
  _ts_metadata7("design:type", Number)
], Order.prototype, "price", void 0);
_ts_decorate7([
  OneToMany2(() => OrderItem, (orderItem) => orderItem.order),
  _ts_metadata7("design:type", Array)
], Order.prototype, "orderItems", void 0);
Order = _ts_decorate7([
  Entity6("orders")
], Order);

// src/entities/patient.entity.ts
import { Column as Column7, CreateDateColumn as CreateDateColumn2, DeleteDateColumn as DeleteDateColumn2, Entity as Entity7, JoinColumn as JoinColumn5, OneToOne as OneToOne2, PrimaryGeneratedColumn as PrimaryGeneratedColumn2, UpdateDateColumn as UpdateDateColumn2 } from "typeorm";
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
var Patient = class {
  static {
    __name(this, "Patient");
  }
  patient_id;
  patient_createdAt;
  patient_updatedAt;
  patient_deletedAt;
  balance;
  password;
  blood_group;
  user;
};
_ts_decorate8([
  PrimaryGeneratedColumn2(),
  _ts_metadata8("design:type", Number)
], Patient.prototype, "patient_id", void 0);
_ts_decorate8([
  CreateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata8("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patient_createdAt", void 0);
_ts_decorate8([
  UpdateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata8("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patient_updatedAt", void 0);
_ts_decorate8([
  DeleteDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata8("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patient_deletedAt", void 0);
_ts_decorate8([
  Column7({
    default: 0,
    unsigned: true
  }),
  _ts_metadata8("design:type", Number)
], Patient.prototype, "balance", void 0);
_ts_decorate8([
  Column7(),
  _ts_metadata8("design:type", String)
], Patient.prototype, "password", void 0);
_ts_decorate8([
  Column7(),
  _ts_metadata8("design:type", String)
], Patient.prototype, "blood_group", void 0);
_ts_decorate8([
  OneToOne2(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn5({
    name: "user_id"
  }),
  _ts_metadata8("design:type", typeof User === "undefined" ? Object : User)
], Patient.prototype, "user", void 0);
Patient = _ts_decorate8([
  Entity7("patients")
], Patient);

// src/entities/attachements.entity.ts
import { Column as Column8, Entity as Entity8 } from "typeorm";
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
var Attachement = class extends BaseEntity {
  static {
    __name(this, "Attachement");
  }
  bucket_name;
  file_name;
  meme_type;
  size;
};
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "bucket_name", void 0);
_ts_decorate9([
  Column8({
    unique: true
  }),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "file_name", void 0);
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "meme_type", void 0);
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "size", void 0);
Attachement = _ts_decorate9([
  Entity8("attachements")
], Attachement);

// src/entities/prescriptions.entity.ts
function _ts_decorate10(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate10, "_ts_decorate");
function _ts_metadata10(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata10, "_ts_metadata");
var Prescription = class extends BaseEntity {
  static {
    __name(this, "Prescription");
  }
  order;
  customer;
  attachement;
};
_ts_decorate10([
  ManyToOne5(() => Order, {
    onDelete: "SET NULL"
  }),
  JoinColumn6({
    name: "order_id"
  }),
  _ts_metadata10("design:type", typeof Order === "undefined" ? Object : Order)
], Prescription.prototype, "order", void 0);
_ts_decorate10([
  ManyToOne5(() => Patient, {
    onDelete: "SET NULL"
  }),
  JoinColumn6({
    name: "customer_id"
  }),
  _ts_metadata10("design:type", typeof Patient === "undefined" ? Object : Patient)
], Prescription.prototype, "customer", void 0);
_ts_decorate10([
  ManyToOne5(() => Attachement, {
    onDelete: "SET NULL"
  }),
  JoinColumn6({
    name: "attachement_id"
  }),
  _ts_metadata10("design:type", typeof Attachement === "undefined" ? Object : Attachement)
], Prescription.prototype, "attachement", void 0);
Prescription = _ts_decorate10([
  Entity9("prescriptions")
], Prescription);
export {
  Prescription
};
