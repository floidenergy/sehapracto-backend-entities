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

// src/entities/pharmacyItem.entity.ts
var pharmacyItem_entity_exports = {};
__export(pharmacyItem_entity_exports, {
  PharmacyItem: () => PharmacyItem
});
module.exports = __toCommonJS(pharmacyItem_entity_exports);
var import_typeorm9 = require("typeorm");

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

// src/entities/product.entity.ts
var import_typeorm3 = require("typeorm");

// src/entities/category.entity.ts
var import_typeorm2 = require("typeorm");
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
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], Category.prototype, "name", void 0);
_ts_decorate2([
  (0, import_typeorm2.OneToMany)(() => Product, (product) => product.category),
  _ts_metadata2("design:type", Array)
], Category.prototype, "products", void 0);
Category = _ts_decorate2([
  (0, import_typeorm2.Entity)("categories")
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
  (0, import_typeorm3.Column)(),
  _ts_metadata3("design:type", String)
], Product.prototype, "name", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)(),
  _ts_metadata3("design:type", String)
], Product.prototype, "sku", void 0);
_ts_decorate3([
  (0, import_typeorm3.ManyToOne)(() => Category, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm3.JoinColumn)({
    name: "category_id"
  }),
  _ts_metadata3("design:type", typeof Category === "undefined" ? Object : Category)
], Product.prototype, "category", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)(),
  _ts_metadata3("design:type", Boolean)
], Product.prototype, "requirePrescription", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    unsigned: true
  }),
  _ts_metadata3("design:type", Number)
], Product.prototype, "price", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)(),
  _ts_metadata3("design:type", String)
], Product.prototype, "description", void 0);
Product = _ts_decorate3([
  (0, import_typeorm3.Entity)("products")
], Product);

// src/entities/pharmacyStore.entity.ts
var import_typeorm8 = require("typeorm");

// src/entities/pharmacy.entity.ts
var import_typeorm6 = require("typeorm");

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
  (0, import_typeorm6.PrimaryGeneratedColumn)(),
  _ts_metadata6("design:type", Number)
], Pharmacy.prototype, "pharmacyId", void 0);
_ts_decorate6([
  (0, import_typeorm6.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyCreatedAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyUpdatedAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.DeleteDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "pharmacyDeletedAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.Column)(),
  _ts_metadata6("design:type", String)
], Pharmacy.prototype, "password", void 0);
_ts_decorate6([
  (0, import_typeorm6.OneToOne)(() => User, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm6.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata6("design:type", typeof User === "undefined" ? Object : User)
], Pharmacy.prototype, "user", void 0);
Pharmacy = _ts_decorate6([
  (0, import_typeorm6.Entity)("pharmacies")
], Pharmacy);

// src/entities/pharmacyBusiness.entity.ts
var import_typeorm7 = require("typeorm");
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
  (0, import_typeorm7.OneToOne)(() => Pharmacy, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm7.JoinColumn)({
    name: "owner_id"
  }),
  _ts_metadata7("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyBusiness.prototype, "owner", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", String)
], PharmacyBusiness.prototype, "name", void 0);
_ts_decorate7([
  (0, import_typeorm7.ManyToOne)(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  (0, import_typeorm7.JoinColumn)({
    name: "country_id"
  }),
  _ts_metadata7("design:type", typeof Country === "undefined" ? Object : Country)
], PharmacyBusiness.prototype, "country", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", String)
], PharmacyBusiness.prototype, "phone", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", String)
], PharmacyBusiness.prototype, "email", void 0);
PharmacyBusiness = _ts_decorate7([
  (0, import_typeorm7.Entity)("pharmacy_business")
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
  (0, import_typeorm8.OneToOne)(() => Pharmacy, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm8.JoinColumn)({
    name: "manager_id"
  }),
  _ts_metadata8("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "manager", void 0);
_ts_decorate8([
  (0, import_typeorm8.ManyToOne)(() => PharmacyBusiness, {
    onDelete: "SET NULL"
  }),
  (0, import_typeorm8.JoinColumn)({
    name: "pharmacy_business_id"
  }),
  _ts_metadata8("design:type", typeof Pharmacy === "undefined" ? Object : Pharmacy)
], PharmacyStore.prototype, "pharmacyBusiness", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "profileImg", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    nullable: true
  }),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "coverImg", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)(),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "name", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)(),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "address", void 0);
_ts_decorate8([
  (0, import_typeorm8.ManyToOne)(() => Country),
  (0, import_typeorm8.JoinColumn)({
    name: "country_id"
  }),
  _ts_metadata8("design:type", typeof Country === "undefined" ? Object : Country)
], PharmacyStore.prototype, "country", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)(),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "phone", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)(),
  _ts_metadata8("design:type", String)
], PharmacyStore.prototype, "email", void 0);
PharmacyStore = _ts_decorate8([
  (0, import_typeorm8.Entity)("pharmacy_store")
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
  (0, import_typeorm9.OneToOne)(() => Product, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm9.JoinColumn)({
    name: "product_id"
  }),
  _ts_metadata9("design:type", typeof Product === "undefined" ? Object : Product)
], PharmacyItem.prototype, "product", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)({
    unsigned: true
  }),
  _ts_metadata9("design:type", Number)
], PharmacyItem.prototype, "quantity", void 0);
_ts_decorate9([
  (0, import_typeorm9.ManyToOne)(() => PharmacyStore, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm9.JoinColumn)({
    name: "pharmacy_store_id"
  }),
  _ts_metadata9("design:type", typeof PharmacyStore === "undefined" ? Object : PharmacyStore)
], PharmacyItem.prototype, "pharmacyStore", void 0);
PharmacyItem = _ts_decorate9([
  (0, import_typeorm9.Entity)("pharmacy_item")
], PharmacyItem);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PharmacyItem
});
