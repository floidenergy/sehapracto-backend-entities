var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  APP_TYPE: () => APP_TYPE,
  Admin: () => Admin,
  ApiKey: () => ApiKey,
  Attachement: () => Attachement,
  Category: () => Category,
  Country: () => Country,
  Department: () => Department,
  Entities: () => entities_exports,
  GENDER: () => GENDER,
  Order: () => Order,
  OrderItem: () => OrderItem,
  OrderStatus: () => OrderStatus,
  PERMISSIONS: () => PERMISSIONS,
  Patient: () => Patient,
  Permission: () => Permission,
  Pharmacy: () => Pharmacy,
  PharmacyBusiness: () => PharmacyBusiness,
  PharmacyItem: () => PharmacyItem,
  PharmacyStore: () => PharmacyStore,
  Prescription: () => Prescription,
  Product: () => Product,
  Sale: () => Sale,
  SaleItem: () => SaleItem,
  SalesRefunds: () => SalesRefunds,
  Session: () => Session,
  User: () => User
});
module.exports = __toCommonJS(index_exports);

// src/entities/index.ts
var entities_exports = {};
__export(entities_exports, {
  Admin: () => Admin,
  ApiKey: () => ApiKey,
  Attachement: () => Attachement,
  Category: () => Category,
  Country: () => Country,
  Department: () => Department,
  Order: () => Order,
  OrderItem: () => OrderItem,
  Patient: () => Patient,
  Permission: () => Permission,
  Pharmacy: () => Pharmacy,
  PharmacyBusiness: () => PharmacyBusiness,
  PharmacyItem: () => PharmacyItem,
  PharmacyStore: () => PharmacyStore,
  Prescription: () => Prescription,
  Product: () => Product,
  Sale: () => Sale,
  SaleItem: () => SaleItem,
  SalesRefunds: () => SalesRefunds,
  Session: () => Session,
  User: () => User
});

// src/entities/admin.entity.ts
var import_typeorm6 = require("typeorm");

// src/entities/department.entity.ts
var import_typeorm2 = require("typeorm");

// src/entities/baseEntity.entity.ts
var import_typeorm = require("typeorm");
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
  (0, import_typeorm.PrimaryGeneratedColumn)(),
  _ts_metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
