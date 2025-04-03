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
  Country: () => Country,
  Department: () => Department,
  Entities: () => entities_exports,
  GENDER: () => GENDER,
  PERMISSIONS: () => PERMISSIONS,
  Permission: () => Permission,
  Session: () => Session,
  User: () => User
});
module.exports = __toCommonJS(index_exports);

// src/entities/index.ts
var entities_exports = {};
__export(entities_exports, {
  Admin: () => Admin,
  ApiKey: () => ApiKey,
  Country: () => Country,
  Department: () => Department,
  Permission: () => Permission,
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
  APP_TYPE2["CLIENT"] = "CLIENT";
  APP_TYPE2["PHARMACIE"] = "PHARMACIE";
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
    default: APP_TYPE.CLIENT
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
  createdAt;
  updatedAt;
  deletedAt;
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
], Admin.prototype, "createdAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "updatedAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.DeleteDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "deletedAt", void 0);
Admin = _ts_decorate6([
  (0, import_typeorm6.Entity)("admins")
], Admin);

// src/entities/session.entity.ts
var import_typeorm7 = require("typeorm");
var import_uuid = require("uuid");
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

// src/entities/apikey.entity.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APP_TYPE,
  Admin,
  ApiKey,
  Country,
  Department,
  Entities,
  GENDER,
  PERMISSIONS,
  Permission,
  Session,
  User
});
