var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/entities/admin.entity.ts
import { Entity as Entity5, PrimaryGeneratedColumn as PrimaryGeneratedColumn2, Column as Column5, ManyToOne as ManyToOne2, CreateDateColumn as CreateDateColumn2, UpdateDateColumn as UpdateDateColumn2, OneToOne, JoinColumn as JoinColumn2, ManyToMany, JoinTable, DeleteDateColumn as DeleteDateColumn2 } from "typeorm";

// src/entities/department.entity.ts
import { Entity, Column } from "typeorm";

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

// src/entities/department.entity.ts
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
var Department = class extends BaseEntity {
  static {
    __name(this, "Department");
  }
  name;
};
_ts_decorate2([
  Column({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Department.prototype, "name", void 0);
Department = _ts_decorate2([
  Entity("departments")
], Department);

// src/entities/adminPermission.entity.ts
import { Column as Column2, Entity as Entity2 } from "typeorm";
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
var Permission = class extends BaseEntity {
  static {
    __name(this, "Permission");
  }
  name;
};
_ts_decorate3([
  Column2({
    unique: true
  }),
  _ts_metadata3("design:type", String)
], Permission.prototype, "name", void 0);
Permission = _ts_decorate3([
  Entity2("permissions")
], Permission);

// src/entities/user.entity.ts
import { Entity as Entity4, Column as Column4, JoinColumn, ManyToOne, BeforeInsert, BeforeUpdate } from "typeorm";

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
  ManyToOne(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  JoinColumn({
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

// src/entities/admin.entity.ts
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
var Admin = class {
  static {
    __name(this, "Admin");
  }
  adminID;
  department;
  isActive;
  user;
  permissions;
  adminCreatedAt;
  adminUpdatedAt;
  adminDeletedAt;
};
_ts_decorate6([
  PrimaryGeneratedColumn2(),
  _ts_metadata6("design:type", Number)
], Admin.prototype, "adminID", void 0);
_ts_decorate6([
  ManyToOne2(() => Department, {
    onDelete: "NO ACTION"
  }),
  JoinColumn2({
    name: "department_id"
  }),
  _ts_metadata6("design:type", typeof Department === "undefined" ? Object : Department)
], Admin.prototype, "department", void 0);
_ts_decorate6([
  Column5({
    default: false
  }),
  _ts_metadata6("design:type", Boolean)
], Admin.prototype, "isActive", void 0);
_ts_decorate6([
  OneToOne(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn2({
    name: "user_id"
  }),
  _ts_metadata6("design:type", typeof User === "undefined" ? Object : User)
], Admin.prototype, "user", void 0);
_ts_decorate6([
  ManyToMany(() => Permission),
  JoinTable({
    name: "admin_permissions",
    joinColumn: {
      name: "admin_id",
      referencedColumnName: "adminID"
    },
    inverseJoinColumn: {
      name: "permission_id",
      referencedColumnName: "id"
    }
  }),
  _ts_metadata6("design:type", Array)
], Admin.prototype, "permissions", void 0);
_ts_decorate6([
  CreateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "adminCreatedAt", void 0);
_ts_decorate6([
  UpdateDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "adminUpdatedAt", void 0);
_ts_decorate6([
  DeleteDateColumn2({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "adminDeletedAt", void 0);
Admin = _ts_decorate6([
  Entity5("admins")
], Admin);

// src/entities/session.entity.ts
import { BeforeInsert as BeforeInsert2, Column as Column6, Entity as Entity6, JoinColumn as JoinColumn3, ManyToOne as ManyToOne3 } from "typeorm";
import { v4 as uuid } from "uuid";

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

// src/types/orderStatus.ts
var OrderStatus = /* @__PURE__ */ function(OrderStatus2) {
  OrderStatus2["PENDING"] = "PENDING";
  OrderStatus2["CONFIRMED"] = "CONFIRMED";
  OrderStatus2["REJECTED"] = "REJECTED";
  OrderStatus2["CLOSED"] = "CLOSED";
  return OrderStatus2;
}({});

// src/entities/session.entity.ts
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
var Session = class extends BaseEntity {
  static {
    __name(this, "Session");
  }
  accessKey;
  refreshKey;
  user;
  ipAddress;
  sessionRole;
  // CREATE TOKEN EVERY TIME U CREATE A SESSION
  async createTokens() {
    this.accessKey = uuid();
    this.refreshKey = uuid();
  }
};
_ts_decorate7([
  Column6({
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], Session.prototype, "accessKey", void 0);
_ts_decorate7([
  Column6({
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], Session.prototype, "refreshKey", void 0);
_ts_decorate7([
  ManyToOne3(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn3({
    name: "user_id"
  }),
  _ts_metadata7("design:type", typeof User === "undefined" ? Object : User)
], Session.prototype, "user", void 0);
_ts_decorate7([
  Column6({
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], Session.prototype, "ipAddress", void 0);
_ts_decorate7([
  Column6({
    type: "enum",
    enum: APP_TYPE,
    default: APP_TYPE.PATIENT
  }),
  _ts_metadata7("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], Session.prototype, "sessionRole", void 0);
_ts_decorate7([
  BeforeInsert2(),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", []),
  _ts_metadata7("design:returntype", Promise)
], Session.prototype, "createTokens", null);
Session = _ts_decorate7([
  Entity6("sessions")
], Session);

// src/entities/apikey.entity.ts
import { Column as Column7, Entity as Entity7 } from "typeorm";
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
_ts_decorate8([
  Column7(),
  _ts_metadata8("design:type", String)
], ApiKey.prototype, "key", void 0);
_ts_decorate8([
  Column7({
    type: "enum",
    enum: APP_TYPE
  }),
  _ts_metadata8("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], ApiKey.prototype, "type", void 0);
_ts_decorate8([
  Column7({
    default: true
  }),
  _ts_metadata8("design:type", Boolean)
], ApiKey.prototype, "actif", void 0);
_ts_decorate8([
  Column7({
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], ApiKey.prototype, "description", void 0);
_ts_decorate8([
  Column7({
    default: 1
  }),
  _ts_metadata8("design:type", Number)
], ApiKey.prototype, "version", void 0);
ApiKey = _ts_decorate8([
  Entity7("api_keys")
], ApiKey);

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
  bucketName;
  fileName;
  memeType;
  size;
};
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "bucketName", void 0);
_ts_decorate9([
  Column8({
    unique: true
  }),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "fileName", void 0);
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "memeType", void 0);
_ts_decorate9([
  Column8(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "size", void 0);
Attachement = _ts_decorate9([
  Entity8("attachements")
], Attachement);

// src/entities/category.entity.ts
import { Column as Column10, Entity as Entity10, OneToMany } from "typeorm";

// src/entities/product.entity.ts
import { Column as Column9, Entity as Entity9, JoinColumn as JoinColumn4, ManyToOne as ManyToOne4 } from "typeorm";
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
_ts_decorate10([
  Column9(),
  _ts_metadata10("design:type", String)
], Product.prototype, "name", void 0);
_ts_decorate10([
  Column9(),
  _ts_metadata10("design:type", String)
], Product.prototype, "sku", void 0);
_ts_decorate10([
  ManyToOne4(() => Category, {
    onDelete: "SET NULL"
  }),
  JoinColumn4({
    name: "category_id"
  }),
  _ts_metadata10("design:type", typeof Category === "undefined" ? Object : Category)
], Product.prototype, "category", void 0);
_ts_decorate10([
  Column9(),
  _ts_metadata10("design:type", Boolean)
], Product.prototype, "requirePrescription", void 0);
_ts_decorate10([
  Column9({
    unsigned: true
  }),
  _ts_metadata10("design:type", Number)
], Product.prototype, "price", void 0);
_ts_decorate10([
  Column9(),
  _ts_metadata10("design:type", String)
], Product.prototype, "description", void 0);
Product = _ts_decorate10([
  Entity9("products")
], Product);

// src/entities/category.entity.ts
function _ts_decorate11(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate11, "_ts_decorate");
function _ts_metadata11(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata11, "_ts_metadata");
var Category = class extends BaseEntity {
  static {
    __name(this, "Category");
  }
  name;
  products;
};
_ts_decorate11([
  Column10(),
  _ts_metadata11("design:type", String)
], Category.prototype, "name", void 0);
_ts_decorate11([
  OneToMany(() => Product, (product) => product.category),
  _ts_metadata11("design:type", Array)
], Category.prototype, "products", void 0);
Category = _ts_decorate11([
  Entity10("categories")
], Category);

// src/entities/order.entity.ts
import { Column as Column13, Entity as Entity13, JoinColumn as JoinColumn7, ManyToOne as ManyToOne6, OneToMany as OneToMany2 } from "typeorm";

// src/entities/orderItems.entity.ts
import { Column as Column11, Entity as Entity11, JoinColumn as JoinColumn5, ManyToOne as ManyToOne5, OneToOne as OneToOne2 } from "typeorm";
function _ts_decorate12(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate12, "_ts_decorate");
function _ts_metadata12(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata12, "_ts_metadata");
var OrderItem = class extends BaseEntity {
  static {
    __name(this, "OrderItem");
  }
  order;
  quantity;
  price;
  product;
};
_ts_decorate12([
  ManyToOne5(() => Order, {
    onDelete: "CASCADE"
  }),
  JoinColumn5({
    name: "order_id"
  }),
  _ts_metadata12("design:type", typeof Order === "undefined" ? Object : Order)
], OrderItem.prototype, "order", void 0);
_ts_decorate12([
  Column11({
    unsigned: true
  }),
  _ts_metadata12("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
_ts_decorate12([
  Column11({
    unsigned: true
  }),
  _ts_metadata12("design:type", Number)
], OrderItem.prototype, "price", void 0);
_ts_decorate12([
  OneToOne2(() => Product, {
    onDelete: "CASCADE"
  }),
  JoinColumn5({
    name: "product_id"
  }),
  _ts_metadata12("design:type", typeof Product === "undefined" ? Object : Product)
], OrderItem.prototype, "product", void 0);
OrderItem = _ts_decorate12([
  Entity11("order_items")
], OrderItem);

// src/entities/patient.entity.ts
import { Column as Column12, CreateDateColumn as CreateDateColumn3, DeleteDateColumn as DeleteDateColumn3, Entity as Entity12, JoinColumn as JoinColumn6, OneToOne as OneToOne3, PrimaryGeneratedColumn as PrimaryGeneratedColumn3, UpdateDateColumn as UpdateDateColumn3 } from "typeorm";
function _ts_decorate13(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate13, "_ts_decorate");
function _ts_metadata13(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata13, "_ts_metadata");
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
_ts_decorate13([
  PrimaryGeneratedColumn3(),
  _ts_metadata13("design:type", Number)
], Patient.prototype, "patientId", void 0);
_ts_decorate13([
  CreateDateColumn3({
    type: "timestamp"
  }),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patientCreatedAt", void 0);
_ts_decorate13([
  UpdateDateColumn3({
    type: "timestamp"
  }),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patientUpdatedAt", void 0);
_ts_decorate13([
  DeleteDateColumn3({
    type: "timestamp"
  }),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patientDeletedAt", void 0);
_ts_decorate13([
  Column12({
    default: 0,
    unsigned: true
  }),
  _ts_metadata13("design:type", Number)
], Patient.prototype, "balance", void 0);
_ts_decorate13([
  Column12(),
  _ts_metadata13("design:type", String)
], Patient.prototype, "password", void 0);
_ts_decorate13([
  Column12(),
  _ts_metadata13("design:type", String)
], Patient.prototype, "bloodGroup", void 0);
_ts_decorate13([
  OneToOne3(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn6({
    name: "user_id"
  }),
  _ts_metadata13("design:type", typeof User === "undefined" ? Object : User)
], Patient.prototype, "user", void 0);
Patient = _ts_decorate13([
  Entity12("patients")
], Patient);

// src/entities/order.entity.ts
function _ts_decorate14(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate14, "_ts_decorate");
function _ts_metadata14(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata14, "_ts_metadata");
var Order = class extends BaseEntity {
  static {
    __name(this, "Order");
  }
  patient;
  status;
  price;
  orderItems;
};
_ts_decorate14([
  ManyToOne6(() => Patient, {
    onDelete: "CASCADE"
  }),
  JoinColumn7({
    name: "patient_id"
  }),
  _ts_metadata14("design:type", typeof Patient === "undefined" ? Object : Patient)
], Order.prototype, "patient", void 0);
_ts_decorate14([
  Column13({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PENDING
  }),
  _ts_metadata14("design:type", typeof OrderStatus === "undefined" ? Object : OrderStatus)
], Order.prototype, "status", void 0);
_ts_decorate14([
  Column13({
    unsigned: true
  }),
  _ts_metadata14("design:type", Number)
], Order.prototype, "price", void 0);
_ts_decorate14([
  OneToMany2(() => OrderItem, (orderItem) => orderItem.order),
  _ts_metadata14("design:type", Array)
], Order.prototype, "orderItems", void 0);
Order = _ts_decorate14([
  Entity13("orders")
], Order);

// src/entities/pharmacy.entity.ts
import { Column as Column14, CreateDateColumn as CreateDateColumn4, DeleteDateColumn as DeleteDateColumn4, Entity as Entity14, JoinColumn as JoinColumn8, OneToOne as OneToOne4, PrimaryGeneratedColumn as PrimaryGeneratedColumn4, UpdateDateColumn as UpdateDateColumn4 } from "typeorm";
function _ts_decorate15(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate15, "_ts_decorate");
function _ts_metadata15(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata15, "_ts_metadata");
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
_ts_decorate15([
  PrimaryGeneratedColumn4(),
  _ts_metadata15("design:type", Number)
], Pharmacy.prototype, "pharmacyId", void 0);
_ts_decorate15([
  CreateDateColumn4({
    type: "timestamp"
  }),
  _ts_metadata15("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyCreatedAt", void 0);
_ts_decorate15([
  UpdateDateColumn4({
    type: "timestamp"
  }),
  _ts_metadata15("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyUpdatedAt", void 0);
_ts_decorate15([
  DeleteDateColumn4({
    type: "timestamp"
  }),
  _ts_metadata15("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyDeletedAt", void 0);
_ts_decorate15([
  Column14(),
  _ts_metadata15("design:type", String)
], Pharmacy.prototype, "password", void 0);
_ts_decorate15([
  OneToOne4(() => User, {
    onDelete: "CASCADE"
  }),
  JoinColumn8({
    name: "user_id"
  }),
  _ts_metadata15("design:type", typeof User === "undefined" ? Object : User)
], Pharmacy.prototype, "user", void 0);
Pharmacy = _ts_decorate15([
  Entity14("pharmacies")
], Pharmacy);

// src/entities/pharmacyBusiness.entity.ts
import { Column as Column15, Entity as Entity15, JoinColumn as JoinColumn9, ManyToOne as ManyToOne7, OneToOne as OneToOne5 } from "typeorm";
function _ts_decorate16(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate16, "_ts_decorate");
function _ts_metadata16(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata16, "_ts_metadata");
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
_ts_decorate16([
  OneToOne5(() => Pharmacy, {
    onDelete: "CASCADE"
  }),
  JoinColumn9({
    name: "owner_id"
  }),
  _ts_metadata16("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyBusiness.prototype, "owner", void 0);
_ts_decorate16([
  Column15(),
  _ts_metadata16("design:type", String)
], PharmacyBusiness.prototype, "name", void 0);
_ts_decorate16([
  ManyToOne7(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  JoinColumn9({
    name: "country_id"
  }),
  _ts_metadata16("design:type", typeof Country === "undefined" ? Object : Country)
], PharmacyBusiness.prototype, "country", void 0);
_ts_decorate16([
  Column15(),
  _ts_metadata16("design:type", String)
], PharmacyBusiness.prototype, "phone", void 0);
_ts_decorate16([
  Column15(),
  _ts_metadata16("design:type", String)
], PharmacyBusiness.prototype, "email", void 0);
PharmacyBusiness = _ts_decorate16([
  Entity15("pharmacy_business")
], PharmacyBusiness);

// src/entities/pharmacyItem.entity.ts
import { Column as Column17, Entity as Entity17, JoinColumn as JoinColumn11, ManyToOne as ManyToOne9, OneToOne as OneToOne7 } from "typeorm";

// src/entities/pharmacyStore.entity.ts
import { Column as Column16, Entity as Entity16, JoinColumn as JoinColumn10, ManyToOne as ManyToOne8, OneToOne as OneToOne6 } from "typeorm";
function _ts_decorate17(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate17, "_ts_decorate");
function _ts_metadata17(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata17, "_ts_metadata");
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
_ts_decorate17([
  OneToOne6(() => Pharmacy, {
    onDelete: "SET NULL"
  }),
  JoinColumn10({
    name: "manager_id"
  }),
  _ts_metadata17("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "manager", void 0);
_ts_decorate17([
  ManyToOne8(() => PharmacyBusiness, {
    onDelete: "SET NULL"
  }),
  JoinColumn10({
    name: "pharmacy_business_id"
  }),
  _ts_metadata17("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "pharmacyBusiness", void 0);
_ts_decorate17([
  Column16({
    nullable: true
  }),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "profileImg", void 0);
_ts_decorate17([
  Column16({
    nullable: true
  }),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "coverImg", void 0);
_ts_decorate17([
  Column16(),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "name", void 0);
_ts_decorate17([
  Column16(),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "address", void 0);
_ts_decorate17([
  ManyToOne8(() => Country),
  JoinColumn10({
    name: "country_id"
  }),
  _ts_metadata17("design:type", typeof Country === "undefined" ? Object : Country)
], PharmacyStore.prototype, "country", void 0);
_ts_decorate17([
  Column16(),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "phone", void 0);
_ts_decorate17([
  Column16(),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "email", void 0);
PharmacyStore = _ts_decorate17([
  Entity16("pharmacy_store")
], PharmacyStore);

// src/entities/pharmacyItem.entity.ts
function _ts_decorate18(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate18, "_ts_decorate");
function _ts_metadata18(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata18, "_ts_metadata");
var PharmacyItem = class extends BaseEntity {
  static {
    __name(this, "PharmacyItem");
  }
  product;
  quantity;
  pharmacyStore;
};
_ts_decorate18([
  OneToOne7(() => Product, {
    onDelete: "CASCADE"
  }),
  JoinColumn11({
    name: "product_id"
  }),
  _ts_metadata18("design:type", typeof Product === "undefined" ? Object : Product)
], PharmacyItem.prototype, "product", void 0);
_ts_decorate18([
  Column17({
    unsigned: true
  }),
  _ts_metadata18("design:type", Number)
], PharmacyItem.prototype, "quantity", void 0);
_ts_decorate18([
  ManyToOne9(() => PharmacyStore, {
    onDelete: "CASCADE"
  }),
  JoinColumn11({
    name: "pharmacy_store_id"
  }),
  _ts_metadata18("design:type", typeof PharmacyStore === "undefined" ? Object : PharmacyStore)
], PharmacyItem.prototype, "pharmacyStore", void 0);
PharmacyItem = _ts_decorate18([
  Entity17("pharmacy_item")
], PharmacyItem);

// src/entities/prescriptions.entity.ts
import { Entity as Entity18, JoinColumn as JoinColumn12, ManyToOne as ManyToOne10 } from "typeorm";
function _ts_decorate19(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate19, "_ts_decorate");
function _ts_metadata19(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata19, "_ts_metadata");
var Prescription = class extends BaseEntity {
  static {
    __name(this, "Prescription");
  }
  order;
  patient;
  attachement;
};
_ts_decorate19([
  ManyToOne10(() => Order, {
    onDelete: "SET NULL"
  }),
  JoinColumn12({
    name: "order_id"
  }),
  _ts_metadata19("design:type", typeof Order === "undefined" ? Object : Order)
], Prescription.prototype, "order", void 0);
_ts_decorate19([
  ManyToOne10(() => Patient, {
    onDelete: "SET NULL"
  }),
  JoinColumn12({
    name: "patient_id"
  }),
  _ts_metadata19("design:type", typeof Patient === "undefined" ? Object : Patient)
], Prescription.prototype, "patient", void 0);
_ts_decorate19([
  ManyToOne10(() => Attachement, {
    onDelete: "SET NULL"
  }),
  JoinColumn12({
    name: "attachement_id"
  }),
  _ts_metadata19("design:type", typeof Attachement === "undefined" ? Object : Attachement)
], Prescription.prototype, "attachement", void 0);
Prescription = _ts_decorate19([
  Entity18("prescriptions")
], Prescription);

// src/entities/sale.entity.ts
import { Column as Column18, Entity as Entity19, JoinColumn as JoinColumn13, ManyToOne as ManyToOne11 } from "typeorm";
function _ts_decorate20(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate20, "_ts_decorate");
function _ts_metadata20(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata20, "_ts_metadata");
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
_ts_decorate20([
  ManyToOne11(() => Patient),
  JoinColumn13({
    name: "customer_id"
  }),
  _ts_metadata20("design:type", typeof Patient === "undefined" ? Object : Patient)
], Sale.prototype, "customer", void 0);
_ts_decorate20([
  ManyToOne11(() => Order),
  JoinColumn13({
    name: "order_id"
  }),
  _ts_metadata20("design:type", typeof Order === "undefined" ? Object : Order)
], Sale.prototype, "order", void 0);
_ts_decorate20([
  Column18({
    unsigned: true
  }),
  _ts_metadata20("design:type", Number)
], Sale.prototype, "totalAmount", void 0);
_ts_decorate20([
  Column18(),
  _ts_metadata20("design:type", String)
], Sale.prototype, "status", void 0);
_ts_decorate20([
  Column18(),
  _ts_metadata20("design:type", String)
], Sale.prototype, "paymentMethode", void 0);
_ts_decorate20([
  Column18(),
  _ts_metadata20("design:type", typeof Date === "undefined" ? Object : Date)
], Sale.prototype, "saleDate", void 0);
_ts_decorate20([
  Column18(),
  _ts_metadata20("design:type", String)
], Sale.prototype, "items", void 0);
Sale = _ts_decorate20([
  Entity19("sales")
], Sale);

// src/entities/saleItems.entity.ts
import { Column as Column19, Entity as Entity20, OneToOne as OneToOne8 } from "typeorm";
function _ts_decorate21(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate21, "_ts_decorate");
function _ts_metadata21(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata21, "_ts_metadata");
var SaleItem = class extends BaseEntity {
  static {
    __name(this, "SaleItem");
  }
  product;
  sale;
  quantity;
  sellingPrice;
};
_ts_decorate21([
  OneToOne8(() => Product, {
    onDelete: "CASCADE"
  }),
  _ts_metadata21("design:type", typeof Product === "undefined" ? Object : Product)
], SaleItem.prototype, "product", void 0);
_ts_decorate21([
  OneToOne8(() => Sale, {
    onDelete: "CASCADE"
  }),
  _ts_metadata21("design:type", typeof Sale === "undefined" ? Object : Sale)
], SaleItem.prototype, "sale", void 0);
_ts_decorate21([
  Column19({
    unsigned: true
  }),
  _ts_metadata21("design:type", Number)
], SaleItem.prototype, "quantity", void 0);
_ts_decorate21([
  Column19({
    unsigned: true
  }),
  _ts_metadata21("design:type", Number)
], SaleItem.prototype, "sellingPrice", void 0);
SaleItem = _ts_decorate21([
  Entity20("sale_items")
], SaleItem);

// src/entities/sales_refunds.entity.ts
import { BaseEntity as BaseEntity2, Column as Column20, Entity as Entity21, OneToOne as OneToOne9 } from "typeorm";
function _ts_decorate22(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate22, "_ts_decorate");
function _ts_metadata22(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata22, "_ts_metadata");
var SalesRefunds = class extends BaseEntity2 {
  static {
    __name(this, "SalesRefunds");
  }
  total;
  status;
  refunded_date;
  reason;
  sale;
};
_ts_decorate22([
  Column20({
    unsigned: true
  }),
  _ts_metadata22("design:type", Number)
], SalesRefunds.prototype, "total", void 0);
_ts_decorate22([
  Column20(),
  _ts_metadata22("design:type", String)
], SalesRefunds.prototype, "status", void 0);
_ts_decorate22([
  Column20(),
  _ts_metadata22("design:type", typeof Date === "undefined" ? Object : Date)
], SalesRefunds.prototype, "refunded_date", void 0);
_ts_decorate22([
  Column20(),
  _ts_metadata22("design:type", Number)
], SalesRefunds.prototype, "reason", void 0);
_ts_decorate22([
  OneToOne9(() => Sale, {}),
  _ts_metadata22("design:type", typeof Sale === "undefined" ? Object : Sale)
], SalesRefunds.prototype, "sale", void 0);
SalesRefunds = _ts_decorate22([
  Entity21("sales_refunds")
], SalesRefunds);
export {
  Admin,
  ApiKey,
  Attachement,
  Category,
  Country,
  Department,
  Order,
  OrderItem,
  Patient,
  Permission,
  Pharmacy,
  PharmacyBusiness,
  PharmacyItem,
  PharmacyStore,
  Prescription,
  Product,
  Sale,
  SaleItem,
  SalesRefunds,
  Session,
  User
};
