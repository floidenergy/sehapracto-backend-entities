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

// src/entities/admin.entity.ts
var admin_entity_exports = {};
__export(admin_entity_exports, {
  Admin: () => Admin
});
module.exports = __toCommonJS(admin_entity_exports);
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
], Country.prototype, "nameAr", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)({
    unique: true
  }),
  _ts_metadata4("design:type", String)
], Country.prototype, "telCode", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "customerSupport", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "currency", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "currencyVsDollar", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "timezone", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Country.prototype, "flagIcon", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)({
    default: false
  }),
  _ts_metadata4("design:type", Boolean)
], Country.prototype, "isActive", void 0);
Country = _ts_decorate4([
  (0, import_typeorm4.Entity)("countries")
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
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", String)
], User.prototype, "firstName", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", String)
], User.prototype, "lastName", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    unique: true
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "userName", void 0);
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
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "emailVerifiedAt", void 0);
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
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "phoneVerifiedAt", void 0);
_ts_decorate5([
  (0, import_typeorm5.ManyToOne)(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  (0, import_typeorm5.JoinTable)({
    name: "country_id"
  }),
  _ts_metadata5("design:type", typeof Country === "undefined" ? Object : Country)
], User.prototype, "country", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    nullable: true,
    default: "avatar.png"
  }),
  _ts_metadata5("design:type", String)
], User.prototype, "profileImg", void 0);
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
  isActive;
  user;
  permissions;
  adminCreatedAt;
  adminUpdatedAt;
  adminDeletedAt;
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
], Admin.prototype, "isActive", void 0);
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
], Admin.prototype, "adminCreatedAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "adminUpdatedAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.DeleteDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "adminDeletedAt", void 0);
Admin = _ts_decorate6([
  (0, import_typeorm6.Entity)("admins")
], Admin);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Admin
});