_ts_decorate([
  (0, import_typeorm.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseEntity.prototype, "createdAt", void 0);
_ts_decorate([
  (0, import_typeorm.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BaseEntity.prototype, "updatedAt", void 0);
_ts_decorate([
  (0, import_typeorm.DeleteDateColumn)({
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
  (0, import_typeorm2.Column)({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Department.prototype, "name", void 0);
Department = _ts_decorate2([
  (0, import_typeorm2.Entity)("departments")
], Department);

// src/entities/adminPermission.entity.ts
var import_typeorm3 = require("typeorm");
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
  (0, import_typeorm3.Column)({
    unique: true
  }),
  _ts_metadata3("design:type", String)
], Permission.prototype, "name", void 0);
Permission = _ts_decorate3([
  (0, import_typeorm3.Entity)("permissions")
], Permission);

// src/entities/user.entity.ts
var import_typeorm5 = require("typeorm");

// src/entities/country.entity.ts
var import_typeorm4 = require("typeorm");
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
  (0, import_typeorm4.Column)({
    unique: true
  }),
  _ts_metadata4("design:type", String)
], Country.prototype, "name", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)({
    unique: true
  }),
  _ts_metadata4("design:type", String)
], Country.prototype, "name_ar", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)({
    unique: true
  }),
  _ts_metadata4("design:type", String)
], Country.prototype, "tel_code", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "customer_support", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "currency", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "currency_vs_dollar", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "timezone", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "flag_icon", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)({
    default: false
  }),
  _ts_metadata4("design:type", Boolean)
], Country.prototype, "is_active", void 0);
Country = _ts_decorate4([
  (0, import_typeorm4.Entity)("countries")
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
var import_bcrypt = require("bcrypt");
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
    const salt = await (0, import_bcrypt.genSalt)(10);
    this.password = await (0, import_bcrypt.hash)(this.password, salt);
  }
  // Validate password
  async validatePassword(plainPassword) {
    return (0, import_bcrypt.compare)(plainPassword, this.password);
  }
};
_ts_decorate5([
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", String)
], User.prototype, "first_name", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", String)
], User.prototype, "last_name", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    nullable: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "gender", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "birthdate", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    unique: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "email_verified_at", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    unique: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "phone", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "phone_verified_at", void 0);
_ts_decorate5([
  (0, import_typeorm5.ManyToOne)(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  (0, import_typeorm5.JoinColumn)({
    name: "country_id"
  }),
  _ts_metadata5("design:type", typeof Country === "undefined" ? Object : Country)
], User.prototype, "country", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    select: false
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    nullable: true,
    default: "avatar.png"
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "profile_img", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    type: "enum",
    enum: APP_TYPE,
    default: APP_TYPE.PATIENT
  }),
  _ts_metadata5("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], User.prototype, "types", void 0);
_ts_decorate5([
  (0, import_typeorm5.BeforeInsert)(),
  (0, import_typeorm5.BeforeUpdate)(),
  _ts_metadata5("design:type", Function),
  _ts_metadata5("design:paramtypes", []),
  _ts_metadata5("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = _ts_decorate5([
  (0, import_typeorm5.Entity)("users")
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
  is_active;
  user;
  permissions;
  admin_createdAt;
  admin_updatedAt;
  admin_deletedAt;
};
_ts_decorate6([
  (0, import_typeorm6.PrimaryGeneratedColumn)(),
  _ts_metadata6("design:type", Number)
], Admin.prototype, "adminID", void 0);
_ts_decorate6([
  (0, import_typeorm6.ManyToOne)(() => Department, {
    onDelete: "NO ACTION"
  }),
  (0, import_typeorm6.JoinColumn)({
    name: "department_id"
  }),
  _ts_metadata6("design:type", typeof Department === "undefined" ? Object : Department)
], Admin.prototype, "department", void 0);
_ts_decorate6([
  (0, import_typeorm6.Column)({
    default: false
  }),
  _ts_metadata6("design:type", Boolean)
], Admin.prototype, "is_active", void 0);
_ts_decorate6([
  (0, import_typeorm6.OneToOne)(() => User, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm6.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata6("design:type", typeof User === "undefined" ? Object : User)
], Admin.prototype, "user", void 0);
_ts_decorate6([
  (0, import_typeorm6.ManyToMany)(() => Permission),
  (0, import_typeorm6.JoinTable)({
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
  (0, import_typeorm6.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "admin_createdAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "admin_updatedAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.DeleteDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "admin_deletedAt", void 0);
Admin = _ts_decorate6([
  (0, import_typeorm6.Entity)("admins")
], Admin);

// src/entities/session.entity.ts
var import_typeorm7 = require("typeorm");
var import_uuid = require("uuid");

// src/types/gender.enum.ts
var GENDER = /* @__PURE__ */ function(GENDER2) {
  GENDER2["MALE"] = "MALE";
  GENDER2["FEMALE"] = "FEMALE";
  return GENDER2;
}({});

// src/types/permission.enum.ts
var PERMISSIONS = /* @__PURE__ */ function(PERMISSIONS2) {
  PERMISSIONS2["READ_SLIDE"] = "SLIDE:READ";
  PERMISSIONS2["WRITE_SLIDE"] = "SLIDE:WRITE";
  PERMISSIONS2["READ_COUNTRY"] = "COUNTRY:READ";
  PERMISSIONS2["WRITE_COUNTRIES"] = "COUNTRY:WRITE";
  PERMISSIONS2["READ_DOCTOR"] = "DOCTOR:READ";
  PERMISSIONS2["WRITE_DOCTOR"] = "DOCTOR:WRITE";
  PERMISSIONS2["READ_HCP"] = "HCP:READ";
  PERMISSIONS2["WRITE_HCP"] = "HCP:WRITE";
  PERMISSIONS2["READ_HOSPITAL"] = "HOSPITAL:READ";
  PERMISSIONS2["WRITE_HOSPITAL"] = "HOSPITAL:WRITE";
  PERMISSIONS2["READ_PATIENT"] = "PATIENT:READ";
  PERMISSIONS2["WRITE_PATIENT"] = "PATIENT:WRITE";
  PERMISSIONS2["READ_OFFER"] = "OFFER:READ";
  PERMISSIONS2["WRITE_OFFER"] = "OFFER:WRITE";
  PERMISSIONS2["READ_NOTIFICATION"] = "NOTIFICATION:READ";
  PERMISSIONS2["WRITE_NOTIFICATION"] = "NOTIFICATION:WRITE";
  PERMISSIONS2["WRITE_TRANSLATION"] = "TRANSLATION:WRITE";
  PERMISSIONS2["IS_TRANSLATOR"] = "TRANSLATION:TRANSLATOR";
  PERMISSIONS2["READ_BLOG"] = "BLOG:READ";
  PERMISSIONS2["WRITE_BLOG"] = "BLOG:WRITE";
  PERMISSIONS2["READ_LAB_PAGE"] = "LAB:PAGE:READ";
  PERMISSIONS2["WRITE_LAB_PAGE"] = "LAB:PAGE:WRITE";
  PERMISSIONS2["READ_LAB_TEST"] = "LAB:TEST:READ";
  PERMISSIONS2["READ_LAB_REQUEST"] = "LAB:REQUEST:READ";
  PERMISSIONS2["WRITE_LAB_REQUEST"] = "LAB:REQUEST:WRITE";
  PERMISSIONS2["WRITE_ADMINS"] = "USERS:ADD_ADMIN";
  PERMISSIONS2["READ_FINANCE"] = "FINANCE:READ";
  return PERMISSIONS2;
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
  session_role;
  // CREATE TOKEN EVERY TIME U CREATE A SESSION
  async createTokens() {
    this.accessKey = (0, import_uuid.v4)();
    this.refreshKey = (0, import_uuid.v4)();
  }
};
_ts_decorate7([
  (0, import_typeorm7.Column)({
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], Session.prototype, "accessKey", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], Session.prototype, "refreshKey", void 0);
_ts_decorate7([
  (0, import_typeorm7.ManyToOne)(() => User, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm7.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata7("design:type", typeof User === "undefined" ? Object : User)
], Session.prototype, "user", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], Session.prototype, "ipAddress", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    type: "enum",
    enum: APP_TYPE,
    default: APP_TYPE.PATIENT
  }),
  _ts_metadata7("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], Session.prototype, "session_role", void 0);
_ts_decorate7([
  (0, import_typeorm7.BeforeInsert)(),
  _ts_metadata7("design:type", Function),
  _ts_metadata7("design:paramtypes", []),
  _ts_metadata7("design:returntype", Promise)
], Session.prototype, "createTokens", null);
Session = _ts_decorate7([
  (0, import_typeorm7.Entity)("sessions")
], Session);

// src/entities/apikey.entity.ts
var import_typeorm8 = require("typeorm");
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
  (0, import_typeorm8.Column)(),
  _ts_metadata8("design:type", String)
], ApiKey.prototype, "key", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    type: "enum",
    enum: APP_TYPE
  }),
  _ts_metadata8("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], ApiKey.prototype, "type", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    default: true
  }),
  _ts_metadata8("design:type", Boolean)
], ApiKey.prototype, "actif", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], ApiKey.prototype, "description", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    default: 1
  }),
  _ts_metadata8("design:type", Number)
], ApiKey.prototype, "version", void 0);
ApiKey = _ts_decorate8([
  (0, import_typeorm8.Entity)("api_keys")
], ApiKey);

