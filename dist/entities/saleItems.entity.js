var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/entities/saleItems.entity.ts
import { Column as Column9, Entity as Entity9, OneToOne as OneToOne3 } from "typeorm";

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

// src/entities/sale.entity.ts
import { Column as Column8, Entity as Entity8, JoinColumn as JoinColumn6, ManyToOne as ManyToOne5 } from "typeorm";

// src/entities/patient.entity.ts
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
  password;
  profileImg;
  // TODO: many to many
  // @Column({ type: "enum", enum: APP_TYPE, default: APP_TYPE.PATIENT })
  // types: APP_TYPE;
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
], User.prototype, "profileImg", void 0);
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

// src/entities/patient.entity.ts
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
var Patient = class {
  static {
    __name(this, "Patient");
  }
  patientId;
  patientCreatedAt;
  patientUpdatedAt;
  patientDeletedAt;
  balance;
  password;
  bloodGroup;
  user;
};
_ts_decorate6([
  PrimaryGeneratedColumn2(),
  _ts_metadata6("design:type", Number)
], Patient.prototype, "patientId", void 0);
_ts_decorate6([
  CreateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patientCreatedAt", void 0);
_ts_decorate6([
  UpdateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patientUpdatedAt", void 0);
_ts_decorate6([
  DeleteDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patientDeletedAt", void 0);
_ts_decorate6([
  Column5({
    default: 0,
    unsigned: true
  }),
  _ts_metadata6("design:type", Number)
], Patient.prototype, "balance", void 0);
_ts_decorate6([
  Column5(),
  _ts_metadata6("design:type", String)
], Patient.prototype, "password", void 0);
_ts_decorate6([
  Column5(),
  _ts_metadata6("design:type", String)
], Patient.prototype, "bloodGroup", void 0);
_ts_decorate6([
  OneToOne(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn3({
    name: "user_id"
  }),
  _ts_metadata6("design:type", typeof User === "undefined" ? Object : User)
], Patient.prototype, "user", void 0);
Patient = _ts_decorate6([
  Entity5("patients")
], Patient);

// src/entities/order.entity.ts
import { Column as Column7, Entity as Entity7, JoinColumn as JoinColumn5, ManyToOne as ManyToOne4, OneToMany as OneToMany2 } from "typeorm";

// src/entities/orderItems.entity.ts
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
var OrderItem = class extends BaseEntity {
  static {
    __name(this, "OrderItem");
  }
  order;
  quantity;
  price;
  product;
};
_ts_decorate7([
  ManyToOne3(() => Order, {
    onDelete: "CASCADE"
  }),
  JoinColumn4({
    name: "order_id"
  }),
  _ts_metadata7("design:type", typeof Order === "undefined" ? Object : Order)
], OrderItem.prototype, "order", void 0);
_ts_decorate7([
  Column6({
    unsigned: true
  }),
  _ts_metadata7("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
_ts_decorate7([
  Column6({
    unsigned: true
  }),
  _ts_metadata7("design:type", Number)
], OrderItem.prototype, "price", void 0);
_ts_decorate7([
  OneToOne2(() => Product, {
    onDelete: "CASCADE"
  }),
  JoinColumn4({
    name: "product_id"
  }),
  _ts_metadata7("design:type", typeof Product === "undefined" ? Object : Product)
], OrderItem.prototype, "product", void 0);
OrderItem = _ts_decorate7([
  Entity6("order_items")
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
var Order = class extends BaseEntity {
  static {
    __name(this, "Order");
  }
  patient;
  status;
  price;
  orderItems;
};
_ts_decorate8([
  ManyToOne4(() => Patient, {
    onDelete: "CASCADE"
  }),
  JoinColumn5({
    name: "patient_id"
  }),
  _ts_metadata8("design:type", typeof Patient === "undefined" ? Object : Patient)
], Order.prototype, "patient", void 0);
_ts_decorate8([
  Column7({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PENDING
  }),
  _ts_metadata8("design:type", typeof OrderStatus === "undefined" ? Object : OrderStatus)
], Order.prototype, "status", void 0);
_ts_decorate8([
  Column7({
    unsigned: true
  }),
  _ts_metadata8("design:type", Number)
], Order.prototype, "price", void 0);
_ts_decorate8([
  OneToMany2(() => OrderItem, (orderItem) => orderItem.order),
  _ts_metadata8("design:type", Array)
], Order.prototype, "orderItems", void 0);
Order = _ts_decorate8([
  Entity7("orders")
], Order);

// src/entities/sale.entity.ts
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
var Sale = class extends BaseEntity {
  static {
    __name(this, "Sale");
  }
  customer;
  order;
  totalAmount;
  status;
  paymentMethode;
  saleDate;
  items;
};
_ts_decorate9([
  ManyToOne5(() => Patient),
  JoinColumn6({
    name: "customer_id"
  }),
  _ts_metadata9("design:type", typeof Patient === "undefined" ? Object : Patient)
], Sale.prototype, "customer", void 0);
_ts_decorate9([
  ManyToOne5(() => Order),
  JoinColumn6({
    name: "order_id"
  }),
  _ts_metadata9("design:type", typeof Order === "undefined" ? Object : Order)
], Sale.prototype, "order", void 0);
_ts_decorate9([
  Column8({
    unsigned: true
  }),
  _ts_metadata9("design:type", Number)
], Sale.prototype, "totalAmount", void 0);
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Sale.prototype, "status", void 0);
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Sale.prototype, "paymentMethode", void 0);
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", typeof Date === "undefined" ? Object : Date)
], Sale.prototype, "saleDate", void 0);
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Sale.prototype, "items", void 0);
Sale = _ts_decorate9([
  Entity8("sales")
], Sale);

// src/entities/saleItems.entity.ts
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
var SaleItem = class extends BaseEntity {
  static {
    __name(this, "SaleItem");
  }
  product;
  sale;
  quantity;
  sellingPrice;
};
_ts_decorate10([
  OneToOne3(() => Product, {
    onDelete: "CASCADE"
  }),
  _ts_metadata10("design:type", typeof Product === "undefined" ? Object : Product)
], SaleItem.prototype, "product", void 0);
_ts_decorate10([
  OneToOne3(() => Sale, {
    onDelete: "CASCADE"
  }),
  _ts_metadata10("design:type", typeof Sale === "undefined" ? Object : Sale)
], SaleItem.prototype, "sale", void 0);
_ts_decorate10([
  Column9({
    unsigned: true
  }),
  _ts_metadata10("design:type", Number)
], SaleItem.prototype, "quantity", void 0);
_ts_decorate10([
  Column9({
    unsigned: true
  }),
  _ts_metadata10("design:type", Number)
], SaleItem.prototype, "sellingPrice", void 0);
SaleItem = _ts_decorate10([
  Entity9("sale_items")
], SaleItem);
export {
  SaleItem
};
