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

// src/entities/order.entity.ts
var order_entity_exports = {};
__export(order_entity_exports, {
  Order: () => Order
});
module.exports = __toCommonJS(order_entity_exports);
var import_typeorm7 = require("typeorm");

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

// src/entities/user.entity.ts
var import_typeorm3 = require("typeorm");

// src/entities/country.entity.ts
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
  (0, import_typeorm2.Column)({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Country.prototype, "name", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Country.prototype, "name_ar", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Country.prototype, "tel_code", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], Country.prototype, "customer_support", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], Country.prototype, "currency", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], Country.prototype, "currency_vs_dollar", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], Country.prototype, "timezone", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)(),
  _ts_metadata2("design:type", String)
], Country.prototype, "flag_icon", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    default: false
  }),
  _ts_metadata2("design:type", Boolean)
], Country.prototype, "is_active", void 0);
Country = _ts_decorate2([
  (0, import_typeorm2.Entity)("countries")
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
    const salt = await (0, import_bcrypt.genSalt)(10);
    this.password = await (0, import_bcrypt.hash)(this.password, salt);
  }
  // Validate password
  async validatePassword(plainPassword) {
    return (0, import_bcrypt.compare)(plainPassword, this.password);
  }
};
_ts_decorate3([
  (0, import_typeorm3.Column)(),
  _ts_metadata3("design:type", String)
], User.prototype, "first_name", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)(),
  _ts_metadata3("design:type", String)
], User.prototype, "last_name", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "gender", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "birthdate", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    unique: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "email_verified_at", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    unique: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "phone", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "phone_verified_at", void 0);
_ts_decorate3([
  (0, import_typeorm3.ManyToOne)(() => Country, {
    nullable: false,
    onDelete: "NO ACTION"
  }),
  (0, import_typeorm3.JoinColumn)({
    name: "country_id"
  }),
  _ts_metadata3("design:type", typeof Country === "undefined" ? Object : Country)
], User.prototype, "country", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    select: false
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    nullable: true,
    default: "avatar.png"
  }),
  _ts_metadata3("design:type", String)
], User.prototype, "profile_img", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    type: "enum",
    enum: APP_TYPE,
    default: APP_TYPE.CLIENT
  }),
  _ts_metadata3("design:type", typeof APP_TYPE === "undefined" ? Object : APP_TYPE)
], User.prototype, "types", void 0);
_ts_decorate3([
  (0, import_typeorm3.BeforeInsert)(),
  (0, import_typeorm3.BeforeUpdate)(),
  _ts_metadata3("design:type", Function),
  _ts_metadata3("design:paramtypes", []),
  _ts_metadata3("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = _ts_decorate3([
  (0, import_typeorm3.Entity)("users")
], User);

// src/entities/orderItems.entity.ts
var import_typeorm6 = require("typeorm");

// src/entities/product.entity.ts
var import_typeorm5 = require("typeorm");

// src/entities/category.entity.ts
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
var Category = class extends BaseEntity {
  static {
    __name(this, "Category");
  }
  name;
  products;
};
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", String)
], Category.prototype, "name", void 0);
_ts_decorate4([
  (0, import_typeorm4.OneToMany)(() => Product, (product) => product.category),
  _ts_metadata4("design:type", Array)
], Category.prototype, "products", void 0);
Category = _ts_decorate4([
  (0, import_typeorm4.Entity)("categories")
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
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", String)
], Product.prototype, "name", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", String)
], Product.prototype, "sku", void 0);
_ts_decorate5([
  (0, import_typeorm5.ManyToOne)(() => Category, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm5.JoinColumn)({
    name: "category_id"
  }),
  _ts_metadata5("design:type", typeof Category === "undefined" ? Object : Category)
], Product.prototype, "category", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", Boolean)
], Product.prototype, "require_prescription", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", Number)
], Product.prototype, "price", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)(),
  _ts_metadata5("design:type", String)
], Product.prototype, "description", void 0);
Product = _ts_decorate5([
  (0, import_typeorm5.Entity)("products")
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
  (0, import_typeorm6.ManyToOne)(() => Order, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm6.JoinColumn)({
    name: "order_id"
  }),
  _ts_metadata6("design:type", typeof Order === "undefined" ? Object : Order)
], OrderItem.prototype, "order", void 0);
_ts_decorate6([
  (0, import_typeorm6.Column)(),
  _ts_metadata6("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
_ts_decorate6([
  (0, import_typeorm6.Column)(),
  _ts_metadata6("design:type", Number)
], OrderItem.prototype, "price", void 0);
_ts_decorate6([
  (0, import_typeorm6.OneToOne)(() => Product, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm6.JoinColumn)({
    name: "product_id"
  }),
  _ts_metadata6("design:type", typeof Product === "undefined" ? Object : Product)
], OrderItem.prototype, "product", void 0);
OrderItem = _ts_decorate6([
  (0, import_typeorm6.Entity)("order_items")
], OrderItem);

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
  (0, import_typeorm7.ManyToOne)(() => User, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm7.JoinColumn)({
    name: "customer_id"
  }),
  _ts_metadata7("design:type", typeof User === "undefined" ? Object : User)
], Order.prototype, "customer", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", String)
], Order.prototype, "status", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", Number)
], Order.prototype, "price", void 0);
_ts_decorate7([
  (0, import_typeorm7.OneToMany)(() => OrderItem, (orderItem) => orderItem.order),
  _ts_metadata7("design:type", Array)
], Order.prototype, "orderItems", void 0);
Order = _ts_decorate7([
  (0, import_typeorm7.Entity)("orders")
], Order);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Order
});