// src/entities/attachements.entity.ts
var import_typeorm9 = require("typeorm");
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
  (0, import_typeorm9.Column)(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "bucket_name", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)({
    unique: true
  }),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "file_name", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "meme_type", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)(),
  _ts_metadata9("design:type", String)
], Attachement.prototype, "size", void 0);
Attachement = _ts_decorate9([
  (0, import_typeorm9.Entity)("attachements")
], Attachement);

// src/entities/category.entity.ts
var import_typeorm11 = require("typeorm");

// src/entities/product.entity.ts
var import_typeorm10 = require("typeorm");
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
  require_prescription;
  price;
  description;
};
_ts_decorate10([
  (0, import_typeorm10.Column)(),
  _ts_metadata10("design:type", String)
], Product.prototype, "name", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)(),
  _ts_metadata10("design:type", String)
], Product.prototype, "sku", void 0);
_ts_decorate10([
  (0, import_typeorm10.ManyToOne)(() => Category, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm10.JoinColumn)({
    name: "category_id"
  }),
  _ts_metadata10("design:type", typeof Category === "undefined" ? Object : Category)
], Product.prototype, "category", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)(),
  _ts_metadata10("design:type", Boolean)
], Product.prototype, "require_prescription", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    unsigned: true
  }),
  _ts_metadata10("design:type", Number)
], Product.prototype, "price", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)(),
  _ts_metadata10("design:type", String)
], Product.prototype, "description", void 0);
Product = _ts_decorate10([
  (0, import_typeorm10.Entity)("products")
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
  (0, import_typeorm11.Column)(),
  _ts_metadata11("design:type", String)
], Category.prototype, "name", void 0);
_ts_decorate11([
  (0, import_typeorm11.OneToMany)(() => Product, (product) => product.category),
  _ts_metadata11("design:type", Array)
], Category.prototype, "products", void 0);
Category = _ts_decorate11([
  (0, import_typeorm11.Entity)("categories")
], Category);

