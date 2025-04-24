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
var import_typeorm3 = require("typeorm");

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

// src/entities/pharmacyStore.entity.ts
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
  (0, import_typeorm2.Column)({
    type: "int",
    nullable: false,
    unique: true
  }),
  _ts_metadata2("design:type", Number)
], PharmacyStore.prototype, "manager", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    type: "int",
    nullable: false,
    unique: true
  }),
  _ts_metadata2("design:type", Number)
], PharmacyStore.prototype, "pharmacyBusiness", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    nullable: true
  }),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "profileImg", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    nullable: true
  }),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "coverImg", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "name", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "address", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    type: "int",
    nullable: false,
    unique: true
  }),
  _ts_metadata2("design:type", Number)
], PharmacyStore.prototype, "country", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "phone", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], PharmacyStore.prototype, "email", void 0);
PharmacyStore = _ts_decorate2([
  (0, import_typeorm2.Entity)("pharmacy_store")
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
  (0, import_typeorm3.Column)({
    type: "int",
    nullable: false,
    unique: true
  }),
  _ts_metadata3("design:type", Number)
], PharmacyItem.prototype, "product", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    unsigned: true
  }),
  _ts_metadata3("design:type", Number)
], PharmacyItem.prototype, "quantity", void 0);
_ts_decorate3([
  (0, import_typeorm3.ManyToOne)(() => PharmacyStore, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm3.JoinColumn)({
    name: "pharmacy_store_id"
  }),
  _ts_metadata3("design:type", typeof PharmacyStore === "undefined" ? Object : PharmacyStore)
], PharmacyItem.prototype, "pharmacyStore", void 0);
PharmacyItem = _ts_decorate3([
  (0, import_typeorm3.Entity)("pharmacy_item")
], PharmacyItem);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PharmacyItem
});