// src/entities/order.entity.ts
var import_typeorm14 = require("typeorm");

// src/entities/orderItems.entity.ts
var import_typeorm12 = require("typeorm");
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
  (0, import_typeorm12.ManyToOne)(() => Order, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm12.JoinColumn)({
    name: "order_id"
  }),
  _ts_metadata12("design:type", typeof Order === "undefined" ? Object : Order)
], OrderItem.prototype, "order", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    unsigned: true
  }),
  _ts_metadata12("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    unsigned: true
  }),
  _ts_metadata12("design:type", Number)
], OrderItem.prototype, "price", void 0);
_ts_decorate12([
  (0, import_typeorm12.OneToOne)(() => Product, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm12.JoinColumn)({
    name: "product_id"
  }),
  _ts_metadata12("design:type", typeof Product === "undefined" ? Object : Product)
], OrderItem.prototype, "product", void 0);
OrderItem = _ts_decorate12([
  (0, import_typeorm12.Entity)("order_items")
], OrderItem);

// src/entities/patient.entity.ts
var import_typeorm13 = require("typeorm");
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
  patient_id;
  patient_createdAt;
  patient_updatedAt;
  patient_deletedAt;
  balance;
  password;
  blood_group;
  user;
};
_ts_decorate13([
  (0, import_typeorm13.PrimaryGeneratedColumn)(),
  _ts_metadata13("design:type", Number)
], Patient.prototype, "patient_id", void 0);
_ts_decorate13([
  (0, import_typeorm13.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patient_createdAt", void 0);
_ts_decorate13([
  (0, import_typeorm13.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patient_updatedAt", void 0);
_ts_decorate13([
  (0, import_typeorm13.DeleteDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Patient.prototype, "patient_deletedAt", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    default: 0,
    unsigned: true
  }),
  _ts_metadata13("design:type", Number)
], Patient.prototype, "balance", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)(),
  _ts_metadata13("design:type", String)
], Patient.prototype, "password", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)(),
  _ts_metadata13("design:type", String)
], Patient.prototype, "blood_group", void 0);
_ts_decorate13([
  (0, import_typeorm13.OneToOne)(() => User, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm13.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata13("design:type", typeof User === "undefined" ? Object : User)
], Patient.prototype, "user", void 0);
Patient = _ts_decorate13([
  (0, import_typeorm13.Entity)("patients")
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
  (0, import_typeorm14.ManyToOne)(() => Patient, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm14.JoinColumn)({
    name: "patient_id"
  }),
  _ts_metadata14("design:type", typeof Patient === "undefined" ? Object : Patient)
], Order.prototype, "patient", void 0);
_ts_decorate14([
  (0, import_typeorm14.Column)({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PENDING
  }),
  _ts_metadata14("design:type", typeof OrderStatus === "undefined" ? Object : OrderStatus)
], Order.prototype, "status", void 0);
_ts_decorate14([
  (0, import_typeorm14.Column)({
    unsigned: true
  }),
  _ts_metadata14("design:type", Number)
], Order.prototype, "price", void 0);
_ts_decorate14([
  (0, import_typeorm14.OneToMany)(() => OrderItem, (orderItem) => orderItem.order),
  _ts_metadata14("design:type", Array)
], Order.prototype, "orderItems", void 0);
Order = _ts_decorate14([
  (0, import_typeorm14.Entity)("orders")
], Order);

// src/entities/pharmacy.entity.ts
var import_typeorm15 = require("typeorm");
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
  pharmacy_id;
  pharmacy_createdAt;
  pharmacy_updatedAt;
  pharmacy_deletedAt;
  password;
  user;
};
_ts_decorate15([
  (0, import_typeorm15.PrimaryGeneratedColumn)(),
  _ts_metadata15("design:type", Number)
], Pharmacy.prototype, "pharmacy_id", void 0);
_ts_decorate15([
  (0, import_typeorm15.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata15("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacy_createdAt", void 0);
_ts_decorate15([
  (0, import_typeorm15.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata15("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacy_updatedAt", void 0);
_ts_decorate15([
  (0, import_typeorm15.DeleteDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata15("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacy_deletedAt", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)(),
  _ts_metadata15("design:type", String)
], Pharmacy.prototype, "password", void 0);
_ts_decorate15([
  (0, import_typeorm15.OneToOne)(() => User, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm15.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata15("design:type", typeof User === "undefined" ? Object : User)
], Pharmacy.prototype, "user", void 0);
Pharmacy = _ts_decorate15([
  (0, import_typeorm15.Entity)("pharmacies")
], Pharmacy);

// src/entities/pharmacyBusiness.entity.ts
var import_typeorm16 = require("typeorm");
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
  (0, import_typeorm16.OneToOne)(() => Pharmacy, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm16.JoinColumn)({
    name: "owner_id"
  }),
  _ts_metadata16("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyBusiness.prototype, "owner", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)(),
  _ts_metadata16("design:type", String)
], PharmacyBusiness.prototype, "name", void 0);
_ts_decorate16([
  (0, import_typeorm16.ManyToOne)(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  (0, import_typeorm16.JoinColumn)({
    name: "country_id"
  }),
  _ts_metadata16("design:type", typeof Country === "undefined" ? Object : Country)
], PharmacyBusiness.prototype, "country", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)(),
  _ts_metadata16("design:type", String)
], PharmacyBusiness.prototype, "phone", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)(),
  _ts_metadata16("design:type", String)
], PharmacyBusiness.prototype, "email", void 0);
PharmacyBusiness = _ts_decorate16([
  (0, import_typeorm16.Entity)("pharmacy_business")
], PharmacyBusiness);

// src/entities/pharmacyItem.entity.ts
var import_typeorm18 = require("typeorm");

// src/entities/pharmacyStore.entity.ts
var import_typeorm17 = require("typeorm");
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
  pharmacy_business;
  profile_img;
  cover_img;
  name;
  address;
  country;
  phone;
  email;
};
_ts_decorate17([
  (0, import_typeorm17.OneToOne)(() => Pharmacy, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm17.JoinColumn)({
    name: "manager_id"
  }),
  _ts_metadata17("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "manager", void 0);
_ts_decorate17([
  (0, import_typeorm17.ManyToOne)(() => PharmacyBusiness, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm17.JoinColumn)({
    name: "pharmacy_business_id"
  }),
  _ts_metadata17("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "pharmacy_business", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)({
    nullable: true
  }),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "profile_img", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)({
    nullable: true
  }),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "cover_img", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)(),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "name", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)(),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "address", void 0);
_ts_decorate17([
  (0, import_typeorm17.ManyToOne)(() => Country),
  (0, import_typeorm17.JoinColumn)({
    name: "country_id"
  }),
  _ts_metadata17("design:type", typeof Country === "undefined" ? Object : Country)
], PharmacyStore.prototype, "country", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)(),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "phone", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)(),
  _ts_metadata17("design:type", String)
], PharmacyStore.prototype, "email", void 0);
PharmacyStore = _ts_decorate17([
  (0, import_typeorm17.Entity)("pharmacy_store")
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
  pharmacy_store;
};
_ts_decorate18([
  (0, import_typeorm18.OneToOne)(() => Product, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm18.JoinColumn)({
    name: "product_id"
  }),
  _ts_metadata18("design:type", typeof Product === "undefined" ? Object : Product)
], PharmacyItem.prototype, "product", void 0);
_ts_decorate18([
  (0, import_typeorm18.Column)({
    unsigned: true
  }),
  _ts_metadata18("design:type", Number)
], PharmacyItem.prototype, "quantity", void 0);
_ts_decorate18([
  (0, import_typeorm18.ManyToOne)(() => PharmacyStore, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm18.JoinColumn)({
    name: "pharmacy_store_id"
  }),
  _ts_metadata18("design:type", typeof PharmacyStore === "undefined" ? Object : PharmacyStore)
], PharmacyItem.prototype, "pharmacy_store", void 0);
PharmacyItem = _ts_decorate18([
  (0, import_typeorm18.Entity)("pharmacy_item")
], PharmacyItem);

// src/entities/prescriptions.entity.ts
var import_typeorm19 = require("typeorm");
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
  (0, import_typeorm19.ManyToOne)(() => Order, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm19.JoinColumn)({
    name: "order_id"
  }),
  _ts_metadata19("design:type", typeof Order === "undefined" ? Object : Order)
], Prescription.prototype, "order", void 0);
_ts_decorate19([
  (0, import_typeorm19.ManyToOne)(() => Patient, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm19.JoinColumn)({
    name: "patient_id"
  }),
  _ts_metadata19("design:type", typeof Patient === "undefined" ? Object : Patient)
], Prescription.prototype, "patient", void 0);
_ts_decorate19([
  (0, import_typeorm19.ManyToOne)(() => Attachement, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm19.JoinColumn)({
    name: "attachement_id"
  }),
  _ts_metadata19("design:type", typeof Attachement === "undefined" ? Object : Attachement)
], Prescription.prototype, "attachement", void 0);
Prescription = _ts_decorate19([
  (0, import_typeorm19.Entity)("prescriptions")
], Prescription);

// src/entities/sale.entity.ts
var import_typeorm20 = require("typeorm");
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
  total_amount;
  status;
  payment_methode;
  sale_date;
  items;
};
_ts_decorate20([
  (0, import_typeorm20.ManyToOne)(() => Patient),
  (0, import_typeorm20.JoinColumn)({
    name: "customer_id"
  }),
  _ts_metadata20("design:type", typeof Patient === "undefined" ? Object : Patient)
], Sale.prototype, "customer", void 0);
_ts_decorate20([
  (0, import_typeorm20.ManyToOne)(() => Order),
  (0, import_typeorm20.JoinColumn)({
    name: "order_id"
  }),
  _ts_metadata20("design:type", typeof Order === "undefined" ? Object : Order)
], Sale.prototype, "order", void 0);
_ts_decorate20([
  (0, import_typeorm20.Column)({
    unsigned: true
  }),
  _ts_metadata20("design:type", Number)
], Sale.prototype, "total_amount", void 0);
_ts_decorate20([
  (0, import_typeorm20.Column)(),
  _ts_metadata20("design:type", String)
], Sale.prototype, "status", void 0);
_ts_decorate20([
  (0, import_typeorm20.Column)(),
  _ts_metadata20("design:type", String)
], Sale.prototype, "payment_methode", void 0);
_ts_decorate20([
  (0, import_typeorm20.Column)(),
  _ts_metadata20("design:type", typeof Date === "undefined" ? Object : Date)
], Sale.prototype, "sale_date", void 0);
_ts_decorate20([
  (0, import_typeorm20.Column)(),
  _ts_metadata20("design:type", String)
], Sale.prototype, "items", void 0);
Sale = _ts_decorate20([
  (0, import_typeorm20.Entity)("sales")
], Sale);

// src/entities/saleItems.entity.ts
var import_typeorm21 = require("typeorm");
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
  selling_price;
};
_ts_decorate21([
  (0, import_typeorm21.OneToOne)(() => Product, {
    onDelete: "CASCADE"
  }),
  _ts_metadata21("design:type", typeof Product === "undefined" ? Object : Product)
], SaleItem.prototype, "product", void 0);
_ts_decorate21([
  (0, import_typeorm21.OneToOne)(() => Sale, {
    onDelete: "CASCADE"
  }),
  _ts_metadata21("design:type", typeof Sale === "undefined" ? Object : Sale)
], SaleItem.prototype, "sale", void 0);
_ts_decorate21([
  (0, import_typeorm21.Column)({
    unsigned: true
  }),
  _ts_metadata21("design:type", Number)
], SaleItem.prototype, "quantity", void 0);
_ts_decorate21([
  (0, import_typeorm21.Column)({
    unsigned: true
  }),
  _ts_metadata21("design:type", Number)
], SaleItem.prototype, "selling_price", void 0);
SaleItem = _ts_decorate21([
  (0, import_typeorm21.Entity)("sale_items")
], SaleItem);

// src/entities/sales_refunds.entity.ts
var import_typeorm22 = require("typeorm");
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
var SalesRefunds = class extends import_typeorm22.BaseEntity {
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
  (0, import_typeorm22.Column)({
    unsigned: true
  }),
  _ts_metadata22("design:type", Number)
], SalesRefunds.prototype, "total", void 0);
_ts_decorate22([
  (0, import_typeorm22.Column)(),
  _ts_metadata22("design:type", String)
], SalesRefunds.prototype, "status", void 0);
_ts_decorate22([
  (0, import_typeorm22.Column)(),
  _ts_metadata22("design:type", typeof Date === "undefined" ? Object : Date)
], SalesRefunds.prototype, "refunded_date", void 0);
_ts_decorate22([
  (0, import_typeorm22.Column)(),
  _ts_metadata22("design:type", Number)
], SalesRefunds.prototype, "reason", void 0);
_ts_decorate22([
  (0, import_typeorm22.OneToOne)(() => Sale, {}),
  _ts_metadata22("design:type", typeof Sale === "undefined" ? Object : Sale)
], SalesRefunds.prototype, "sale", void 0);
SalesRefunds = _ts_decorate22([
  (0, import_typeorm22.Entity)("sales_refunds")
], SalesRefunds);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APP_TYPE,
  Admin,
  ApiKey,
  Attachement,
  Category,
  Country,
  Department,
  Entities,
  GENDER,
  Order,
  OrderItem,
  OrderStatus,
  PERMISSIONS,
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
});
