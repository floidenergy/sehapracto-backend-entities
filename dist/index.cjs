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
  AdSpace: () => AdSpace,
  Admin: () => Admin,
  AdminBlogPost: () => AdminBlogPost,
  AdminBlogPostComment: () => AdminBlogPostComment,
  AdminBlogPostFavorite: () => AdminBlogPostFavorite,
  AdminBlogPostLike: () => AdminBlogPostLike,
  AnswerDoctor: () => AnswerDoctor,
  Appointment: () => Appointment,
  BlogCategory: () => BlogCategory,
  BlogPost: () => BlogPost,
  BookedOffer: () => BookedOffer,
  CartMedicine: () => CartMedicine,
  City: () => City,
  Company: () => Company,
  CompanyEmployee: () => CompanyEmployee,
  Country: () => Country,
  Degree: () => Degree,
  Department: () => Department,
  DiscountType: () => DiscountType,
  Doctor: () => Doctor,
  DoctorBlogPost: () => DoctorBlogPost,
  DoctorBlogPostComment: () => DoctorBlogPostComment,
  DoctorBlogPostFavorite: () => DoctorBlogPostFavorite,
  DoctorBlogPostLike: () => DoctorBlogPostLike,
  DoctorDepartmentService: () => DoctorDepartmentService,
  DoctorLanguage: () => DoctorLanguage,
  DoctorNotification: () => DoctorNotification,
  DoctorOnlineAppointment: () => DoctorOnlineAppointment,
  DoctorOtpPin: () => DoctorOtpPin,
  DoctorPatientConversation: () => DoctorPatientConversation,
  DoctorPatientMessage: () => DoctorPatientMessage,
  DoctorRating: () => DoctorRating,
  DoctorService: () => DoctorService,
  DoctorTransactionRecord: () => DoctorTransactionRecord,
  DoctorWorkLocation: () => DoctorWorkLocation,
  EmailVerification: () => EmailVerification,
  FailedJob: () => FailedJob,
  FavoriteDoctor: () => FavoriteDoctor,
  FavoriteHcp: () => FavoriteHcp,
  HCP: () => HCP,
  HCPLanguage: () => HCPLanguage,
  HcpAppointment: () => HcpAppointment,
  HcpBlogPost: () => HcpBlogPost,
  HcpBlogPostComment: () => HcpBlogPostComment,
  HcpBlogPostFavorite: () => HcpBlogPostFavorite,
  HcpBlogPostLike: () => HcpBlogPostLike,
  HcpNotification: () => HcpNotification,
  HcpRating: () => HcpRating,
  HcpTransactionRecord: () => HcpTransactionRecord,
  HcpWorkLocation: () => HcpWorkLocation,
  HcpWorkingHour: () => HcpWorkingHour,
  Hospital: () => Hospital,
  HospitalAdmin: () => HospitalAdmin,
  HospitalAppointment: () => HospitalAppointment,
  HospitalBranch: () => HospitalBranch,
  HospitalBranchDoctor: () => HospitalBranchDoctor,
  HospitalDepartment: () => HospitalDepartment,
  HospitalDoctor: () => HospitalDoctor,
  HospitalDoctorWorkHour: () => HospitalDoctorWorkHour,
  HospitalHcp: () => HospitalHcp,
  HospitalHcpAppointment: () => HospitalHcpAppointment,
  HospitalHcpDepartment: () => HospitalHcpDepartment,
  HospitalHcpWorkHour: () => HospitalHcpWorkHour,
  HospitalImg: () => HospitalImg,
  HospitalInsurance: () => HospitalInsurance,
  HospitalLocation: () => HospitalLocation,
  HospitalOtpPin: () => HospitalOtpPin,
  HospitalRating: () => HospitalRating,
  InsuranceCompany: () => InsuranceCompany,
  Job: () => Job,
  LabPageSlideImg: () => LabPageSlideImg,
  LabRequest: () => LabRequest,
  LabRequestTest: () => LabRequestTest,
  LabTest: () => LabTest,
  LaboratoryPage: () => LaboratoryPage,
  Language: () => Language,
  MedFaq: () => MedFaq,
  MedicalDegree: () => MedicalDegree,
  MedicalSpecialty: () => MedicalSpecialty,
  MedicalSubspecialty: () => MedicalSubspecialty,
  Medicine: () => Medicine,
  MedicineCategory: () => MedicineCategory,
  MedicinePurchaseOrder: () => MedicinePurchaseOrder,
  MedicineSubcategory: () => MedicineSubcategory,
  Membership: () => Membership,
  Offer: () => Offer,
  OfferAccessibility: () => OfferAccessibility,
  OfferCategory: () => OfferCategory,
  OfferSubCategory: () => OfferSubCategory,
  Offering: () => Offering,
  OfferingCoupon: () => OfferingCoupon,
  OfferingRating: () => OfferingRating,
  OfferingSelectedCategory: () => OfferingSelectedCategory,
  OfferingSlideImg: () => OfferingSlideImg,
  PasswordReset: () => PasswordReset,
  PatientHcpConversation: () => PatientHcpConversation,
  PatientHcpMessage: () => PatientHcpMessage,
  PersonalAccessToken: () => PersonalAccessToken,
  PharmStore: () => PharmStore,
  Pharmacy: () => Pharmacy,
  PopupAd: () => PopupAd,
  Practice: () => Practice,
  PracticeDoctor: () => PracticeDoctor,
  PracticeInsurance: () => PracticeInsurance,
  PracticeLocation: () => PracticeLocation,
  Province: () => Province,
  PurchasedMedicine: () => PurchasedMedicine,
  QuestionDoctor: () => QuestionDoctor,
  Reminder: () => Reminder,
  RewardPoints: () => RewardPoints,
  ServiceProvider: () => ServiceProvider,
  ServiceProviderAccessability: () => ServiceProviderAccessability,
  Session: () => Session,
  Slide: () => Slide,
  SlideImage: () => SlideImage,
  SlideService: () => SlideService,
  Specialty: () => Specialty,
  Transaction: () => Transaction,
  User: () => User,
  UserCoupon: () => UserCoupon,
  UserNotification: () => UserNotification,
  UserOtpPin: () => UserOtpPin,
  UserPoints: () => UserPoints,
  UserTransactionRecord: () => UserTransactionRecord,
  WorkingHour: () => WorkingHour
});
module.exports = __toCommonJS(index_exports);

// src/entity/admin.entity.ts
var import_typeorm3 = require("typeorm");

// src/entity/country.entity.ts
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
var Country = class {
  static {
    __name(this, "Country");
  }
  id;
  name;
  name_ar;
  tel_code;
  customer_support;
  currency;
  currency_vs_dollar;
  timezone;
  flag_icon;
  is_active;
  created_at;
  updated_at;
};
_ts_decorate([
  (0, import_typeorm.PrimaryGeneratedColumn)(),
  _ts_metadata("design:type", Number)
], Country.prototype, "id", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "name", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "name_ar", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "tel_code", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "customer_support", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "currency", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "currency_vs_dollar", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    unique: true
  }),
  _ts_metadata("design:type", String)
], Country.prototype, "timezone", void 0);
_ts_decorate([
  (0, import_typeorm.Column)(),
  _ts_metadata("design:type", String)
], Country.prototype, "flag_icon", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    default: false
  }),
  _ts_metadata("design:type", Boolean)
], Country.prototype, "is_active", void 0);
_ts_decorate([
  (0, import_typeorm.CreateDateColumn)(),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Country.prototype, "created_at", void 0);
_ts_decorate([
  (0, import_typeorm.UpdateDateColumn)(),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Country.prototype, "updated_at", void 0);
Country = _ts_decorate([
  (0, import_typeorm.Entity)("countries")
], Country);

// src/entity/department.entity.ts
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
var Department = class {
  static {
    __name(this, "Department");
  }
  id;
  name;
  createdAt;
  updatedAt;
};
_ts_decorate2([
  (0, import_typeorm2.PrimaryGeneratedColumn)(),
  _ts_metadata2("design:type", Number)
], Department.prototype, "id", void 0);
_ts_decorate2([
  (0, import_typeorm2.Column)({
    unique: true
  }),
  _ts_metadata2("design:type", String)
], Department.prototype, "name", void 0);
_ts_decorate2([
  (0, import_typeorm2.CreateDateColumn)(),
  _ts_metadata2("design:type", typeof Date === "undefined" ? Object : Date)
], Department.prototype, "createdAt", void 0);
_ts_decorate2([
  (0, import_typeorm2.UpdateDateColumn)(),
  _ts_metadata2("design:type", typeof Date === "undefined" ? Object : Date)
], Department.prototype, "updatedAt", void 0);
Department = _ts_decorate2([
  (0, import_typeorm2.Entity)("departments")
], Department);

// src/entity/admin.entity.ts
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
var Admin = class {
  static {
    __name(this, "Admin");
  }
  id;
  // @ManyToOne(() => Department, (department) => department.id, { onDelete: 'CASCADE', })
  department_id;
  name;
  email;
  password;
  profile_img;
  phone;
  country_id;
  is_active;
  can_read_slide;
  can_add_slide;
  can_view_country;
  can_add_countries;
  can_view_doctor;
  can_edit_doctor;
  can_view_hcp;
  can_edit_hcp;
  can_view_hospital;
  can_edit_hospital;
  can_view_patient;
  can_view_offer;
  can_edit_offer;
  can_view_notification;
  can_edit_translation;
  is_translator;
  can_view_blog;
  can_edit_blog;
  can_view_lab_page;
  can_view_lab_test;
  can_view_lab_request;
  created_at;
  updated_at;
};
_ts_decorate3([
  (0, import_typeorm3.PrimaryGeneratedColumn)(),
  _ts_metadata3("design:type", Number)
], Admin.prototype, "id", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    type: "integer"
  }),
  _ts_metadata3("design:type", typeof Department === "undefined" ? Object : Department)
], Admin.prototype, "department_id", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)(),
  _ts_metadata3("design:type", String)
], Admin.prototype, "name", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    unique: true
  }),
  _ts_metadata3("design:type", String)
], Admin.prototype, "email", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    select: false
  }),
  _ts_metadata3("design:type", String)
], Admin.prototype, "password", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: "https://s3.us-east-2.amazonaws.com/sehapracto-images/user_profile_images/Pc7bLYpjW2c56Jnb8ovCq3ZrA3rO8vPEL0j4ZsXH.jpg"
  }),
  _ts_metadata3("design:type", String)
], Admin.prototype, "profile_img", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)(),
  _ts_metadata3("design:type", String)
], Admin.prototype, "phone", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    type: "integer"
  }),
  _ts_metadata3("design:type", typeof Country === "undefined" ? Object : Country)
], Admin.prototype, "country_id", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "is_active", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_read_slide", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_add_slide", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_country", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_add_countries", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_doctor", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_edit_doctor", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_hcp", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_edit_hcp", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_hospital", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_edit_hospital", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_patient", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_offer", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_edit_offer", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_notification", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_edit_translation", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "is_translator", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_blog", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_edit_blog", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_lab_page", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_lab_test", void 0);
_ts_decorate3([
  (0, import_typeorm3.Column)({
    default: false
  }),
  _ts_metadata3("design:type", Boolean)
], Admin.prototype, "can_view_lab_request", void 0);
_ts_decorate3([
  (0, import_typeorm3.CreateDateColumn)(),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "created_at", void 0);
_ts_decorate3([
  (0, import_typeorm3.UpdateDateColumn)(),
  _ts_metadata3("design:type", typeof Date === "undefined" ? Object : Date)
], Admin.prototype, "updated_at", void 0);
Admin = _ts_decorate3([
  (0, import_typeorm3.Entity)("admins")
], Admin);

// src/entity/adminBlogPostComment.entity.ts
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
var AdminBlogPostComment = class {
  static {
    __name(this, "AdminBlogPostComment");
  }
  id;
  adminBlogPostId;
  userId;
  content;
  createdAt;
  updatedAt;
};
_ts_decorate4([
  (0, import_typeorm4.PrimaryGeneratedColumn)(),
  _ts_metadata4("design:type", Number)
], AdminBlogPostComment.prototype, "id", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", Number)
], AdminBlogPostComment.prototype, "adminBlogPostId", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)(),
  _ts_metadata4("design:type", Number)
], AdminBlogPostComment.prototype, "userId", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)("text"),
  _ts_metadata4("design:type", String)
], AdminBlogPostComment.prototype, "content", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], AdminBlogPostComment.prototype, "createdAt", void 0);
_ts_decorate4([
  (0, import_typeorm4.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata4("design:type", typeof Date === "undefined" ? Object : Date)
], AdminBlogPostComment.prototype, "updatedAt", void 0);
AdminBlogPostComment = _ts_decorate4([
  (0, import_typeorm4.Entity)("admin_blog_post_comments")
], AdminBlogPostComment);

// src/entity/adminBlogPostFavorite.entity.ts
var import_typeorm5 = require("typeorm");
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
var AdminBlogPostFavorite = class {
  static {
    __name(this, "AdminBlogPostFavorite");
  }
  id;
  adminBlogPostId;
  userId;
  createdAt;
  updatedAt;
};
_ts_decorate5([
  (0, import_typeorm5.PrimaryGeneratedColumn)(),
  _ts_metadata5("design:type", Number)
], AdminBlogPostFavorite.prototype, "id", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    type: "int"
  }),
  _ts_metadata5("design:type", Number)
], AdminBlogPostFavorite.prototype, "adminBlogPostId", void 0);
_ts_decorate5([
  (0, import_typeorm5.Column)({
    type: "int"
  }),
  _ts_metadata5("design:type", Number)
], AdminBlogPostFavorite.prototype, "userId", void 0);
_ts_decorate5([
  (0, import_typeorm5.CreateDateColumn)(),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], AdminBlogPostFavorite.prototype, "createdAt", void 0);
_ts_decorate5([
  (0, import_typeorm5.UpdateDateColumn)(),
  _ts_metadata5("design:type", typeof Date === "undefined" ? Object : Date)
], AdminBlogPostFavorite.prototype, "updatedAt", void 0);
AdminBlogPostFavorite = _ts_decorate5([
  (0, import_typeorm5.Entity)("admin_blog_post_favorites")
], AdminBlogPostFavorite);

// src/entity/adminBlogPostLike.entity.ts
var import_typeorm6 = require("typeorm");
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
var AdminBlogPostLike = class {
  static {
    __name(this, "AdminBlogPostLike");
  }
  id;
  adminBlogPostId;
  userId;
  createdAt;
  updatedAt;
};
_ts_decorate6([
  (0, import_typeorm6.PrimaryGeneratedColumn)(),
  _ts_metadata6("design:type", Number)
], AdminBlogPostLike.prototype, "id", void 0);
_ts_decorate6([
  (0, import_typeorm6.Column)({
    type: "int"
  }),
  _ts_metadata6("design:type", Number)
], AdminBlogPostLike.prototype, "adminBlogPostId", void 0);
_ts_decorate6([
  (0, import_typeorm6.Column)({
    type: "int"
  }),
  _ts_metadata6("design:type", Number)
], AdminBlogPostLike.prototype, "userId", void 0);
_ts_decorate6([
  (0, import_typeorm6.CreateDateColumn)(),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], AdminBlogPostLike.prototype, "createdAt", void 0);
_ts_decorate6([
  (0, import_typeorm6.UpdateDateColumn)(),
  _ts_metadata6("design:type", typeof Date === "undefined" ? Object : Date)
], AdminBlogPostLike.prototype, "updatedAt", void 0);
AdminBlogPostLike = _ts_decorate6([
  (0, import_typeorm6.Entity)("admin_blog_post_likes")
], AdminBlogPostLike);

// src/entity/adminBlogPost.entity.ts
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
var AdminBlogPost = class {
  static {
    __name(this, "AdminBlogPost");
  }
  id;
  countryId;
  blogCategoryId;
  medicalSpecialtyId;
  specialtyId;
  author;
  slug;
  img;
  youtubeLink;
  title;
  content;
  metadata;
  keywords;
  language;
  views;
  isApproved;
  createdAt;
  updatedAt;
};
_ts_decorate7([
  (0, import_typeorm7.PrimaryGeneratedColumn)(),
  _ts_metadata7("design:type", Number)
], AdminBlogPost.prototype, "id", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", Number)
], AdminBlogPost.prototype, "countryId", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", Number)
], AdminBlogPost.prototype, "blogCategoryId", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    nullable: true
  }),
  _ts_metadata7("design:type", Number)
], AdminBlogPost.prototype, "medicalSpecialtyId", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    nullable: true
  }),
  _ts_metadata7("design:type", Number)
], AdminBlogPost.prototype, "specialtyId", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    default: "SehaPracto"
  }),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "author", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    nullable: true,
    unique: true
  }),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "slug", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "img", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "youtubeLink", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "title", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)("text"),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "content", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)("text", {
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "metadata", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)("text", {
    nullable: true
  }),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "keywords", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)(),
  _ts_metadata7("design:type", String)
], AdminBlogPost.prototype, "language", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    default: 0
  }),
  _ts_metadata7("design:type", Number)
], AdminBlogPost.prototype, "views", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    default: false
  }),
  _ts_metadata7("design:type", Boolean)
], AdminBlogPost.prototype, "isApproved", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata7("design:type", typeof Date === "undefined" ? Object : Date)
], AdminBlogPost.prototype, "createdAt", void 0);
_ts_decorate7([
  (0, import_typeorm7.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata7("design:type", typeof Date === "undefined" ? Object : Date)
], AdminBlogPost.prototype, "updatedAt", void 0);
AdminBlogPost = _ts_decorate7([
  (0, import_typeorm7.Entity)("admin_blog_posts")
], AdminBlogPost);

// src/entity/adSpace.entity.ts
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
var AdSpace = class {
  static {
    __name(this, "AdSpace");
  }
  id;
  countryId;
  location;
  type;
  url;
  action;
  createdAt;
  updatedAt;
};
_ts_decorate8([
  (0, import_typeorm8.PrimaryGeneratedColumn)(),
  _ts_metadata8("design:type", Number)
], AdSpace.prototype, "id", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    type: "int"
  }),
  _ts_metadata8("design:type", Number)
], AdSpace.prototype, "countryId", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata8("design:type", String)
], AdSpace.prototype, "location", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata8("design:type", String)
], AdSpace.prototype, "type", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata8("design:type", String)
], AdSpace.prototype, "url", void 0);
_ts_decorate8([
  (0, import_typeorm8.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata8("design:type", Object)
], AdSpace.prototype, "action", void 0);
_ts_decorate8([
  (0, import_typeorm8.CreateDateColumn)(),
  _ts_metadata8("design:type", typeof Date === "undefined" ? Object : Date)
], AdSpace.prototype, "createdAt", void 0);
_ts_decorate8([
  (0, import_typeorm8.UpdateDateColumn)(),
  _ts_metadata8("design:type", typeof Date === "undefined" ? Object : Date)
], AdSpace.prototype, "updatedAt", void 0);
AdSpace = _ts_decorate8([
  (0, import_typeorm8.Entity)("ad_spaces")
], AdSpace);

// src/entity/answerDoctor.entity.ts
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
var AnswerDoctor = class {
  static {
    __name(this, "AnswerDoctor");
  }
  id;
  questionDoctorId;
  doctorId;
  content;
  createdAt;
  updatedAt;
};
_ts_decorate9([
  (0, import_typeorm9.PrimaryGeneratedColumn)(),
  _ts_metadata9("design:type", Number)
], AnswerDoctor.prototype, "id", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)(),
  _ts_metadata9("design:type", Number)
], AnswerDoctor.prototype, "questionDoctorId", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)(),
  _ts_metadata9("design:type", Number)
], AnswerDoctor.prototype, "doctorId", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)("text"),
  _ts_metadata9("design:type", String)
], AnswerDoctor.prototype, "content", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata9("design:type", typeof Date === "undefined" ? Object : Date)
], AnswerDoctor.prototype, "createdAt", void 0);
_ts_decorate9([
  (0, import_typeorm9.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata9("design:type", typeof Date === "undefined" ? Object : Date)
], AnswerDoctor.prototype, "updatedAt", void 0);
AnswerDoctor = _ts_decorate9([
  (0, import_typeorm9.Entity)("answer_doctors")
], AnswerDoctor);

// src/entity/appointment.entity.ts
var import_typeorm13 = require("typeorm");

// src/entity/user.entity.ts
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
var User = class {
  static {
    __name(this, "User");
  }
  id;
  unique_id;
  refferal_code;
  refferar_code;
  first_name;
  last_name;
  gender;
  birthdate;
  email;
  email_verified_at;
  phone;
  phone_verified_at;
  balance;
  password;
  profile_img;
  blood_group;
  medical_history;
  is_diabetic;
  is_hypertensive;
  is_smoker;
  is_alcoholic;
  id_number;
  height;
  weight;
  country_id;
  city_id;
  insurance_company_id;
  address;
  provider;
  provider_id;
  membership_type;
  membership_id;
  membership_number;
  membership_points;
  membership_start_date;
  membership_end_date;
  offers_saved_amount;
  is_active;
  can_start_trial;
  is_trial;
  fcm_token;
  is_to_delete;
  delete_date;
  is_deleted;
  created_at;
  updated_at;
};
_ts_decorate10([
  (0, import_typeorm10.PrimaryGeneratedColumn)(),
  _ts_metadata10("design:type", Number)
], User.prototype, "id", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    unique: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "unique_id", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    unique: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "refferal_code", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    unique: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "refferar_code", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)(),
  _ts_metadata10("design:type", String)
], User.prototype, "first_name", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)(),
  _ts_metadata10("design:type", String)
], User.prototype, "last_name", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "gender", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    type: "date",
    nullable: true
  }),
  _ts_metadata10("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "birthdate", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    unique: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata10("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "email_verified_at", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    unique: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "phone", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata10("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "phone_verified_at", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: 0
  }),
  _ts_metadata10("design:type", Number)
], User.prototype, "balance", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)(),
  _ts_metadata10("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true,
    default: "avatar.png"
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "profile_img", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "blood_group", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)("text", {
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "medical_history", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: false
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "is_diabetic", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: false
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "is_hypertensive", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: false
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "is_smoker", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: false
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "is_alcoholic", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "id_number", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: 0
  }),
  _ts_metadata10("design:type", Number)
], User.prototype, "height", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: 0
  }),
  _ts_metadata10("design:type", Number)
], User.prototype, "weight", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)(),
  _ts_metadata10("design:type", String)
], User.prototype, "country_id", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "city_id", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", Number)
], User.prototype, "insurance_company_id", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)("text", {
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "address", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "provider", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "provider_id", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: "free"
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "membership_type", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "membership_id", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "membership_number", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: 0
  }),
  _ts_metadata10("design:type", Number)
], User.prototype, "membership_points", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata10("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "membership_start_date", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata10("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "membership_end_date", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: 0
  }),
  _ts_metadata10("design:type", Number)
], User.prototype, "offers_saved_amount", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: true
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "is_active", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: true
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "can_start_trial", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: false
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "is_trial", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    nullable: true
  }),
  _ts_metadata10("design:type", String)
], User.prototype, "fcm_token", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: false,
    nullable: true
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "is_to_delete", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata10("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "delete_date", void 0);
_ts_decorate10([
  (0, import_typeorm10.Column)({
    default: false
  }),
  _ts_metadata10("design:type", Boolean)
], User.prototype, "is_deleted", void 0);
_ts_decorate10([
  (0, import_typeorm10.CreateDateColumn)(),
  _ts_metadata10("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "created_at", void 0);
_ts_decorate10([
  (0, import_typeorm10.UpdateDateColumn)(),
  _ts_metadata10("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "updated_at", void 0);
User = _ts_decorate10([
  (0, import_typeorm10.Entity)("users")
], User);

// src/entity/doctor.entity.ts
var import_typeorm12 = require("typeorm");

// src/entity/city.entity.ts
var import_typeorm11 = require("typeorm");
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
var City = class {
  static {
    __name(this, "City");
  }
  id;
  country;
  name;
  name_ar;
  created_at;
  updated_at;
};
_ts_decorate11([
  (0, import_typeorm11.PrimaryGeneratedColumn)(),
  _ts_metadata11("design:type", Number)
], City.prototype, "id", void 0);
_ts_decorate11([
  (0, import_typeorm11.ManyToOne)(() => Country, (country) => country.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata11("design:type", typeof Country === "undefined" ? Object : Country)
], City.prototype, "country", void 0);
_ts_decorate11([
  (0, import_typeorm11.Column)({
    unique: true
  }),
  _ts_metadata11("design:type", String)
], City.prototype, "name", void 0);
_ts_decorate11([
  (0, import_typeorm11.Column)({
    unique: true
  }),
  _ts_metadata11("design:type", String)
], City.prototype, "name_ar", void 0);
_ts_decorate11([
  (0, import_typeorm11.CreateDateColumn)(),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], City.prototype, "created_at", void 0);
_ts_decorate11([
  (0, import_typeorm11.UpdateDateColumn)(),
  _ts_metadata11("design:type", typeof Date === "undefined" ? Object : Date)
], City.prototype, "updated_at", void 0);
City = _ts_decorate11([
  (0, import_typeorm11.Entity)("cities")
], City);

// src/entity/doctor.entity.ts
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
var Doctor = class {
  static {
    __name(this, "Doctor");
  }
  id;
  unique_id;
  title;
  first_name;
  first_name_ar;
  first_name_en;
  first_name_tr;
  last_name;
  last_name_ar;
  last_name_en;
  last_name_tr;
  gender;
  birthdate;
  email;
  email_verified_at;
  phone;
  phone_verified_at;
  examination_fee;
  home_examination_fee;
  online_examination_fee;
  license_no;
  waiting_time;
  balance;
  password;
  profile_img;
  address;
  address_ar;
  address_en;
  address_tr;
  longitude;
  latitude;
  meta_title;
  meta_desc;
  bio;
  bio_ar;
  bio_en;
  bio_tr;
  pt_instruction;
  medicalSpecialty_id;
  medical_subspecialty_id;
  country;
  city;
  provider;
  provider_id;
  rating;
  number_ratings;
  is_active;
  is_available;
  is_available_online;
  is_en;
  is_ar;
  fcm_token;
  is_to_delete;
  delete_date;
  is_deleted;
  created_at;
  updated_at;
};
_ts_decorate12([
  (0, import_typeorm12.PrimaryGeneratedColumn)(),
  _ts_metadata12("design:type", Number)
], Doctor.prototype, "id", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    unique: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "unique_id", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: "Dr."
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "title", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)(),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "first_name", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "first_name_ar", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "first_name_en", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "first_name_tr", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)(),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "last_name", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "last_name_ar", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "last_name_en", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "last_name_tr", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "gender", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "date",
    nullable: true
  }),
  _ts_metadata12("design:type", typeof Date === "undefined" ? Object : Date)
], Doctor.prototype, "birthdate", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    unique: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "email", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata12("design:type", typeof Date === "undefined" ? Object : Date)
], Doctor.prototype, "email_verified_at", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    unique: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "phone", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata12("design:type", typeof Date === "undefined" ? Object : Date)
], Doctor.prototype, "phone_verified_at", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "examination_fee", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "home_examination_fee", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "online_examination_fee", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "license_no", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "waiting_time", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: 0
  }),
  _ts_metadata12("design:type", Number)
], Doctor.prototype, "balance", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)(),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "password", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true,
    default: "https://sehapracto-images.s3.us-east-2.amazonaws.com/newavatar.png"
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "profile_img", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "address", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "address_ar", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "address_en", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "address_tr", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "double precision",
    nullable: true
  }),
  _ts_metadata12("design:type", Number)
], Doctor.prototype, "longitude", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "double precision",
    nullable: true
  }),
  _ts_metadata12("design:type", Number)
], Doctor.prototype, "latitude", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "meta_title", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "meta_desc", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "bio", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "bio_ar", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "bio_en", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "bio_tr", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "pt_instruction", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", Number)
], Doctor.prototype, "medicalSpecialty_id", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", Number)
], Doctor.prototype, "medical_subspecialty_id", void 0);
_ts_decorate12([
  (0, import_typeorm12.ManyToOne)(() => Country, (country) => country.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata12("design:type", typeof Country === "undefined" ? Object : Country)
], Doctor.prototype, "country", void 0);
_ts_decorate12([
  (0, import_typeorm12.ManyToOne)(() => City, (city) => city.id, {
    nullable: true,
    onDelete: "SET NULL"
  }),
  _ts_metadata12("design:type", typeof City === "undefined" ? Object : City)
], Doctor.prototype, "city", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "provider", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "provider_id", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: 0
  }),
  _ts_metadata12("design:type", Number)
], Doctor.prototype, "rating", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: 0
  }),
  _ts_metadata12("design:type", Number)
], Doctor.prototype, "number_ratings", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: false
  }),
  _ts_metadata12("design:type", Boolean)
], Doctor.prototype, "is_active", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: false
  }),
  _ts_metadata12("design:type", Boolean)
], Doctor.prototype, "is_available", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: false
  }),
  _ts_metadata12("design:type", Boolean)
], Doctor.prototype, "is_available_online", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: false
  }),
  _ts_metadata12("design:type", Boolean)
], Doctor.prototype, "is_en", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: false
  }),
  _ts_metadata12("design:type", Boolean)
], Doctor.prototype, "is_ar", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    nullable: true
  }),
  _ts_metadata12("design:type", String)
], Doctor.prototype, "fcm_token", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: false,
    nullable: true
  }),
  _ts_metadata12("design:type", Boolean)
], Doctor.prototype, "is_to_delete", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata12("design:type", typeof Date === "undefined" ? Object : Date)
], Doctor.prototype, "delete_date", void 0);
_ts_decorate12([
  (0, import_typeorm12.Column)({
    default: false
  }),
  _ts_metadata12("design:type", Boolean)
], Doctor.prototype, "is_deleted", void 0);
_ts_decorate12([
  (0, import_typeorm12.CreateDateColumn)(),
  _ts_metadata12("design:type", typeof Date === "undefined" ? Object : Date)
], Doctor.prototype, "created_at", void 0);
_ts_decorate12([
  (0, import_typeorm12.UpdateDateColumn)(),
  _ts_metadata12("design:type", typeof Date === "undefined" ? Object : Date)
], Doctor.prototype, "updated_at", void 0);
Doctor = _ts_decorate12([
  (0, import_typeorm12.Entity)("doctors")
], Doctor);

// src/entity/appointment.entity.ts
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
var Appointment = class {
  static {
    __name(this, "Appointment");
  }
  id;
  user;
  doctor;
  start;
  end;
  type;
  date;
  date_time_stamp;
  is_approved;
  is_finished;
  is_rejected;
  status;
  is_rated;
  rating;
  rating_comment;
  reason_to_reject;
  created_at;
  updated_at;
};
_ts_decorate13([
  (0, import_typeorm13.PrimaryGeneratedColumn)(),
  _ts_metadata13("design:type", Number)
], Appointment.prototype, "id", void 0);
_ts_decorate13([
  (0, import_typeorm13.ManyToOne)(() => User, (user) => user.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata13("design:type", typeof User === "undefined" ? Object : User)
], Appointment.prototype, "user", void 0);
_ts_decorate13([
  (0, import_typeorm13.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata13("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], Appointment.prototype, "doctor", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "varchar"
  }),
  _ts_metadata13("design:type", String)
], Appointment.prototype, "start", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "varchar"
  }),
  _ts_metadata13("design:type", String)
], Appointment.prototype, "end", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "varchar"
  }),
  _ts_metadata13("design:type", String)
], Appointment.prototype, "type", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "varchar"
  }),
  _ts_metadata13("design:type", String)
], Appointment.prototype, "date", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Appointment.prototype, "date_time_stamp", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata13("design:type", Boolean)
], Appointment.prototype, "is_approved", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata13("design:type", Boolean)
], Appointment.prototype, "is_finished", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata13("design:type", Boolean)
], Appointment.prototype, "is_rejected", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata13("design:type", Number)
], Appointment.prototype, "status", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata13("design:type", Boolean)
], Appointment.prototype, "is_rated", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata13("design:type", Number)
], Appointment.prototype, "rating", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata13("design:type", String)
], Appointment.prototype, "rating_comment", void 0);
_ts_decorate13([
  (0, import_typeorm13.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata13("design:type", String)
], Appointment.prototype, "reason_to_reject", void 0);
_ts_decorate13([
  (0, import_typeorm13.CreateDateColumn)(),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Appointment.prototype, "created_at", void 0);
_ts_decorate13([
  (0, import_typeorm13.UpdateDateColumn)(),
  _ts_metadata13("design:type", typeof Date === "undefined" ? Object : Date)
], Appointment.prototype, "updated_at", void 0);
Appointment = _ts_decorate13([
  (0, import_typeorm13.Entity)("appointments")
], Appointment);

// src/entity/blogCategory.entity.ts
var import_typeorm14 = require("typeorm");
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
var BlogCategory = class {
  static {
    __name(this, "BlogCategory");
  }
  id;
  name_ar;
  name_en;
  name_tr;
  created_at;
  updated_at;
};
_ts_decorate14([
  (0, import_typeorm14.PrimaryGeneratedColumn)(),
  _ts_metadata14("design:type", Number)
], BlogCategory.prototype, "id", void 0);
_ts_decorate14([
  (0, import_typeorm14.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata14("design:type", String)
], BlogCategory.prototype, "name_ar", void 0);
_ts_decorate14([
  (0, import_typeorm14.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata14("design:type", String)
], BlogCategory.prototype, "name_en", void 0);
_ts_decorate14([
  (0, import_typeorm14.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata14("design:type", String)
], BlogCategory.prototype, "name_tr", void 0);
_ts_decorate14([
  (0, import_typeorm14.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata14("design:type", typeof Date === "undefined" ? Object : Date)
], BlogCategory.prototype, "created_at", void 0);
_ts_decorate14([
  (0, import_typeorm14.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata14("design:type", typeof Date === "undefined" ? Object : Date)
], BlogCategory.prototype, "updated_at", void 0);
BlogCategory = _ts_decorate14([
  (0, import_typeorm14.Entity)("blog_categories")
], BlogCategory);

// src/entity/blogPost.entity.ts
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
var BlogPost = class {
  static {
    __name(this, "BlogPost");
  }
  id;
  countryId;
  blogCategoryId;
  author;
  slug;
  img;
  youtubeLink;
  title;
  content;
  metadata;
  keywords;
  language;
  views;
  isApproved;
  createdAt;
  updatedAt;
};
_ts_decorate15([
  (0, import_typeorm15.PrimaryGeneratedColumn)(),
  _ts_metadata15("design:type", Number)
], BlogPost.prototype, "id", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)(),
  _ts_metadata15("design:type", Number)
], BlogPost.prototype, "countryId", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)(),
  _ts_metadata15("design:type", Number)
], BlogPost.prototype, "blogCategoryId", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)(),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "author", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)({
    nullable: true,
    unique: true
  }),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "slug", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)(),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "img", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)({
    nullable: true
  }),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "youtubeLink", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)(),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "title", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)("text"),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "content", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)("text", {
    nullable: true
  }),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "metadata", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)("text", {
    nullable: true
  }),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "keywords", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)(),
  _ts_metadata15("design:type", String)
], BlogPost.prototype, "language", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)({
    default: 0
  }),
  _ts_metadata15("design:type", Number)
], BlogPost.prototype, "views", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)({
    default: false
  }),
  _ts_metadata15("design:type", Boolean)
], BlogPost.prototype, "isApproved", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata15("design:type", typeof Date === "undefined" ? Object : Date)
], BlogPost.prototype, "createdAt", void 0);
_ts_decorate15([
  (0, import_typeorm15.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata15("design:type", typeof Date === "undefined" ? Object : Date)
], BlogPost.prototype, "updatedAt", void 0);
BlogPost = _ts_decorate15([
  (0, import_typeorm15.Entity)("blog_posts")
], BlogPost);

// src/entity/bookedOffer.entity.ts
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
var BookedOffer = class {
  static {
    __name(this, "BookedOffer");
  }
  id;
  offerId;
  userId;
  price;
  currency;
  paymentType;
  isPaid;
  status;
  createdAt;
  updatedAt;
};
_ts_decorate16([
  (0, import_typeorm16.PrimaryGeneratedColumn)(),
  _ts_metadata16("design:type", Number)
], BookedOffer.prototype, "id", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)("int"),
  _ts_metadata16("design:type", Number)
], BookedOffer.prototype, "offerId", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)("int"),
  _ts_metadata16("design:type", Number)
], BookedOffer.prototype, "userId", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)("int"),
  _ts_metadata16("design:type", Number)
], BookedOffer.prototype, "price", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)("varchar"),
  _ts_metadata16("design:type", String)
], BookedOffer.prototype, "currency", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)("varchar"),
  _ts_metadata16("design:type", String)
], BookedOffer.prototype, "paymentType", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)("boolean"),
  _ts_metadata16("design:type", Boolean)
], BookedOffer.prototype, "isPaid", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)("int", {
    default: 0
  }),
  _ts_metadata16("design:type", Number)
], BookedOffer.prototype, "status", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata16("design:type", typeof Date === "undefined" ? Object : Date)
], BookedOffer.prototype, "createdAt", void 0);
_ts_decorate16([
  (0, import_typeorm16.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata16("design:type", typeof Date === "undefined" ? Object : Date)
], BookedOffer.prototype, "updatedAt", void 0);
BookedOffer = _ts_decorate16([
  (0, import_typeorm16.Entity)("booked_offers")
], BookedOffer);

// src/entity/cartMedicine.entity.ts
var import_typeorm20 = require("typeorm");

// src/entity/medicine.entity.ts
var import_typeorm19 = require("typeorm");

// src/entity/medicineSubcategory.entity.ts
var import_typeorm18 = require("typeorm");

// src/entity/medicineCategory.entity.ts
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
var MedicineCategory = class {
  static {
    __name(this, "MedicineCategory");
  }
  id;
  nameAr;
  nameEn;
  nameTr;
  img;
  createdAt;
  updatedAt;
};
_ts_decorate17([
  (0, import_typeorm17.PrimaryGeneratedColumn)(),
  _ts_metadata17("design:type", Number)
], MedicineCategory.prototype, "id", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)({
    type: "varchar",
    length: 255,
    unique: true
  }),
  _ts_metadata17("design:type", String)
], MedicineCategory.prototype, "nameAr", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)({
    type: "varchar",
    length: 255,
    unique: true
  }),
  _ts_metadata17("design:type", String)
], MedicineCategory.prototype, "nameEn", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)({
    type: "varchar",
    length: 255,
    unique: true
  }),
  _ts_metadata17("design:type", String)
], MedicineCategory.prototype, "nameTr", void 0);
_ts_decorate17([
  (0, import_typeorm17.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata17("design:type", String)
], MedicineCategory.prototype, "img", void 0);
_ts_decorate17([
  (0, import_typeorm17.CreateDateColumn)(),
  _ts_metadata17("design:type", typeof Date === "undefined" ? Object : Date)
], MedicineCategory.prototype, "createdAt", void 0);
_ts_decorate17([
  (0, import_typeorm17.UpdateDateColumn)(),
  _ts_metadata17("design:type", typeof Date === "undefined" ? Object : Date)
], MedicineCategory.prototype, "updatedAt", void 0);
MedicineCategory = _ts_decorate17([
  (0, import_typeorm17.Entity)("medicine_categories")
], MedicineCategory);

// src/entity/medicineSubcategory.entity.ts
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
var MedicineSubcategory = class {
  static {
    __name(this, "MedicineSubcategory");
  }
  id;
  medicineCategory;
  nameEn;
  nameAr;
  nameTr;
  img;
  createdAt;
  updatedAt;
};
_ts_decorate18([
  (0, import_typeorm18.PrimaryGeneratedColumn)(),
  _ts_metadata18("design:type", Number)
], MedicineSubcategory.prototype, "id", void 0);
_ts_decorate18([
  (0, import_typeorm18.ManyToOne)(() => MedicineCategory, (category) => category.id, {
    onDelete: "CASCADE"
  }),
  (0, import_typeorm18.JoinColumn)({
    name: "medicine_category_id"
  }),
  _ts_metadata18("design:type", typeof MedicineCategory === "undefined" ? Object : MedicineCategory)
], MedicineSubcategory.prototype, "medicineCategory", void 0);
_ts_decorate18([
  (0, import_typeorm18.Column)({
    type: "varchar",
    length: 255,
    unique: true
  }),
  _ts_metadata18("design:type", String)
], MedicineSubcategory.prototype, "nameEn", void 0);
_ts_decorate18([
  (0, import_typeorm18.Column)({
    type: "varchar",
    length: 255,
    unique: true
  }),
  _ts_metadata18("design:type", String)
], MedicineSubcategory.prototype, "nameAr", void 0);
_ts_decorate18([
  (0, import_typeorm18.Column)({
    type: "varchar",
    length: 255,
    unique: true
  }),
  _ts_metadata18("design:type", String)
], MedicineSubcategory.prototype, "nameTr", void 0);
_ts_decorate18([
  (0, import_typeorm18.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata18("design:type", String)
], MedicineSubcategory.prototype, "img", void 0);
_ts_decorate18([
  (0, import_typeorm18.CreateDateColumn)(),
  _ts_metadata18("design:type", typeof Date === "undefined" ? Object : Date)
], MedicineSubcategory.prototype, "createdAt", void 0);
_ts_decorate18([
  (0, import_typeorm18.UpdateDateColumn)(),
  _ts_metadata18("design:type", typeof Date === "undefined" ? Object : Date)
], MedicineSubcategory.prototype, "updatedAt", void 0);
MedicineSubcategory = _ts_decorate18([
  (0, import_typeorm18.Entity)("medicine_subcategories")
], MedicineSubcategory);

// src/entity/medicine.entity.ts
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
var Medicine = class {
  static {
    __name(this, "Medicine");
  }
  id;
  country;
  medicineSubcategory;
  nameEn;
  nameAr;
  nameTr;
  scientificName;
  routeAdmin;
  img;
  descriptionEn;
  descriptionAr;
  descriptionTr;
  price;
  isOtc;
  isAvailable;
  createdAt;
  updatedAt;
};
_ts_decorate19([
  (0, import_typeorm19.PrimaryGeneratedColumn)(),
  _ts_metadata19("design:type", Number)
], Medicine.prototype, "id", void 0);
_ts_decorate19([
  (0, import_typeorm19.ManyToOne)(() => Country, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata19("design:type", typeof Country === "undefined" ? Object : Country)
], Medicine.prototype, "country", void 0);
_ts_decorate19([
  (0, import_typeorm19.ManyToOne)(() => MedicineSubcategory, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata19("design:type", typeof MedicineSubcategory === "undefined" ? Object : MedicineSubcategory)
], Medicine.prototype, "medicineSubcategory", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)({
    unique: true
  }),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "nameEn", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)({
    unique: true
  }),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "nameAr", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)({
    unique: true
  }),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "nameTr", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)(),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "scientificName", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)(),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "routeAdmin", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)(),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "img", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)("text"),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "descriptionEn", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)("text"),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "descriptionAr", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)("text"),
  _ts_metadata19("design:type", String)
], Medicine.prototype, "descriptionTr", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata19("design:type", Number)
], Medicine.prototype, "price", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata19("design:type", Boolean)
], Medicine.prototype, "isOtc", void 0);
_ts_decorate19([
  (0, import_typeorm19.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata19("design:type", Boolean)
], Medicine.prototype, "isAvailable", void 0);
_ts_decorate19([
  (0, import_typeorm19.CreateDateColumn)(),
  _ts_metadata19("design:type", typeof Date === "undefined" ? Object : Date)
], Medicine.prototype, "createdAt", void 0);
_ts_decorate19([
  (0, import_typeorm19.UpdateDateColumn)(),
  _ts_metadata19("design:type", typeof Date === "undefined" ? Object : Date)
], Medicine.prototype, "updatedAt", void 0);
Medicine = _ts_decorate19([
  (0, import_typeorm19.Entity)("medicines")
], Medicine);

// src/entity/cartMedicine.entity.ts
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
var CartMedicine = class {
  static {
    __name(this, "CartMedicine");
  }
  id;
  user;
  medicine;
  count;
  createdAt;
  updatedAt;
};
_ts_decorate20([
  (0, import_typeorm20.PrimaryGeneratedColumn)(),
  _ts_metadata20("design:type", Number)
], CartMedicine.prototype, "id", void 0);
_ts_decorate20([
  (0, import_typeorm20.ManyToOne)(() => User, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata20("design:type", typeof User === "undefined" ? Object : User)
], CartMedicine.prototype, "user", void 0);
_ts_decorate20([
  (0, import_typeorm20.ManyToOne)(() => Medicine, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata20("design:type", typeof Medicine === "undefined" ? Object : Medicine)
], CartMedicine.prototype, "medicine", void 0);
_ts_decorate20([
  (0, import_typeorm20.Column)({
    type: "int",
    default: 1
  }),
  _ts_metadata20("design:type", Number)
], CartMedicine.prototype, "count", void 0);
_ts_decorate20([
  (0, import_typeorm20.CreateDateColumn)(),
  _ts_metadata20("design:type", typeof Date === "undefined" ? Object : Date)
], CartMedicine.prototype, "createdAt", void 0);
_ts_decorate20([
  (0, import_typeorm20.UpdateDateColumn)(),
  _ts_metadata20("design:type", typeof Date === "undefined" ? Object : Date)
], CartMedicine.prototype, "updatedAt", void 0);
CartMedicine = _ts_decorate20([
  (0, import_typeorm20.Entity)("cart_medicines")
], CartMedicine);

// src/entity/company.entity.ts
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
var Company = class {
  static {
    __name(this, "Company");
  }
  id;
  countryId;
  name;
  createdAt;
  updatedAt;
};
_ts_decorate21([
  (0, import_typeorm21.PrimaryGeneratedColumn)(),
  _ts_metadata21("design:type", Number)
], Company.prototype, "id", void 0);
_ts_decorate21([
  (0, import_typeorm21.Column)({
    type: "int"
  }),
  _ts_metadata21("design:type", Number)
], Company.prototype, "countryId", void 0);
_ts_decorate21([
  (0, import_typeorm21.Column)({
    type: "varchar",
    length: 255,
    unique: true
  }),
  _ts_metadata21("design:type", String)
], Company.prototype, "name", void 0);
_ts_decorate21([
  (0, import_typeorm21.CreateDateColumn)(),
  _ts_metadata21("design:type", typeof Date === "undefined" ? Object : Date)
], Company.prototype, "createdAt", void 0);
_ts_decorate21([
  (0, import_typeorm21.UpdateDateColumn)(),
  _ts_metadata21("design:type", typeof Date === "undefined" ? Object : Date)
], Company.prototype, "updatedAt", void 0);
Company = _ts_decorate21([
  (0, import_typeorm21.Entity)("companies")
], Company);

// src/entity/companyEmployee.entity.ts
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
var CompanyEmployee = class {
  static {
    __name(this, "CompanyEmployee");
  }
  id;
  userId;
  companyId;
  createdAt;
  updatedAt;
};
_ts_decorate22([
  (0, import_typeorm22.PrimaryGeneratedColumn)(),
  _ts_metadata22("design:type", Number)
], CompanyEmployee.prototype, "id", void 0);
_ts_decorate22([
  (0, import_typeorm22.Column)({
    type: "int"
  }),
  _ts_metadata22("design:type", Number)
], CompanyEmployee.prototype, "userId", void 0);
_ts_decorate22([
  (0, import_typeorm22.Column)({
    type: "int"
  }),
  _ts_metadata22("design:type", Number)
], CompanyEmployee.prototype, "companyId", void 0);
_ts_decorate22([
  (0, import_typeorm22.CreateDateColumn)(),
  _ts_metadata22("design:type", typeof Date === "undefined" ? Object : Date)
], CompanyEmployee.prototype, "createdAt", void 0);
_ts_decorate22([
  (0, import_typeorm22.UpdateDateColumn)(),
  _ts_metadata22("design:type", typeof Date === "undefined" ? Object : Date)
], CompanyEmployee.prototype, "updatedAt", void 0);
CompanyEmployee = _ts_decorate22([
  (0, import_typeorm22.Entity)("company_employees")
], CompanyEmployee);

// src/entity/degree.entity.ts
var import_typeorm24 = require("typeorm");

// src/entity/hcp.entity.ts
var import_typeorm23 = require("typeorm");
function _ts_decorate23(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate23, "_ts_decorate");
function _ts_metadata23(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata23, "_ts_metadata");
var HCP = class {
  static {
    __name(this, "HCP");
  }
  id;
  unique_id;
  title;
  first_name;
  first_name_ar;
  first_name_en;
  first_name_tr;
  last_name;
  last_name_ar;
  last_name_en;
  last_name_tr;
  gender;
  birthdate;
  email;
  email_verified_at;
  phone;
  phone_verified_at;
  examination_fee;
  home_examination_fee;
  online_examination_fee;
  license_no;
  waiting_time;
  balance;
  password;
  profile_img;
  address;
  address_ar;
  address_en;
  address_tr;
  bio;
  bio_ar;
  bio_en;
  bio_tr;
  specialty_id;
  country;
  city;
  provider;
  provider_id;
  rating;
  number_ratings;
  is_active;
  is_available;
  is_en;
  is_ar;
  is_to_delete;
  delete_date;
  is_deleted;
  created_at;
  updated_at;
};
_ts_decorate23([
  (0, import_typeorm23.PrimaryGeneratedColumn)(),
  _ts_metadata23("design:type", Number)
], HCP.prototype, "id", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    unique: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "unique_id", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: " "
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "title", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)(),
  _ts_metadata23("design:type", String)
], HCP.prototype, "first_name", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "first_name_ar", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "first_name_en", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "first_name_tr", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)(),
  _ts_metadata23("design:type", String)
], HCP.prototype, "last_name", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "last_name_ar", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "last_name_en", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "last_name_tr", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "gender", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    type: "date",
    nullable: true
  }),
  _ts_metadata23("design:type", typeof Date === "undefined" ? Object : Date)
], HCP.prototype, "birthdate", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    unique: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "email", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata23("design:type", typeof Date === "undefined" ? Object : Date)
], HCP.prototype, "email_verified_at", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    unique: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "phone", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata23("design:type", typeof Date === "undefined" ? Object : Date)
], HCP.prototype, "phone_verified_at", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "examination_fee", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "home_examination_fee", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "online_examination_fee", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "license_no", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "waiting_time", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: 0
  }),
  _ts_metadata23("design:type", Number)
], HCP.prototype, "balance", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)(),
  _ts_metadata23("design:type", String)
], HCP.prototype, "password", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true,
    default: "https://sehapracto-images.s3.us-east-2.amazonaws.com/newavatar.png"
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "profile_img", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "address", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "address_ar", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "address_en", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "address_tr", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "bio", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "bio_ar", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "bio_en", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "bio_tr", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", Number)
], HCP.prototype, "specialty_id", void 0);
_ts_decorate23([
  (0, import_typeorm23.ManyToOne)(() => Country, (country) => country.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata23("design:type", typeof Country === "undefined" ? Object : Country)
], HCP.prototype, "country", void 0);
_ts_decorate23([
  (0, import_typeorm23.ManyToOne)(() => City, (city) => city.id, {
    nullable: true,
    onDelete: "SET NULL"
  }),
  _ts_metadata23("design:type", typeof City === "undefined" ? Object : City)
], HCP.prototype, "city", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "provider", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    nullable: true
  }),
  _ts_metadata23("design:type", String)
], HCP.prototype, "provider_id", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: 0
  }),
  _ts_metadata23("design:type", Number)
], HCP.prototype, "rating", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: 0
  }),
  _ts_metadata23("design:type", Number)
], HCP.prototype, "number_ratings", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: false
  }),
  _ts_metadata23("design:type", Boolean)
], HCP.prototype, "is_active", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: false
  }),
  _ts_metadata23("design:type", Boolean)
], HCP.prototype, "is_available", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: false
  }),
  _ts_metadata23("design:type", Boolean)
], HCP.prototype, "is_en", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: false
  }),
  _ts_metadata23("design:type", Boolean)
], HCP.prototype, "is_ar", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: false,
    nullable: true
  }),
  _ts_metadata23("design:type", Boolean)
], HCP.prototype, "is_to_delete", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata23("design:type", typeof Date === "undefined" ? Object : Date)
], HCP.prototype, "delete_date", void 0);
_ts_decorate23([
  (0, import_typeorm23.Column)({
    default: false
  }),
  _ts_metadata23("design:type", Boolean)
], HCP.prototype, "is_deleted", void 0);
_ts_decorate23([
  (0, import_typeorm23.CreateDateColumn)(),
  _ts_metadata23("design:type", typeof Date === "undefined" ? Object : Date)
], HCP.prototype, "created_at", void 0);
_ts_decorate23([
  (0, import_typeorm23.UpdateDateColumn)(),
  _ts_metadata23("design:type", typeof Date === "undefined" ? Object : Date)
], HCP.prototype, "updated_at", void 0);
HCP = _ts_decorate23([
  (0, import_typeorm23.Entity)("h_c_p_s")
], HCP);

// src/entity/degree.entity.ts
function _ts_decorate24(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate24, "_ts_decorate");
function _ts_metadata24(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata24, "_ts_metadata");
var Degree = class {
  static {
    __name(this, "Degree");
  }
  id;
  h_c_p;
  title;
  img;
  degree_date;
  created_at;
  updated_at;
};
_ts_decorate24([
  (0, import_typeorm24.PrimaryGeneratedColumn)(),
  _ts_metadata24("design:type", Number)
], Degree.prototype, "id", void 0);
_ts_decorate24([
  (0, import_typeorm24.ManyToOne)(() => HCP, (hcp) => hcp.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata24("design:type", typeof HCP === "undefined" ? Object : HCP)
], Degree.prototype, "h_c_p", void 0);
_ts_decorate24([
  (0, import_typeorm24.Column)({
    type: "varchar"
  }),
  _ts_metadata24("design:type", String)
], Degree.prototype, "title", void 0);
_ts_decorate24([
  (0, import_typeorm24.Column)({
    type: "varchar"
  }),
  _ts_metadata24("design:type", String)
], Degree.prototype, "img", void 0);
_ts_decorate24([
  (0, import_typeorm24.Column)({
    type: "date"
  }),
  _ts_metadata24("design:type", String)
], Degree.prototype, "degree_date", void 0);
_ts_decorate24([
  (0, import_typeorm24.CreateDateColumn)(),
  _ts_metadata24("design:type", typeof Date === "undefined" ? Object : Date)
], Degree.prototype, "created_at", void 0);
_ts_decorate24([
  (0, import_typeorm24.UpdateDateColumn)(),
  _ts_metadata24("design:type", typeof Date === "undefined" ? Object : Date)
], Degree.prototype, "updated_at", void 0);
Degree = _ts_decorate24([
  (0, import_typeorm24.Entity)("degrees")
], Degree);

// src/entity/discountType.entity.ts
var import_typeorm25 = require("typeorm");
function _ts_decorate25(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate25, "_ts_decorate");
function _ts_metadata25(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata25, "_ts_metadata");
var DiscountType = class {
  static {
    __name(this, "DiscountType");
  }
  id;
  name;
  nameEn;
  nameAr;
  nameTr;
  color;
  img;
  createdAt;
  updatedAt;
};
_ts_decorate25([
  (0, import_typeorm25.PrimaryGeneratedColumn)(),
  _ts_metadata25("design:type", Number)
], DiscountType.prototype, "id", void 0);
_ts_decorate25([
  (0, import_typeorm25.Column)({
    type: "varchar",
    unique: true
  }),
  _ts_metadata25("design:type", String)
], DiscountType.prototype, "name", void 0);
_ts_decorate25([
  (0, import_typeorm25.Column)({
    type: "varchar",
    unique: true
  }),
  _ts_metadata25("design:type", String)
], DiscountType.prototype, "nameEn", void 0);
_ts_decorate25([
  (0, import_typeorm25.Column)({
    type: "varchar",
    unique: true
  }),
  _ts_metadata25("design:type", String)
], DiscountType.prototype, "nameAr", void 0);
_ts_decorate25([
  (0, import_typeorm25.Column)({
    type: "varchar",
    unique: true
  }),
  _ts_metadata25("design:type", String)
], DiscountType.prototype, "nameTr", void 0);
_ts_decorate25([
  (0, import_typeorm25.Column)({
    type: "varchar"
  }),
  _ts_metadata25("design:type", String)
], DiscountType.prototype, "color", void 0);
_ts_decorate25([
  (0, import_typeorm25.Column)({
    type: "varchar"
  }),
  _ts_metadata25("design:type", String)
], DiscountType.prototype, "img", void 0);
_ts_decorate25([
  (0, import_typeorm25.CreateDateColumn)(),
  _ts_metadata25("design:type", typeof Date === "undefined" ? Object : Date)
], DiscountType.prototype, "createdAt", void 0);
_ts_decorate25([
  (0, import_typeorm25.UpdateDateColumn)(),
  _ts_metadata25("design:type", typeof Date === "undefined" ? Object : Date)
], DiscountType.prototype, "updatedAt", void 0);
DiscountType = _ts_decorate25([
  (0, import_typeorm25.Entity)("discount_types")
], DiscountType);

// src/entity/doctorBlogPostComment.entity.ts
var import_typeorm26 = require("typeorm");
function _ts_decorate26(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate26, "_ts_decorate");
function _ts_metadata26(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata26, "_ts_metadata");
var DoctorBlogPostComment = class {
  static {
    __name(this, "DoctorBlogPostComment");
  }
  id;
  doctorBlogPostId;
  userId;
  content;
  createdAt;
  updatedAt;
};
_ts_decorate26([
  (0, import_typeorm26.PrimaryGeneratedColumn)(),
  _ts_metadata26("design:type", Number)
], DoctorBlogPostComment.prototype, "id", void 0);
_ts_decorate26([
  (0, import_typeorm26.Column)(),
  _ts_metadata26("design:type", Number)
], DoctorBlogPostComment.prototype, "doctorBlogPostId", void 0);
_ts_decorate26([
  (0, import_typeorm26.Column)(),
  _ts_metadata26("design:type", Number)
], DoctorBlogPostComment.prototype, "userId", void 0);
_ts_decorate26([
  (0, import_typeorm26.Column)("text"),
  _ts_metadata26("design:type", String)
], DoctorBlogPostComment.prototype, "content", void 0);
_ts_decorate26([
  (0, import_typeorm26.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata26("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorBlogPostComment.prototype, "createdAt", void 0);
_ts_decorate26([
  (0, import_typeorm26.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata26("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorBlogPostComment.prototype, "updatedAt", void 0);
DoctorBlogPostComment = _ts_decorate26([
  (0, import_typeorm26.Entity)("doctor_blog_post_comments")
], DoctorBlogPostComment);

// src/entity/doctorBlogPostFavorite.entity.ts
var import_typeorm27 = require("typeorm");
function _ts_decorate27(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate27, "_ts_decorate");
function _ts_metadata27(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata27, "_ts_metadata");
var DoctorBlogPostFavorite = class {
  static {
    __name(this, "DoctorBlogPostFavorite");
  }
  id;
  doctorBlogPostId;
  userId;
  createdAt;
  updatedAt;
};
_ts_decorate27([
  (0, import_typeorm27.PrimaryGeneratedColumn)(),
  _ts_metadata27("design:type", Number)
], DoctorBlogPostFavorite.prototype, "id", void 0);
_ts_decorate27([
  (0, import_typeorm27.Column)({
    type: "int"
  }),
  _ts_metadata27("design:type", Number)
], DoctorBlogPostFavorite.prototype, "doctorBlogPostId", void 0);
_ts_decorate27([
  (0, import_typeorm27.Column)({
    type: "int"
  }),
  _ts_metadata27("design:type", Number)
], DoctorBlogPostFavorite.prototype, "userId", void 0);
_ts_decorate27([
  (0, import_typeorm27.CreateDateColumn)(),
  _ts_metadata27("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorBlogPostFavorite.prototype, "createdAt", void 0);
_ts_decorate27([
  (0, import_typeorm27.UpdateDateColumn)(),
  _ts_metadata27("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorBlogPostFavorite.prototype, "updatedAt", void 0);
DoctorBlogPostFavorite = _ts_decorate27([
  (0, import_typeorm27.Entity)("doctor_blog_post_favorites")
], DoctorBlogPostFavorite);

// src/entity/doctorBlogPostLike.entity.ts
var import_typeorm28 = require("typeorm");
function _ts_decorate28(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate28, "_ts_decorate");
function _ts_metadata28(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata28, "_ts_metadata");
var DoctorBlogPostLike = class {
  static {
    __name(this, "DoctorBlogPostLike");
  }
  id;
  doctorBlogPostId;
  userId;
  createdAt;
  updatedAt;
};
_ts_decorate28([
  (0, import_typeorm28.PrimaryGeneratedColumn)(),
  _ts_metadata28("design:type", Number)
], DoctorBlogPostLike.prototype, "id", void 0);
_ts_decorate28([
  (0, import_typeorm28.Column)({
    type: "int"
  }),
  _ts_metadata28("design:type", Number)
], DoctorBlogPostLike.prototype, "doctorBlogPostId", void 0);
_ts_decorate28([
  (0, import_typeorm28.Column)({
    type: "int"
  }),
  _ts_metadata28("design:type", Number)
], DoctorBlogPostLike.prototype, "userId", void 0);
_ts_decorate28([
  (0, import_typeorm28.CreateDateColumn)(),
  _ts_metadata28("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorBlogPostLike.prototype, "createdAt", void 0);
_ts_decorate28([
  (0, import_typeorm28.UpdateDateColumn)(),
  _ts_metadata28("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorBlogPostLike.prototype, "updatedAt", void 0);
DoctorBlogPostLike = _ts_decorate28([
  (0, import_typeorm28.Entity)("doctor_blog_post_likes")
], DoctorBlogPostLike);

// src/entity/doctorBlogPost.entity.ts
var import_typeorm29 = require("typeorm");
function _ts_decorate29(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate29, "_ts_decorate");
function _ts_metadata29(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata29, "_ts_metadata");
var DoctorBlogPost = class {
  static {
    __name(this, "DoctorBlogPost");
  }
  id;
  countryId;
  blogCategoryId;
  medicalSpecialtyId;
  doctorId;
  author;
  slug;
  img;
  youtubeLink;
  title;
  content;
  metadata;
  keywords;
  language;
  views;
  isApproved;
  createdAt;
  updatedAt;
};
_ts_decorate29([
  (0, import_typeorm29.PrimaryGeneratedColumn)(),
  _ts_metadata29("design:type", Number)
], DoctorBlogPost.prototype, "id", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)(),
  _ts_metadata29("design:type", Number)
], DoctorBlogPost.prototype, "countryId", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)(),
  _ts_metadata29("design:type", Number)
], DoctorBlogPost.prototype, "blogCategoryId", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)(),
  _ts_metadata29("design:type", Number)
], DoctorBlogPost.prototype, "medicalSpecialtyId", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)(),
  _ts_metadata29("design:type", Number)
], DoctorBlogPost.prototype, "doctorId", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)(),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "author", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)({
    nullable: true,
    unique: true
  }),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "slug", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)(),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "img", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)({
    nullable: true
  }),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "youtubeLink", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)(),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "title", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)("text"),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "content", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)("text", {
    nullable: true
  }),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "metadata", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)("text", {
    nullable: true
  }),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "keywords", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)(),
  _ts_metadata29("design:type", String)
], DoctorBlogPost.prototype, "language", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)({
    default: 0
  }),
  _ts_metadata29("design:type", Number)
], DoctorBlogPost.prototype, "views", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)({
    default: false
  }),
  _ts_metadata29("design:type", Boolean)
], DoctorBlogPost.prototype, "isApproved", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata29("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorBlogPost.prototype, "createdAt", void 0);
_ts_decorate29([
  (0, import_typeorm29.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata29("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorBlogPost.prototype, "updatedAt", void 0);
DoctorBlogPost = _ts_decorate29([
  (0, import_typeorm29.Entity)("doctor_blog_posts")
], DoctorBlogPost);

// src/entity/doctorDepartmentService.entity.ts
var import_typeorm31 = require("typeorm");

// src/entity/medicalSpecialty.entity.ts
var import_typeorm30 = require("typeorm");
function _ts_decorate30(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate30, "_ts_decorate");
function _ts_metadata30(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata30, "_ts_metadata");
var MedicalSpecialty = class {
  static {
    __name(this, "MedicalSpecialty");
  }
  id;
  name;
  name_ar;
  name_tr;
  img;
  description;
  meta_desc_en;
  meta_desc_ar;
  created_at;
  updated_at;
};
_ts_decorate30([
  (0, import_typeorm30.PrimaryGeneratedColumn)(),
  _ts_metadata30("design:type", Number)
], MedicalSpecialty.prototype, "id", void 0);
_ts_decorate30([
  (0, import_typeorm30.Column)({
    unique: true
  }),
  _ts_metadata30("design:type", String)
], MedicalSpecialty.prototype, "name", void 0);
_ts_decorate30([
  (0, import_typeorm30.Column)({
    unique: true
  }),
  _ts_metadata30("design:type", String)
], MedicalSpecialty.prototype, "name_ar", void 0);
_ts_decorate30([
  (0, import_typeorm30.Column)({
    unique: true
  }),
  _ts_metadata30("design:type", String)
], MedicalSpecialty.prototype, "name_tr", void 0);
_ts_decorate30([
  (0, import_typeorm30.Column)(),
  _ts_metadata30("design:type", String)
], MedicalSpecialty.prototype, "img", void 0);
_ts_decorate30([
  (0, import_typeorm30.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata30("design:type", String)
], MedicalSpecialty.prototype, "description", void 0);
_ts_decorate30([
  (0, import_typeorm30.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata30("design:type", String)
], MedicalSpecialty.prototype, "meta_desc_en", void 0);
_ts_decorate30([
  (0, import_typeorm30.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata30("design:type", String)
], MedicalSpecialty.prototype, "meta_desc_ar", void 0);
_ts_decorate30([
  (0, import_typeorm30.CreateDateColumn)(),
  _ts_metadata30("design:type", typeof Date === "undefined" ? Object : Date)
], MedicalSpecialty.prototype, "created_at", void 0);
_ts_decorate30([
  (0, import_typeorm30.UpdateDateColumn)(),
  _ts_metadata30("design:type", typeof Date === "undefined" ? Object : Date)
], MedicalSpecialty.prototype, "updated_at", void 0);
MedicalSpecialty = _ts_decorate30([
  (0, import_typeorm30.Entity)("medical_specialties")
], MedicalSpecialty);

// src/entity/doctorDepartmentService.entity.ts
function _ts_decorate31(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate31, "_ts_decorate");
function _ts_metadata31(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata31, "_ts_metadata");
var DoctorDepartmentService = class {
  static {
    __name(this, "DoctorDepartmentService");
  }
  id;
  medicalSpecialty;
  name;
  nameAr;
  createdAt;
  updatedAt;
};
_ts_decorate31([
  (0, import_typeorm31.PrimaryGeneratedColumn)(),
  _ts_metadata31("design:type", Number)
], DoctorDepartmentService.prototype, "id", void 0);
_ts_decorate31([
  (0, import_typeorm31.ManyToOne)(() => MedicalSpecialty, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata31("design:type", typeof MedicalSpecialty === "undefined" ? Object : MedicalSpecialty)
], DoctorDepartmentService.prototype, "medicalSpecialty", void 0);
_ts_decorate31([
  (0, import_typeorm31.Column)({
    unique: true
  }),
  _ts_metadata31("design:type", String)
], DoctorDepartmentService.prototype, "name", void 0);
_ts_decorate31([
  (0, import_typeorm31.Column)({
    unique: true
  }),
  _ts_metadata31("design:type", String)
], DoctorDepartmentService.prototype, "nameAr", void 0);
_ts_decorate31([
  (0, import_typeorm31.CreateDateColumn)(),
  _ts_metadata31("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorDepartmentService.prototype, "createdAt", void 0);
_ts_decorate31([
  (0, import_typeorm31.UpdateDateColumn)(),
  _ts_metadata31("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorDepartmentService.prototype, "updatedAt", void 0);
DoctorDepartmentService = _ts_decorate31([
  (0, import_typeorm31.Entity)("doctor_department_services")
], DoctorDepartmentService);

// src/entity/doctorLanguage.entity.ts
var import_typeorm33 = require("typeorm");

// src/entity/language.entity.ts
var import_typeorm32 = require("typeorm");
function _ts_decorate32(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate32, "_ts_decorate");
function _ts_metadata32(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata32, "_ts_metadata");
var Language = class {
  static {
    __name(this, "Language");
  }
  id;
  name;
  abbrv;
  createdAt;
  updatedAt;
};
_ts_decorate32([
  (0, import_typeorm32.PrimaryGeneratedColumn)(),
  _ts_metadata32("design:type", Number)
], Language.prototype, "id", void 0);
_ts_decorate32([
  (0, import_typeorm32.Column)({
    length: 255
  }),
  _ts_metadata32("design:type", String)
], Language.prototype, "name", void 0);
_ts_decorate32([
  (0, import_typeorm32.Column)({
    length: 10
  }),
  _ts_metadata32("design:type", String)
], Language.prototype, "abbrv", void 0);
_ts_decorate32([
  (0, import_typeorm32.CreateDateColumn)(),
  _ts_metadata32("design:type", typeof Date === "undefined" ? Object : Date)
], Language.prototype, "createdAt", void 0);
_ts_decorate32([
  (0, import_typeorm32.UpdateDateColumn)(),
  _ts_metadata32("design:type", typeof Date === "undefined" ? Object : Date)
], Language.prototype, "updatedAt", void 0);
Language = _ts_decorate32([
  (0, import_typeorm32.Entity)("languages")
], Language);

// src/entity/doctorLanguage.entity.ts
function _ts_decorate33(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate33, "_ts_decorate");
function _ts_metadata33(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata33, "_ts_metadata");
var DoctorLanguage = class {
  static {
    __name(this, "DoctorLanguage");
  }
  id;
  language;
  doctor;
  createdAt;
  updatedAt;
};
_ts_decorate33([
  (0, import_typeorm33.PrimaryGeneratedColumn)(),
  _ts_metadata33("design:type", Number)
], DoctorLanguage.prototype, "id", void 0);
_ts_decorate33([
  (0, import_typeorm33.ManyToOne)(() => Language, (language) => language.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata33("design:type", typeof Language === "undefined" ? Object : Language)
], DoctorLanguage.prototype, "language", void 0);
_ts_decorate33([
  (0, import_typeorm33.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata33("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], DoctorLanguage.prototype, "doctor", void 0);
_ts_decorate33([
  (0, import_typeorm33.CreateDateColumn)(),
  _ts_metadata33("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorLanguage.prototype, "createdAt", void 0);
_ts_decorate33([
  (0, import_typeorm33.UpdateDateColumn)(),
  _ts_metadata33("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorLanguage.prototype, "updatedAt", void 0);
DoctorLanguage = _ts_decorate33([
  (0, import_typeorm33.Entity)("doctor_languages")
], DoctorLanguage);

// src/entity/doctorNotification.entity.ts
var import_typeorm34 = require("typeorm");
function _ts_decorate34(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate34, "_ts_decorate");
function _ts_metadata34(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata34, "_ts_metadata");
var DoctorNotification = class {
  static {
    __name(this, "DoctorNotification");
  }
  id;
  doctor;
  title;
  titleAr;
  context;
  contextAr;
  createdAt;
  updatedAt;
};
_ts_decorate34([
  (0, import_typeorm34.PrimaryGeneratedColumn)(),
  _ts_metadata34("design:type", Number)
], DoctorNotification.prototype, "id", void 0);
_ts_decorate34([
  (0, import_typeorm34.ManyToOne)(() => Doctor, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata34("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], DoctorNotification.prototype, "doctor", void 0);
_ts_decorate34([
  (0, import_typeorm34.Column)(),
  _ts_metadata34("design:type", String)
], DoctorNotification.prototype, "title", void 0);
_ts_decorate34([
  (0, import_typeorm34.Column)(),
  _ts_metadata34("design:type", String)
], DoctorNotification.prototype, "titleAr", void 0);
_ts_decorate34([
  (0, import_typeorm34.Column)(),
  _ts_metadata34("design:type", String)
], DoctorNotification.prototype, "context", void 0);
_ts_decorate34([
  (0, import_typeorm34.Column)(),
  _ts_metadata34("design:type", String)
], DoctorNotification.prototype, "contextAr", void 0);
_ts_decorate34([
  (0, import_typeorm34.CreateDateColumn)(),
  _ts_metadata34("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorNotification.prototype, "createdAt", void 0);
_ts_decorate34([
  (0, import_typeorm34.UpdateDateColumn)(),
  _ts_metadata34("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorNotification.prototype, "updatedAt", void 0);
DoctorNotification = _ts_decorate34([
  (0, import_typeorm34.Entity)("doctor_notifications")
], DoctorNotification);

// src/entity/doctorOnlineAppointment.entity.ts
var import_typeorm35 = require("typeorm");
function _ts_decorate35(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate35, "_ts_decorate");
function _ts_metadata35(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata35, "_ts_metadata");
var DoctorOnlineAppointment = class {
  static {
    __name(this, "DoctorOnlineAppointment");
  }
  id;
  doctor_id;
  user_id;
  start;
  date;
  date_time_stamp;
  is_rated;
  rating;
  status;
  isDoctorJoin;
  isUserJoin;
  duration;
  rating_comment;
  created_at;
  updated_at;
};
_ts_decorate35([
  (0, import_typeorm35.PrimaryGeneratedColumn)(),
  _ts_metadata35("design:type", Number)
], DoctorOnlineAppointment.prototype, "id", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)(),
  _ts_metadata35("design:type", Number)
], DoctorOnlineAppointment.prototype, "doctor_id", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)(),
  _ts_metadata35("design:type", Number)
], DoctorOnlineAppointment.prototype, "user_id", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)(),
  _ts_metadata35("design:type", String)
], DoctorOnlineAppointment.prototype, "start", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)(),
  _ts_metadata35("design:type", String)
], DoctorOnlineAppointment.prototype, "date", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata35("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorOnlineAppointment.prototype, "date_time_stamp", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)({
    default: false
  }),
  _ts_metadata35("design:type", Boolean)
], DoctorOnlineAppointment.prototype, "is_rated", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)({
    default: 0
  }),
  _ts_metadata35("design:type", Number)
], DoctorOnlineAppointment.prototype, "rating", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)({
    default: 0
  }),
  _ts_metadata35("design:type", Number)
], DoctorOnlineAppointment.prototype, "status", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)({
    default: false
  }),
  _ts_metadata35("design:type", Boolean)
], DoctorOnlineAppointment.prototype, "isDoctorJoin", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)({
    default: false
  }),
  _ts_metadata35("design:type", Boolean)
], DoctorOnlineAppointment.prototype, "isUserJoin", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)(),
  _ts_metadata35("design:type", Number)
], DoctorOnlineAppointment.prototype, "duration", void 0);
_ts_decorate35([
  (0, import_typeorm35.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata35("design:type", String)
], DoctorOnlineAppointment.prototype, "rating_comment", void 0);
_ts_decorate35([
  (0, import_typeorm35.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata35("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorOnlineAppointment.prototype, "created_at", void 0);
_ts_decorate35([
  (0, import_typeorm35.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata35("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorOnlineAppointment.prototype, "updated_at", void 0);
DoctorOnlineAppointment = _ts_decorate35([
  (0, import_typeorm35.Entity)("doctor_online_appointments")
], DoctorOnlineAppointment);

// src/entity/doctorPatientConversation.entity.ts
var import_typeorm37 = require("typeorm");

// src/entity/doctorPatientMessage.entity.ts
var import_typeorm36 = require("typeorm");
function _ts_decorate36(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate36, "_ts_decorate");
function _ts_metadata36(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata36, "_ts_metadata");
var DoctorPatientMessage = class {
  static {
    __name(this, "DoctorPatientMessage");
  }
  id;
  doctorPatientConversation;
  sender;
  message;
  msgType;
  fileLink;
  isSeen;
  createdAt;
  updatedAt;
};
_ts_decorate36([
  (0, import_typeorm36.PrimaryGeneratedColumn)(),
  _ts_metadata36("design:type", Number)
], DoctorPatientMessage.prototype, "id", void 0);
_ts_decorate36([
  (0, import_typeorm36.ManyToOne)(() => DoctorPatientConversation, (conversation) => conversation.messages, {
    onDelete: "CASCADE"
  }),
  _ts_metadata36("design:type", typeof DoctorPatientConversation === "undefined" ? Object : DoctorPatientConversation)
], DoctorPatientMessage.prototype, "doctorPatientConversation", void 0);
_ts_decorate36([
  (0, import_typeorm36.Column)(),
  _ts_metadata36("design:type", String)
], DoctorPatientMessage.prototype, "sender", void 0);
_ts_decorate36([
  (0, import_typeorm36.Column)("text"),
  _ts_metadata36("design:type", String)
], DoctorPatientMessage.prototype, "message", void 0);
_ts_decorate36([
  (0, import_typeorm36.Column)({
    default: "txt"
  }),
  _ts_metadata36("design:type", String)
], DoctorPatientMessage.prototype, "msgType", void 0);
_ts_decorate36([
  (0, import_typeorm36.Column)({
    nullable: true
  }),
  _ts_metadata36("design:type", String)
], DoctorPatientMessage.prototype, "fileLink", void 0);
_ts_decorate36([
  (0, import_typeorm36.Column)({
    default: false
  }),
  _ts_metadata36("design:type", Boolean)
], DoctorPatientMessage.prototype, "isSeen", void 0);
_ts_decorate36([
  (0, import_typeorm36.CreateDateColumn)(),
  _ts_metadata36("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorPatientMessage.prototype, "createdAt", void 0);
_ts_decorate36([
  (0, import_typeorm36.UpdateDateColumn)(),
  _ts_metadata36("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorPatientMessage.prototype, "updatedAt", void 0);
DoctorPatientMessage = _ts_decorate36([
  (0, import_typeorm36.Entity)("doctor_patient_messages")
], DoctorPatientMessage);

// src/entity/doctorPatientConversation.entity.ts
function _ts_decorate37(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate37, "_ts_decorate");
function _ts_metadata37(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata37, "_ts_metadata");
var DoctorPatientConversation = class {
  static {
    __name(this, "DoctorPatientConversation");
  }
  id;
  doctor;
  user;
  messages;
  createdAt;
  updatedAt;
};
_ts_decorate37([
  (0, import_typeorm37.PrimaryGeneratedColumn)(),
  _ts_metadata37("design:type", Number)
], DoctorPatientConversation.prototype, "id", void 0);
_ts_decorate37([
  (0, import_typeorm37.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata37("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], DoctorPatientConversation.prototype, "doctor", void 0);
_ts_decorate37([
  (0, import_typeorm37.ManyToOne)(() => User, (user) => user.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata37("design:type", typeof User === "undefined" ? Object : User)
], DoctorPatientConversation.prototype, "user", void 0);
_ts_decorate37([
  (0, import_typeorm37.OneToMany)(() => DoctorPatientMessage, (message) => message.doctorPatientConversation),
  _ts_metadata37("design:type", Array)
], DoctorPatientConversation.prototype, "messages", void 0);
_ts_decorate37([
  (0, import_typeorm37.CreateDateColumn)(),
  _ts_metadata37("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorPatientConversation.prototype, "createdAt", void 0);
_ts_decorate37([
  (0, import_typeorm37.UpdateDateColumn)(),
  _ts_metadata37("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorPatientConversation.prototype, "updatedAt", void 0);
DoctorPatientConversation = _ts_decorate37([
  (0, import_typeorm37.Entity)("doctor_patient_conversations")
], DoctorPatientConversation);

// src/entity/doctorRating.entity.ts
var import_typeorm38 = require("typeorm");
function _ts_decorate38(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate38, "_ts_decorate");
function _ts_metadata38(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata38, "_ts_metadata");
var DoctorRating = class {
  static {
    __name(this, "DoctorRating");
  }
  id;
  rating;
  userId;
  user;
  doctorId;
  doctor;
  comment;
  createdAt;
  updatedAt;
};
_ts_decorate38([
  (0, import_typeorm38.PrimaryGeneratedColumn)(),
  _ts_metadata38("design:type", Number)
], DoctorRating.prototype, "id", void 0);
_ts_decorate38([
  (0, import_typeorm38.Column)({
    type: "int"
  }),
  _ts_metadata38("design:type", Number)
], DoctorRating.prototype, "rating", void 0);
_ts_decorate38([
  (0, import_typeorm38.Column)({
    type: "int"
  }),
  _ts_metadata38("design:type", Number)
], DoctorRating.prototype, "userId", void 0);
_ts_decorate38([
  (0, import_typeorm38.ManyToOne)(() => User),
  (0, import_typeorm38.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata38("design:type", typeof User === "undefined" ? Object : User)
], DoctorRating.prototype, "user", void 0);
_ts_decorate38([
  (0, import_typeorm38.Column)({
    type: "int"
  }),
  _ts_metadata38("design:type", Number)
], DoctorRating.prototype, "doctorId", void 0);
_ts_decorate38([
  (0, import_typeorm38.ManyToOne)(() => Doctor),
  (0, import_typeorm38.JoinColumn)({
    name: "doctor_id"
  }),
  _ts_metadata38("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], DoctorRating.prototype, "doctor", void 0);
_ts_decorate38([
  (0, import_typeorm38.Column)({
    type: "text"
  }),
  _ts_metadata38("design:type", String)
], DoctorRating.prototype, "comment", void 0);
_ts_decorate38([
  (0, import_typeorm38.CreateDateColumn)(),
  _ts_metadata38("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorRating.prototype, "createdAt", void 0);
_ts_decorate38([
  (0, import_typeorm38.UpdateDateColumn)(),
  _ts_metadata38("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorRating.prototype, "updatedAt", void 0);
DoctorRating = _ts_decorate38([
  (0, import_typeorm38.Entity)("doctor_ratings")
], DoctorRating);

// src/entity/doctorService.entity.ts
var import_typeorm39 = require("typeorm");
function _ts_decorate39(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate39, "_ts_decorate");
function _ts_metadata39(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata39, "_ts_metadata");
var DoctorService = class {
  static {
    __name(this, "DoctorService");
  }
  id;
  doctor;
  doctorDepartmentService;
  fee;
  createdAt;
  updatedAt;
};
_ts_decorate39([
  (0, import_typeorm39.PrimaryGeneratedColumn)(),
  _ts_metadata39("design:type", Number)
], DoctorService.prototype, "id", void 0);
_ts_decorate39([
  (0, import_typeorm39.ManyToOne)(() => Doctor, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata39("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], DoctorService.prototype, "doctor", void 0);
_ts_decorate39([
  (0, import_typeorm39.ManyToOne)(() => DoctorDepartmentService, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata39("design:type", typeof DoctorDepartmentService === "undefined" ? Object : DoctorDepartmentService)
], DoctorService.prototype, "doctorDepartmentService", void 0);
_ts_decorate39([
  (0, import_typeorm39.Column)(),
  _ts_metadata39("design:type", Number)
], DoctorService.prototype, "fee", void 0);
_ts_decorate39([
  (0, import_typeorm39.CreateDateColumn)(),
  _ts_metadata39("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorService.prototype, "createdAt", void 0);
_ts_decorate39([
  (0, import_typeorm39.UpdateDateColumn)(),
  _ts_metadata39("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorService.prototype, "updatedAt", void 0);
DoctorService = _ts_decorate39([
  (0, import_typeorm39.Entity)("doctor_services")
], DoctorService);

// src/entity/doctorTransactionRecord.entity.ts
var import_typeorm40 = require("typeorm");
function _ts_decorate40(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate40, "_ts_decorate");
function _ts_metadata40(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata40, "_ts_metadata");
var DoctorTransactionRecord = class {
  static {
    __name(this, "DoctorTransactionRecord");
  }
  id;
  doctor;
  admin;
  type;
  amount;
  balanceBefore;
  balanceAfter;
  explanation;
  createdAt;
  updatedAt;
};
_ts_decorate40([
  (0, import_typeorm40.PrimaryGeneratedColumn)(),
  _ts_metadata40("design:type", Number)
], DoctorTransactionRecord.prototype, "id", void 0);
_ts_decorate40([
  (0, import_typeorm40.ManyToOne)(() => Doctor, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata40("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], DoctorTransactionRecord.prototype, "doctor", void 0);
_ts_decorate40([
  (0, import_typeorm40.ManyToOne)(() => Admin, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata40("design:type", typeof Admin === "undefined" ? Object : Admin)
], DoctorTransactionRecord.prototype, "admin", void 0);
_ts_decorate40([
  (0, import_typeorm40.Column)(),
  _ts_metadata40("design:type", String)
], DoctorTransactionRecord.prototype, "type", void 0);
_ts_decorate40([
  (0, import_typeorm40.Column)({
    type: "int"
  }),
  _ts_metadata40("design:type", Number)
], DoctorTransactionRecord.prototype, "amount", void 0);
_ts_decorate40([
  (0, import_typeorm40.Column)({
    type: "int"
  }),
  _ts_metadata40("design:type", Number)
], DoctorTransactionRecord.prototype, "balanceBefore", void 0);
_ts_decorate40([
  (0, import_typeorm40.Column)({
    type: "int"
  }),
  _ts_metadata40("design:type", Number)
], DoctorTransactionRecord.prototype, "balanceAfter", void 0);
_ts_decorate40([
  (0, import_typeorm40.Column)("text"),
  _ts_metadata40("design:type", String)
], DoctorTransactionRecord.prototype, "explanation", void 0);
_ts_decorate40([
  (0, import_typeorm40.CreateDateColumn)(),
  _ts_metadata40("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorTransactionRecord.prototype, "createdAt", void 0);
_ts_decorate40([
  (0, import_typeorm40.UpdateDateColumn)(),
  _ts_metadata40("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorTransactionRecord.prototype, "updatedAt", void 0);
DoctorTransactionRecord = _ts_decorate40([
  (0, import_typeorm40.Entity)("doctor_transaction_records")
], DoctorTransactionRecord);

// src/entity/doctorWorkLocation.entity.ts
var import_typeorm42 = require("typeorm");

// src/entity/hospital.entity.ts
var import_typeorm41 = require("typeorm");
function _ts_decorate41(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate41, "_ts_decorate");
function _ts_metadata41(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata41, "_ts_metadata");
var Hospital = class {
  static {
    __name(this, "Hospital");
  }
  id;
  country_id;
  city_id;
  province_id;
  special_code;
  name;
  name_ar;
  name_en;
  name_tr;
  logo;
  adress;
  adress_ar;
  adress_en;
  adress_tr;
  phone;
  phone2;
  phone_verified_at;
  email;
  facebook_link;
  instagram_link;
  twitter_link;
  linkedin_link;
  youtube_link;
  bio;
  bio_ar;
  bio_en;
  bio_tr;
  balance;
  rating;
  number_ratings;
  start_time;
  end_time;
  work_days;
  longitude;
  latitude;
  sp_percentage;
  is_active;
  is_available;
  is_pin;
  is_show_price;
  created_at;
  updated_at;
};
_ts_decorate41([
  (0, import_typeorm41.PrimaryGeneratedColumn)(),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "id", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)(),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "country_id", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)(),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "city_id", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)(),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "province_id", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    unique: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "special_code", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)(),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "name", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "name_ar", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "name_en", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "name_tr", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)(),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "logo", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)(),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "adress", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "adress_ar", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "adress_en", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "adress_tr", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)(),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "phone", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    unique: true,
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "phone2", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true,
    type: "timestamp"
  }),
  _ts_metadata41("design:type", typeof Date === "undefined" ? Object : Date)
], Hospital.prototype, "phone_verified_at", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)(),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "email", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "facebook_link", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "instagram_link", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "twitter_link", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "linkedin_link", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "youtube_link", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)("text"),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "bio", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "bio_ar", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "bio_en", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "bio_tr", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    default: 0
  }),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "balance", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    default: 0
  }),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "rating", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    default: 0
  }),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "number_ratings", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "start_time", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "end_time", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "work_days", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "longitude", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    nullable: true
  }),
  _ts_metadata41("design:type", String)
], Hospital.prototype, "latitude", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    default: 0
  }),
  _ts_metadata41("design:type", Number)
], Hospital.prototype, "sp_percentage", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    default: false
  }),
  _ts_metadata41("design:type", Boolean)
], Hospital.prototype, "is_active", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    default: false
  }),
  _ts_metadata41("design:type", Boolean)
], Hospital.prototype, "is_available", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    default: false
  }),
  _ts_metadata41("design:type", Boolean)
], Hospital.prototype, "is_pin", void 0);
_ts_decorate41([
  (0, import_typeorm41.Column)({
    default: false
  }),
  _ts_metadata41("design:type", Boolean)
], Hospital.prototype, "is_show_price", void 0);
_ts_decorate41([
  (0, import_typeorm41.CreateDateColumn)(),
  _ts_metadata41("design:type", typeof Date === "undefined" ? Object : Date)
], Hospital.prototype, "created_at", void 0);
_ts_decorate41([
  (0, import_typeorm41.UpdateDateColumn)(),
  _ts_metadata41("design:type", typeof Date === "undefined" ? Object : Date)
], Hospital.prototype, "updated_at", void 0);
Hospital = _ts_decorate41([
  (0, import_typeorm41.Entity)("hospitals")
], Hospital);

// src/entity/doctorWorkLocation.entity.ts
function _ts_decorate42(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate42, "_ts_decorate");
function _ts_metadata42(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata42, "_ts_metadata");
var DoctorWorkLocation = class {
  static {
    __name(this, "DoctorWorkLocation");
  }
  id;
  doctor;
  hospital;
  name;
  nameAr;
  nameEn;
  nameTr;
  phone;
  address;
  addressAr;
  addressEn;
  addressTr;
  createdAt;
  updatedAt;
};
_ts_decorate42([
  (0, import_typeorm42.PrimaryGeneratedColumn)(),
  _ts_metadata42("design:type", Number)
], DoctorWorkLocation.prototype, "id", void 0);
_ts_decorate42([
  (0, import_typeorm42.ManyToOne)(() => Doctor, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata42("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], DoctorWorkLocation.prototype, "doctor", void 0);
_ts_decorate42([
  (0, import_typeorm42.ManyToOne)(() => Hospital, {
    nullable: true,
    onDelete: "SET NULL"
  }),
  _ts_metadata42("design:type", typeof Hospital === "undefined" ? Object : Hospital)
], DoctorWorkLocation.prototype, "hospital", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)(),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "name", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)({
    nullable: true
  }),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "nameAr", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)({
    nullable: true
  }),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "nameEn", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)({
    nullable: true
  }),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "nameTr", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)(),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "phone", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)(),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "address", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)({
    nullable: true
  }),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "addressAr", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)({
    nullable: true
  }),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "addressEn", void 0);
_ts_decorate42([
  (0, import_typeorm42.Column)({
    nullable: true
  }),
  _ts_metadata42("design:type", String)
], DoctorWorkLocation.prototype, "addressTr", void 0);
_ts_decorate42([
  (0, import_typeorm42.CreateDateColumn)(),
  _ts_metadata42("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorWorkLocation.prototype, "createdAt", void 0);
_ts_decorate42([
  (0, import_typeorm42.UpdateDateColumn)(),
  _ts_metadata42("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorWorkLocation.prototype, "updatedAt", void 0);
DoctorWorkLocation = _ts_decorate42([
  (0, import_typeorm42.Entity)("doctor_work_locations")
], DoctorWorkLocation);

// src/entity/emailVerification.entity.ts
var import_typeorm43 = require("typeorm");
function _ts_decorate43(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate43, "_ts_decorate");
function _ts_metadata43(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata43, "_ts_metadata");
var EmailVerification = class {
  static {
    __name(this, "EmailVerification");
  }
  id;
  userId;
  user;
  userType;
  code;
  createdAt;
  updatedAt;
};
_ts_decorate43([
  (0, import_typeorm43.PrimaryGeneratedColumn)(),
  _ts_metadata43("design:type", Number)
], EmailVerification.prototype, "id", void 0);
_ts_decorate43([
  (0, import_typeorm43.Column)({
    type: "int"
  }),
  _ts_metadata43("design:type", Number)
], EmailVerification.prototype, "userId", void 0);
_ts_decorate43([
  (0, import_typeorm43.ManyToOne)(() => User),
  (0, import_typeorm43.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata43("design:type", typeof User === "undefined" ? Object : User)
], EmailVerification.prototype, "user", void 0);
_ts_decorate43([
  (0, import_typeorm43.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata43("design:type", String)
], EmailVerification.prototype, "userType", void 0);
_ts_decorate43([
  (0, import_typeorm43.Column)({
    type: "varchar",
    length: 255,
    unique: true
  }),
  _ts_metadata43("design:type", String)
], EmailVerification.prototype, "code", void 0);
_ts_decorate43([
  (0, import_typeorm43.CreateDateColumn)(),
  _ts_metadata43("design:type", typeof Date === "undefined" ? Object : Date)
], EmailVerification.prototype, "createdAt", void 0);
_ts_decorate43([
  (0, import_typeorm43.UpdateDateColumn)(),
  _ts_metadata43("design:type", typeof Date === "undefined" ? Object : Date)
], EmailVerification.prototype, "updatedAt", void 0);
EmailVerification = _ts_decorate43([
  (0, import_typeorm43.Entity)("email_verifications")
], EmailVerification);

// src/entity/failedJob.entity.ts
var import_typeorm44 = require("typeorm");
function _ts_decorate44(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate44, "_ts_decorate");
function _ts_metadata44(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata44, "_ts_metadata");
var FailedJob = class {
  static {
    __name(this, "FailedJob");
  }
  id;
  uuid;
  connection;
  queue;
  payload;
  exception;
  failed_at;
};
_ts_decorate44([
  (0, import_typeorm44.PrimaryGeneratedColumn)(),
  _ts_metadata44("design:type", Number)
], FailedJob.prototype, "id", void 0);
_ts_decorate44([
  (0, import_typeorm44.Column)({
    unique: true
  }),
  _ts_metadata44("design:type", String)
], FailedJob.prototype, "uuid", void 0);
_ts_decorate44([
  (0, import_typeorm44.Column)("text"),
  _ts_metadata44("design:type", String)
], FailedJob.prototype, "connection", void 0);
_ts_decorate44([
  (0, import_typeorm44.Column)("text"),
  _ts_metadata44("design:type", String)
], FailedJob.prototype, "queue", void 0);
_ts_decorate44([
  (0, import_typeorm44.Column)("longtext"),
  _ts_metadata44("design:type", String)
], FailedJob.prototype, "payload", void 0);
_ts_decorate44([
  (0, import_typeorm44.Column)("longtext"),
  _ts_metadata44("design:type", String)
], FailedJob.prototype, "exception", void 0);
_ts_decorate44([
  (0, import_typeorm44.CreateDateColumn)({
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata44("design:type", typeof Date === "undefined" ? Object : Date)
], FailedJob.prototype, "failed_at", void 0);
FailedJob = _ts_decorate44([
  (0, import_typeorm44.Entity)("failed_jobs")
], FailedJob);

// src/entity/favoriteDoctor.entity.ts
var import_typeorm45 = require("typeorm");
function _ts_decorate45(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate45, "_ts_decorate");
function _ts_metadata45(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata45, "_ts_metadata");
var FavoriteDoctor = class {
  static {
    __name(this, "FavoriteDoctor");
  }
  id;
  user;
  doctor;
  created_at;
  updated_at;
};
_ts_decorate45([
  (0, import_typeorm45.PrimaryGeneratedColumn)(),
  _ts_metadata45("design:type", Number)
], FavoriteDoctor.prototype, "id", void 0);
_ts_decorate45([
  (0, import_typeorm45.ManyToOne)(() => User, (user) => user.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata45("design:type", typeof User === "undefined" ? Object : User)
], FavoriteDoctor.prototype, "user", void 0);
_ts_decorate45([
  (0, import_typeorm45.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata45("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], FavoriteDoctor.prototype, "doctor", void 0);
_ts_decorate45([
  (0, import_typeorm45.CreateDateColumn)(),
  _ts_metadata45("design:type", typeof Date === "undefined" ? Object : Date)
], FavoriteDoctor.prototype, "created_at", void 0);
_ts_decorate45([
  (0, import_typeorm45.UpdateDateColumn)(),
  _ts_metadata45("design:type", typeof Date === "undefined" ? Object : Date)
], FavoriteDoctor.prototype, "updated_at", void 0);
FavoriteDoctor = _ts_decorate45([
  (0, import_typeorm45.Entity)("favorite_doctors")
], FavoriteDoctor);

// src/entity/favoriteHCP.entity.ts
var import_typeorm46 = require("typeorm");
function _ts_decorate46(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate46, "_ts_decorate");
function _ts_metadata46(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata46, "_ts_metadata");
var FavoriteHcp = class {
  static {
    __name(this, "FavoriteHcp");
  }
  id;
  user_id;
  h_c_p_id;
  created_at;
  updated_at;
};
_ts_decorate46([
  (0, import_typeorm46.PrimaryGeneratedColumn)(),
  _ts_metadata46("design:type", Number)
], FavoriteHcp.prototype, "id", void 0);
_ts_decorate46([
  (0, import_typeorm46.Column)({
    type: "int"
  }),
  _ts_metadata46("design:type", Number)
], FavoriteHcp.prototype, "user_id", void 0);
_ts_decorate46([
  (0, import_typeorm46.Column)({
    type: "int"
  }),
  _ts_metadata46("design:type", Number)
], FavoriteHcp.prototype, "h_c_p_id", void 0);
_ts_decorate46([
  (0, import_typeorm46.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata46("design:type", typeof Date === "undefined" ? Object : Date)
], FavoriteHcp.prototype, "created_at", void 0);
_ts_decorate46([
  (0, import_typeorm46.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata46("design:type", typeof Date === "undefined" ? Object : Date)
], FavoriteHcp.prototype, "updated_at", void 0);
FavoriteHcp = _ts_decorate46([
  (0, import_typeorm46.Entity)("favorite_hcps")
], FavoriteHcp);

// src/entity/hcpAppointment.entity.ts
var import_typeorm47 = require("typeorm");
function _ts_decorate47(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate47, "_ts_decorate");
function _ts_metadata47(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata47, "_ts_metadata");
var HcpAppointment = class {
  static {
    __name(this, "HcpAppointment");
  }
  id;
  user;
  h_c_p;
  start;
  end;
  type;
  date;
  date_time_stamp;
  is_approved;
  is_finished;
  is_rejected;
  status;
  is_rated;
  rating;
  rating_comment;
  reason_to_reject;
  created_at;
  updated_at;
};
_ts_decorate47([
  (0, import_typeorm47.PrimaryGeneratedColumn)(),
  _ts_metadata47("design:type", Number)
], HcpAppointment.prototype, "id", void 0);
_ts_decorate47([
  (0, import_typeorm47.ManyToOne)(() => User, (user) => user.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata47("design:type", typeof User === "undefined" ? Object : User)
], HcpAppointment.prototype, "user", void 0);
_ts_decorate47([
  (0, import_typeorm47.ManyToOne)(() => HCP, (hcp) => hcp.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata47("design:type", typeof HCP === "undefined" ? Object : HCP)
], HcpAppointment.prototype, "h_c_p", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "varchar"
  }),
  _ts_metadata47("design:type", String)
], HcpAppointment.prototype, "start", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "varchar"
  }),
  _ts_metadata47("design:type", String)
], HcpAppointment.prototype, "end", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "varchar"
  }),
  _ts_metadata47("design:type", String)
], HcpAppointment.prototype, "type", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "varchar"
  }),
  _ts_metadata47("design:type", String)
], HcpAppointment.prototype, "date", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata47("design:type", typeof Date === "undefined" ? Object : Date)
], HcpAppointment.prototype, "date_time_stamp", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata47("design:type", Boolean)
], HcpAppointment.prototype, "is_approved", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata47("design:type", Boolean)
], HcpAppointment.prototype, "is_finished", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata47("design:type", Boolean)
], HcpAppointment.prototype, "is_rejected", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata47("design:type", Number)
], HcpAppointment.prototype, "status", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata47("design:type", Boolean)
], HcpAppointment.prototype, "is_rated", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata47("design:type", Number)
], HcpAppointment.prototype, "rating", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata47("design:type", String)
], HcpAppointment.prototype, "rating_comment", void 0);
_ts_decorate47([
  (0, import_typeorm47.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata47("design:type", String)
], HcpAppointment.prototype, "reason_to_reject", void 0);
_ts_decorate47([
  (0, import_typeorm47.CreateDateColumn)(),
  _ts_metadata47("design:type", typeof Date === "undefined" ? Object : Date)
], HcpAppointment.prototype, "created_at", void 0);
_ts_decorate47([
  (0, import_typeorm47.UpdateDateColumn)(),
  _ts_metadata47("design:type", typeof Date === "undefined" ? Object : Date)
], HcpAppointment.prototype, "updated_at", void 0);
HcpAppointment = _ts_decorate47([
  (0, import_typeorm47.Entity)("hcp_appointments")
], HcpAppointment);

// src/entity/hcpBlogPost.entity.ts
var import_typeorm48 = require("typeorm");
function _ts_decorate48(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate48, "_ts_decorate");
function _ts_metadata48(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata48, "_ts_metadata");
var HcpBlogPost = class {
  static {
    __name(this, "HcpBlogPost");
  }
  id;
  countryId;
  blogCategoryId;
  specialtyId;
  hcpId;
  author;
  slug;
  img;
  youtubeLink;
  title;
  content;
  metadata;
  keywords;
  language;
  views;
  isApproved;
  createdAt;
  updatedAt;
};
_ts_decorate48([
  (0, import_typeorm48.PrimaryGeneratedColumn)(),
  _ts_metadata48("design:type", Number)
], HcpBlogPost.prototype, "id", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)(),
  _ts_metadata48("design:type", Number)
], HcpBlogPost.prototype, "countryId", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)(),
  _ts_metadata48("design:type", Number)
], HcpBlogPost.prototype, "blogCategoryId", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)(),
  _ts_metadata48("design:type", Number)
], HcpBlogPost.prototype, "specialtyId", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)(),
  _ts_metadata48("design:type", Number)
], HcpBlogPost.prototype, "hcpId", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)(),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "author", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)({
    nullable: true,
    unique: true
  }),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "slug", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)(),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "img", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)({
    nullable: true
  }),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "youtubeLink", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)(),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "title", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)("text"),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "content", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)("text", {
    nullable: true
  }),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "metadata", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)("text", {
    nullable: true
  }),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "keywords", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)(),
  _ts_metadata48("design:type", String)
], HcpBlogPost.prototype, "language", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)({
    default: 0
  }),
  _ts_metadata48("design:type", Number)
], HcpBlogPost.prototype, "views", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)({
    default: false
  }),
  _ts_metadata48("design:type", Boolean)
], HcpBlogPost.prototype, "isApproved", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata48("design:type", typeof Date === "undefined" ? Object : Date)
], HcpBlogPost.prototype, "createdAt", void 0);
_ts_decorate48([
  (0, import_typeorm48.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata48("design:type", typeof Date === "undefined" ? Object : Date)
], HcpBlogPost.prototype, "updatedAt", void 0);
HcpBlogPost = _ts_decorate48([
  (0, import_typeorm48.Entity)("hcp_blog_posts")
], HcpBlogPost);

// src/entity/hcpBlogPostComment.entity.ts
var import_typeorm49 = require("typeorm");
function _ts_decorate49(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate49, "_ts_decorate");
function _ts_metadata49(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata49, "_ts_metadata");
var HcpBlogPostComment = class {
  static {
    __name(this, "HcpBlogPostComment");
  }
  id;
  hcpBlogPostId;
  userId;
  content;
  createdAt;
  updatedAt;
};
_ts_decorate49([
  (0, import_typeorm49.PrimaryGeneratedColumn)(),
  _ts_metadata49("design:type", Number)
], HcpBlogPostComment.prototype, "id", void 0);
_ts_decorate49([
  (0, import_typeorm49.Column)(),
  _ts_metadata49("design:type", Number)
], HcpBlogPostComment.prototype, "hcpBlogPostId", void 0);
_ts_decorate49([
  (0, import_typeorm49.Column)(),
  _ts_metadata49("design:type", Number)
], HcpBlogPostComment.prototype, "userId", void 0);
_ts_decorate49([
  (0, import_typeorm49.Column)("text"),
  _ts_metadata49("design:type", String)
], HcpBlogPostComment.prototype, "content", void 0);
_ts_decorate49([
  (0, import_typeorm49.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata49("design:type", typeof Date === "undefined" ? Object : Date)
], HcpBlogPostComment.prototype, "createdAt", void 0);
_ts_decorate49([
  (0, import_typeorm49.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata49("design:type", typeof Date === "undefined" ? Object : Date)
], HcpBlogPostComment.prototype, "updatedAt", void 0);
HcpBlogPostComment = _ts_decorate49([
  (0, import_typeorm49.Entity)("hcp_blog_post_comments")
], HcpBlogPostComment);

// src/entity/hcpBlogPostFavorite.entity.ts
var import_typeorm50 = require("typeorm");
function _ts_decorate50(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate50, "_ts_decorate");
function _ts_metadata50(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata50, "_ts_metadata");
var HcpBlogPostFavorite = class {
  static {
    __name(this, "HcpBlogPostFavorite");
  }
  id;
  hcpBlogPostId;
  userId;
  createdAt;
  updatedAt;
};
_ts_decorate50([
  (0, import_typeorm50.PrimaryGeneratedColumn)(),
  _ts_metadata50("design:type", Number)
], HcpBlogPostFavorite.prototype, "id", void 0);
_ts_decorate50([
  (0, import_typeorm50.Column)({
    type: "int"
  }),
  _ts_metadata50("design:type", Number)
], HcpBlogPostFavorite.prototype, "hcpBlogPostId", void 0);
_ts_decorate50([
  (0, import_typeorm50.Column)({
    type: "int"
  }),
  _ts_metadata50("design:type", Number)
], HcpBlogPostFavorite.prototype, "userId", void 0);
_ts_decorate50([
  (0, import_typeorm50.CreateDateColumn)(),
  _ts_metadata50("design:type", typeof Date === "undefined" ? Object : Date)
], HcpBlogPostFavorite.prototype, "createdAt", void 0);
_ts_decorate50([
  (0, import_typeorm50.UpdateDateColumn)(),
  _ts_metadata50("design:type", typeof Date === "undefined" ? Object : Date)
], HcpBlogPostFavorite.prototype, "updatedAt", void 0);
HcpBlogPostFavorite = _ts_decorate50([
  (0, import_typeorm50.Entity)("hcp_blog_post_favorites")
], HcpBlogPostFavorite);

// src/entity/hcpBlogPostLike.entity.ts
var import_typeorm51 = require("typeorm");
function _ts_decorate51(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate51, "_ts_decorate");
function _ts_metadata51(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata51, "_ts_metadata");
var HcpBlogPostLike = class {
  static {
    __name(this, "HcpBlogPostLike");
  }
  id;
  hcpBlogPostId;
  userId;
  createdAt;
  updatedAt;
};
_ts_decorate51([
  (0, import_typeorm51.PrimaryGeneratedColumn)(),
  _ts_metadata51("design:type", Number)
], HcpBlogPostLike.prototype, "id", void 0);
_ts_decorate51([
  (0, import_typeorm51.Column)({
    type: "int"
  }),
  _ts_metadata51("design:type", Number)
], HcpBlogPostLike.prototype, "hcpBlogPostId", void 0);
_ts_decorate51([
  (0, import_typeorm51.Column)({
    type: "int"
  }),
  _ts_metadata51("design:type", Number)
], HcpBlogPostLike.prototype, "userId", void 0);
_ts_decorate51([
  (0, import_typeorm51.CreateDateColumn)(),
  _ts_metadata51("design:type", typeof Date === "undefined" ? Object : Date)
], HcpBlogPostLike.prototype, "createdAt", void 0);
_ts_decorate51([
  (0, import_typeorm51.UpdateDateColumn)(),
  _ts_metadata51("design:type", typeof Date === "undefined" ? Object : Date)
], HcpBlogPostLike.prototype, "updatedAt", void 0);
HcpBlogPostLike = _ts_decorate51([
  (0, import_typeorm51.Entity)("hcp_blog_post_likes")
], HcpBlogPostLike);

// src/entity/hcpLanguage.entity.ts
var import_typeorm52 = require("typeorm");
function _ts_decorate52(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate52, "_ts_decorate");
function _ts_metadata52(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata52, "_ts_metadata");
var HCPLanguage = class {
  static {
    __name(this, "HCPLanguage");
  }
  id;
  language;
  hcp;
  createdAt;
  updatedAt;
};
_ts_decorate52([
  (0, import_typeorm52.PrimaryGeneratedColumn)(),
  _ts_metadata52("design:type", Number)
], HCPLanguage.prototype, "id", void 0);
_ts_decorate52([
  (0, import_typeorm52.ManyToOne)(() => Language, (language) => language.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata52("design:type", typeof Language === "undefined" ? Object : Language)
], HCPLanguage.prototype, "language", void 0);
_ts_decorate52([
  (0, import_typeorm52.ManyToOne)(() => HCP, (hcp) => hcp.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata52("design:type", typeof HCP === "undefined" ? Object : HCP)
], HCPLanguage.prototype, "hcp", void 0);
_ts_decorate52([
  (0, import_typeorm52.CreateDateColumn)(),
  _ts_metadata52("design:type", typeof Date === "undefined" ? Object : Date)
], HCPLanguage.prototype, "createdAt", void 0);
_ts_decorate52([
  (0, import_typeorm52.UpdateDateColumn)(),
  _ts_metadata52("design:type", typeof Date === "undefined" ? Object : Date)
], HCPLanguage.prototype, "updatedAt", void 0);
HCPLanguage = _ts_decorate52([
  (0, import_typeorm52.Entity)("hcp_languages")
], HCPLanguage);

// src/entity/hcpNotification.entity.ts
var import_typeorm53 = require("typeorm");
function _ts_decorate53(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate53, "_ts_decorate");
function _ts_metadata53(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata53, "_ts_metadata");
var HcpNotification = class {
  static {
    __name(this, "HcpNotification");
  }
  id;
  healthcareProvider;
  title;
  titleAr;
  context;
  contextAr;
  createdAt;
  updatedAt;
};
_ts_decorate53([
  (0, import_typeorm53.PrimaryGeneratedColumn)(),
  _ts_metadata53("design:type", Number)
], HcpNotification.prototype, "id", void 0);
_ts_decorate53([
  (0, import_typeorm53.ManyToOne)(() => HCP, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata53("design:type", typeof HCP === "undefined" ? Object : HCP)
], HcpNotification.prototype, "healthcareProvider", void 0);
_ts_decorate53([
  (0, import_typeorm53.Column)(),
  _ts_metadata53("design:type", String)
], HcpNotification.prototype, "title", void 0);
_ts_decorate53([
  (0, import_typeorm53.Column)(),
  _ts_metadata53("design:type", String)
], HcpNotification.prototype, "titleAr", void 0);
_ts_decorate53([
  (0, import_typeorm53.Column)(),
  _ts_metadata53("design:type", String)
], HcpNotification.prototype, "context", void 0);
_ts_decorate53([
  (0, import_typeorm53.Column)(),
  _ts_metadata53("design:type", String)
], HcpNotification.prototype, "contextAr", void 0);
_ts_decorate53([
  (0, import_typeorm53.CreateDateColumn)(),
  _ts_metadata53("design:type", typeof Date === "undefined" ? Object : Date)
], HcpNotification.prototype, "createdAt", void 0);
_ts_decorate53([
  (0, import_typeorm53.UpdateDateColumn)(),
  _ts_metadata53("design:type", typeof Date === "undefined" ? Object : Date)
], HcpNotification.prototype, "updatedAt", void 0);
HcpNotification = _ts_decorate53([
  (0, import_typeorm53.Entity)("hcp_notifications")
], HcpNotification);

// src/entity/hcpOtpPin.entity.ts
var import_typeorm54 = require("typeorm");
function _ts_decorate54(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate54, "_ts_decorate");
function _ts_metadata54(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata54, "_ts_metadata");
var DoctorOtpPin = class {
  static {
    __name(this, "DoctorOtpPin");
  }
  id;
  doctor;
  pin;
  expiresAt;
  createdAt;
  updatedAt;
};
_ts_decorate54([
  (0, import_typeorm54.PrimaryGeneratedColumn)(),
  _ts_metadata54("design:type", Number)
], DoctorOtpPin.prototype, "id", void 0);
_ts_decorate54([
  (0, import_typeorm54.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata54("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], DoctorOtpPin.prototype, "doctor", void 0);
_ts_decorate54([
  (0, import_typeorm54.Column)({
    type: "varchar",
    length: 10
  }),
  _ts_metadata54("design:type", String)
], DoctorOtpPin.prototype, "pin", void 0);
_ts_decorate54([
  (0, import_typeorm54.Column)({
    type: "timestamp"
  }),
  _ts_metadata54("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorOtpPin.prototype, "expiresAt", void 0);
_ts_decorate54([
  (0, import_typeorm54.CreateDateColumn)(),
  _ts_metadata54("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorOtpPin.prototype, "createdAt", void 0);
_ts_decorate54([
  (0, import_typeorm54.UpdateDateColumn)(),
  _ts_metadata54("design:type", typeof Date === "undefined" ? Object : Date)
], DoctorOtpPin.prototype, "updatedAt", void 0);
DoctorOtpPin = _ts_decorate54([
  (0, import_typeorm54.Entity)("doctor_otp_pins")
], DoctorOtpPin);

// src/entity/hcpRating.entity.ts
var import_typeorm55 = require("typeorm");
function _ts_decorate55(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate55, "_ts_decorate");
function _ts_metadata55(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata55, "_ts_metadata");
var HcpRating = class {
  static {
    __name(this, "HcpRating");
  }
  id;
  rating;
  userId;
  user;
  hcpId;
  hcp;
  comment;
  createdAt;
  updatedAt;
};
_ts_decorate55([
  (0, import_typeorm55.PrimaryGeneratedColumn)(),
  _ts_metadata55("design:type", Number)
], HcpRating.prototype, "id", void 0);
_ts_decorate55([
  (0, import_typeorm55.Column)({
    type: "int"
  }),
  _ts_metadata55("design:type", Number)
], HcpRating.prototype, "rating", void 0);
_ts_decorate55([
  (0, import_typeorm55.Column)({
    type: "int"
  }),
  _ts_metadata55("design:type", Number)
], HcpRating.prototype, "userId", void 0);
_ts_decorate55([
  (0, import_typeorm55.ManyToOne)(() => User),
  (0, import_typeorm55.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata55("design:type", typeof User === "undefined" ? Object : User)
], HcpRating.prototype, "user", void 0);
_ts_decorate55([
  (0, import_typeorm55.Column)({
    type: "int"
  }),
  _ts_metadata55("design:type", Number)
], HcpRating.prototype, "hcpId", void 0);
_ts_decorate55([
  (0, import_typeorm55.ManyToOne)(() => HCP),
  (0, import_typeorm55.JoinColumn)({
    name: "h_c_p_id"
  }),
  _ts_metadata55("design:type", typeof HCP === "undefined" ? Object : HCP)
], HcpRating.prototype, "hcp", void 0);
_ts_decorate55([
  (0, import_typeorm55.Column)({
    type: "text"
  }),
  _ts_metadata55("design:type", String)
], HcpRating.prototype, "comment", void 0);
_ts_decorate55([
  (0, import_typeorm55.CreateDateColumn)(),
  _ts_metadata55("design:type", typeof Date === "undefined" ? Object : Date)
], HcpRating.prototype, "createdAt", void 0);
_ts_decorate55([
  (0, import_typeorm55.UpdateDateColumn)(),
  _ts_metadata55("design:type", typeof Date === "undefined" ? Object : Date)
], HcpRating.prototype, "updatedAt", void 0);
HcpRating = _ts_decorate55([
  (0, import_typeorm55.Entity)("hcp_ratings")
], HcpRating);

// src/entity/hcpTransactionRecord.entity.ts
var import_typeorm56 = require("typeorm");
function _ts_decorate56(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate56, "_ts_decorate");
function _ts_metadata56(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata56, "_ts_metadata");
var HcpTransactionRecord = class {
  static {
    __name(this, "HcpTransactionRecord");
  }
  id;
  healthcareProvider;
  admin;
  type;
  amount;
  balanceBefore;
  balanceAfter;
  explanation;
  createdAt;
  updatedAt;
};
_ts_decorate56([
  (0, import_typeorm56.PrimaryGeneratedColumn)(),
  _ts_metadata56("design:type", Number)
], HcpTransactionRecord.prototype, "id", void 0);
_ts_decorate56([
  (0, import_typeorm56.ManyToOne)(() => HCP, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata56("design:type", typeof HCP === "undefined" ? Object : HCP)
], HcpTransactionRecord.prototype, "healthcareProvider", void 0);
_ts_decorate56([
  (0, import_typeorm56.ManyToOne)(() => Admin, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata56("design:type", typeof Admin === "undefined" ? Object : Admin)
], HcpTransactionRecord.prototype, "admin", void 0);
_ts_decorate56([
  (0, import_typeorm56.Column)(),
  _ts_metadata56("design:type", String)
], HcpTransactionRecord.prototype, "type", void 0);
_ts_decorate56([
  (0, import_typeorm56.Column)({
    type: "int"
  }),
  _ts_metadata56("design:type", Number)
], HcpTransactionRecord.prototype, "amount", void 0);
_ts_decorate56([
  (0, import_typeorm56.Column)({
    type: "int"
  }),
  _ts_metadata56("design:type", Number)
], HcpTransactionRecord.prototype, "balanceBefore", void 0);
_ts_decorate56([
  (0, import_typeorm56.Column)({
    type: "int"
  }),
  _ts_metadata56("design:type", Number)
], HcpTransactionRecord.prototype, "balanceAfter", void 0);
_ts_decorate56([
  (0, import_typeorm56.Column)("text"),
  _ts_metadata56("design:type", String)
], HcpTransactionRecord.prototype, "explanation", void 0);
_ts_decorate56([
  (0, import_typeorm56.CreateDateColumn)(),
  _ts_metadata56("design:type", typeof Date === "undefined" ? Object : Date)
], HcpTransactionRecord.prototype, "createdAt", void 0);
_ts_decorate56([
  (0, import_typeorm56.UpdateDateColumn)(),
  _ts_metadata56("design:type", typeof Date === "undefined" ? Object : Date)
], HcpTransactionRecord.prototype, "updatedAt", void 0);
HcpTransactionRecord = _ts_decorate56([
  (0, import_typeorm56.Entity)("hcp_transaction_records")
], HcpTransactionRecord);

// src/entity/hcpWorkingHour.entity.ts
var import_typeorm57 = require("typeorm");
function _ts_decorate57(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate57, "_ts_decorate");
function _ts_metadata57(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata57, "_ts_metadata");
var HcpWorkingHour = class {
  static {
    __name(this, "HcpWorkingHour");
  }
  id;
  h_c_p;
  start;
  end;
  day_time;
  created_at;
  updated_at;
};
_ts_decorate57([
  (0, import_typeorm57.PrimaryGeneratedColumn)(),
  _ts_metadata57("design:type", Number)
], HcpWorkingHour.prototype, "id", void 0);
_ts_decorate57([
  (0, import_typeorm57.ManyToOne)(() => HCP, (hcp) => hcp.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata57("design:type", typeof HCP === "undefined" ? Object : HCP)
], HcpWorkingHour.prototype, "h_c_p", void 0);
_ts_decorate57([
  (0, import_typeorm57.Column)({
    type: "varchar"
  }),
  _ts_metadata57("design:type", String)
], HcpWorkingHour.prototype, "start", void 0);
_ts_decorate57([
  (0, import_typeorm57.Column)({
    type: "varchar"
  }),
  _ts_metadata57("design:type", String)
], HcpWorkingHour.prototype, "end", void 0);
_ts_decorate57([
  (0, import_typeorm57.Column)({
    type: "varchar"
  }),
  _ts_metadata57("design:type", String)
], HcpWorkingHour.prototype, "day_time", void 0);
_ts_decorate57([
  (0, import_typeorm57.CreateDateColumn)(),
  _ts_metadata57("design:type", typeof Date === "undefined" ? Object : Date)
], HcpWorkingHour.prototype, "created_at", void 0);
_ts_decorate57([
  (0, import_typeorm57.UpdateDateColumn)(),
  _ts_metadata57("design:type", typeof Date === "undefined" ? Object : Date)
], HcpWorkingHour.prototype, "updated_at", void 0);
HcpWorkingHour = _ts_decorate57([
  (0, import_typeorm57.Entity)("hcp_working_hours")
], HcpWorkingHour);

// src/entity/hcpWorkLocation.entity.ts
var import_typeorm58 = require("typeorm");
function _ts_decorate58(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate58, "_ts_decorate");
function _ts_metadata58(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata58, "_ts_metadata");
var HcpWorkLocation = class {
  static {
    __name(this, "HcpWorkLocation");
  }
  id;
  hcpId;
  hospitalId;
  name;
  nameAr;
  nameEn;
  nameTr;
  phone;
  address;
  addressAr;
  addressEn;
  addressTr;
  createdAt;
  updatedAt;
};
_ts_decorate58([
  (0, import_typeorm58.PrimaryGeneratedColumn)(),
  _ts_metadata58("design:type", Number)
], HcpWorkLocation.prototype, "id", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)(),
  _ts_metadata58("design:type", Number)
], HcpWorkLocation.prototype, "hcpId", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    nullable: true
  }),
  _ts_metadata58("design:type", Number)
], HcpWorkLocation.prototype, "hospitalId", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)(),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "name", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    nullable: true
  }),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "nameAr", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    nullable: true
  }),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "nameEn", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    nullable: true
  }),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "nameTr", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)(),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "phone", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)(),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "address", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    nullable: true
  }),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "addressAr", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    nullable: true
  }),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "addressEn", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    nullable: true
  }),
  _ts_metadata58("design:type", String)
], HcpWorkLocation.prototype, "addressTr", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata58("design:type", typeof Date === "undefined" ? Object : Date)
], HcpWorkLocation.prototype, "createdAt", void 0);
_ts_decorate58([
  (0, import_typeorm58.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata58("design:type", typeof Date === "undefined" ? Object : Date)
], HcpWorkLocation.prototype, "updatedAt", void 0);
HcpWorkLocation = _ts_decorate58([
  (0, import_typeorm58.Entity)("hcp_work_locations")
], HcpWorkLocation);

// src/entity/hospitalAdmin.entity.ts
var import_typeorm59 = require("typeorm");
function _ts_decorate59(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate59, "_ts_decorate");
function _ts_metadata59(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata59, "_ts_metadata");
var HospitalAdmin = class {
  static {
    __name(this, "HospitalAdmin");
  }
  id;
  hospital;
  countryId;
  firstName;
  lastName;
  email;
  emailVerifiedAt;
  phone;
  phoneVerifiedAt;
  password;
  profileImg;
  isActive;
  isOwner;
  rememberToken;
  createdAt;
  updatedAt;
};
_ts_decorate59([
  (0, import_typeorm59.PrimaryGeneratedColumn)(),
  _ts_metadata59("design:type", Number)
], HospitalAdmin.prototype, "id", void 0);
_ts_decorate59([
  (0, import_typeorm59.ManyToOne)(() => Hospital, {
    nullable: true,
    onDelete: "SET NULL"
  }),
  _ts_metadata59("design:type", typeof Hospital === "undefined" ? Object : Hospital)
], HospitalAdmin.prototype, "hospital", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)(),
  _ts_metadata59("design:type", String)
], HospitalAdmin.prototype, "countryId", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)(),
  _ts_metadata59("design:type", String)
], HospitalAdmin.prototype, "firstName", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)(),
  _ts_metadata59("design:type", String)
], HospitalAdmin.prototype, "lastName", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)({
    unique: true
  }),
  _ts_metadata59("design:type", String)
], HospitalAdmin.prototype, "email", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata59("design:type", Object)
], HospitalAdmin.prototype, "emailVerifiedAt", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)({
    unique: true
  }),
  _ts_metadata59("design:type", String)
], HospitalAdmin.prototype, "phone", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata59("design:type", Object)
], HospitalAdmin.prototype, "phoneVerifiedAt", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)(),
  _ts_metadata59("design:type", String)
], HospitalAdmin.prototype, "password", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)({
    default: "https://s3.us-east-2.amazonaws.com/sehapracto-images/user_profile_images/Pc7bLYpjW2c56Jnb8ovCq3ZrA3rO8vPEL0j4ZsXH.jpg"
  }),
  _ts_metadata59("design:type", String)
], HospitalAdmin.prototype, "profileImg", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)({
    default: false
  }),
  _ts_metadata59("design:type", Boolean)
], HospitalAdmin.prototype, "isActive", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)({
    default: false
  }),
  _ts_metadata59("design:type", Boolean)
], HospitalAdmin.prototype, "isOwner", void 0);
_ts_decorate59([
  (0, import_typeorm59.Column)({
    nullable: true
  }),
  _ts_metadata59("design:type", String)
], HospitalAdmin.prototype, "rememberToken", void 0);
_ts_decorate59([
  (0, import_typeorm59.CreateDateColumn)(),
  _ts_metadata59("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalAdmin.prototype, "createdAt", void 0);
_ts_decorate59([
  (0, import_typeorm59.UpdateDateColumn)(),
  _ts_metadata59("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalAdmin.prototype, "updatedAt", void 0);
HospitalAdmin = _ts_decorate59([
  (0, import_typeorm59.Entity)("hospital_admins")
], HospitalAdmin);

// src/entity/hospitalAppointment.entity.ts
var import_typeorm60 = require("typeorm");
function _ts_decorate60(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate60, "_ts_decorate");
function _ts_metadata60(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata60, "_ts_metadata");
var HospitalAppointment = class {
  static {
    __name(this, "HospitalAppointment");
  }
  id;
  user_id;
  hospital_id;
  hospital_department_id;
  hospital_doctor_id;
  time;
  date;
  status;
  is_rated;
  rating;
  rating_comment;
  price;
  booked_by;
  date_time_stamp;
  created_at;
  updated_at;
};
_ts_decorate60([
  (0, import_typeorm60.PrimaryGeneratedColumn)(),
  _ts_metadata60("design:type", Number)
], HospitalAppointment.prototype, "id", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)(),
  _ts_metadata60("design:type", Number)
], HospitalAppointment.prototype, "user_id", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)(),
  _ts_metadata60("design:type", Number)
], HospitalAppointment.prototype, "hospital_id", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)(),
  _ts_metadata60("design:type", Number)
], HospitalAppointment.prototype, "hospital_department_id", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    nullable: true
  }),
  _ts_metadata60("design:type", Number)
], HospitalAppointment.prototype, "hospital_doctor_id", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    nullable: true
  }),
  _ts_metadata60("design:type", String)
], HospitalAppointment.prototype, "time", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    nullable: true
  }),
  _ts_metadata60("design:type", String)
], HospitalAppointment.prototype, "date", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    default: 0
  }),
  _ts_metadata60("design:type", Number)
], HospitalAppointment.prototype, "status", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    default: false
  }),
  _ts_metadata60("design:type", Boolean)
], HospitalAppointment.prototype, "is_rated", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    default: 0
  }),
  _ts_metadata60("design:type", Number)
], HospitalAppointment.prototype, "rating", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata60("design:type", String)
], HospitalAppointment.prototype, "rating_comment", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    default: 0
  }),
  _ts_metadata60("design:type", Number)
], HospitalAppointment.prototype, "price", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    default: "Not specified"
  }),
  _ts_metadata60("design:type", String)
], HospitalAppointment.prototype, "booked_by", void 0);
_ts_decorate60([
  (0, import_typeorm60.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata60("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalAppointment.prototype, "date_time_stamp", void 0);
_ts_decorate60([
  (0, import_typeorm60.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata60("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalAppointment.prototype, "created_at", void 0);
_ts_decorate60([
  (0, import_typeorm60.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata60("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalAppointment.prototype, "updated_at", void 0);
HospitalAppointment = _ts_decorate60([
  (0, import_typeorm60.Entity)("hospital_appointments")
], HospitalAppointment);

// src/entity/hospitalBranchDoctor.entity.ts
var import_typeorm61 = require("typeorm");
function _ts_decorate61(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate61, "_ts_decorate");
function _ts_metadata61(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata61, "_ts_metadata");
var HospitalBranchDoctor = class {
  static {
    __name(this, "HospitalBranchDoctor");
  }
  id;
  hospital_branch_id;
  hospital_doctor_id;
  created_at;
  updated_at;
};
_ts_decorate61([
  (0, import_typeorm61.PrimaryGeneratedColumn)(),
  _ts_metadata61("design:type", Number)
], HospitalBranchDoctor.prototype, "id", void 0);
_ts_decorate61([
  (0, import_typeorm61.Column)({
    type: "int"
  }),
  _ts_metadata61("design:type", Number)
], HospitalBranchDoctor.prototype, "hospital_branch_id", void 0);
_ts_decorate61([
  (0, import_typeorm61.Column)({
    type: "int"
  }),
  _ts_metadata61("design:type", Number)
], HospitalBranchDoctor.prototype, "hospital_doctor_id", void 0);
_ts_decorate61([
  (0, import_typeorm61.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata61("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalBranchDoctor.prototype, "created_at", void 0);
_ts_decorate61([
  (0, import_typeorm61.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata61("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalBranchDoctor.prototype, "updated_at", void 0);
HospitalBranchDoctor = _ts_decorate61([
  (0, import_typeorm61.Entity)("hospital_branch_doctors")
], HospitalBranchDoctor);

// src/entity/hospitalBranche.entity.ts
var import_typeorm62 = require("typeorm");
function _ts_decorate62(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate62, "_ts_decorate");
function _ts_metadata62(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata62, "_ts_metadata");
var HospitalBranch = class {
  static {
    __name(this, "HospitalBranch");
  }
  id;
  hospital_id;
  city_id;
  province_id;
  name;
  street_name;
  created_at;
  updated_at;
};
_ts_decorate62([
  (0, import_typeorm62.PrimaryGeneratedColumn)(),
  _ts_metadata62("design:type", Number)
], HospitalBranch.prototype, "id", void 0);
_ts_decorate62([
  (0, import_typeorm62.Column)({
    type: "int"
  }),
  _ts_metadata62("design:type", Number)
], HospitalBranch.prototype, "hospital_id", void 0);
_ts_decorate62([
  (0, import_typeorm62.Column)({
    type: "int",
    nullable: true
  }),
  _ts_metadata62("design:type", Number)
], HospitalBranch.prototype, "city_id", void 0);
_ts_decorate62([
  (0, import_typeorm62.Column)({
    type: "int",
    nullable: true
  }),
  _ts_metadata62("design:type", Number)
], HospitalBranch.prototype, "province_id", void 0);
_ts_decorate62([
  (0, import_typeorm62.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata62("design:type", String)
], HospitalBranch.prototype, "name", void 0);
_ts_decorate62([
  (0, import_typeorm62.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata62("design:type", String)
], HospitalBranch.prototype, "street_name", void 0);
_ts_decorate62([
  (0, import_typeorm62.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata62("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalBranch.prototype, "created_at", void 0);
_ts_decorate62([
  (0, import_typeorm62.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata62("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalBranch.prototype, "updated_at", void 0);
HospitalBranch = _ts_decorate62([
  (0, import_typeorm62.Entity)("hospital_branches")
], HospitalBranch);

// src/entity/hospitalDepartment.entity.ts
var import_typeorm63 = require("typeorm");
function _ts_decorate63(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate63, "_ts_decorate");
function _ts_metadata63(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata63, "_ts_metadata");
var HospitalDepartment = class {
  static {
    __name(this, "HospitalDepartment");
  }
  id;
  hospital_id;
  medical_specialty_id;
  is_hidden;
  created_at;
  updated_at;
};
_ts_decorate63([
  (0, import_typeorm63.PrimaryGeneratedColumn)(),
  _ts_metadata63("design:type", Number)
], HospitalDepartment.prototype, "id", void 0);
_ts_decorate63([
  (0, import_typeorm63.Column)(),
  _ts_metadata63("design:type", Number)
], HospitalDepartment.prototype, "hospital_id", void 0);
_ts_decorate63([
  (0, import_typeorm63.Column)(),
  _ts_metadata63("design:type", Number)
], HospitalDepartment.prototype, "medical_specialty_id", void 0);
_ts_decorate63([
  (0, import_typeorm63.Column)({
    default: false
  }),
  _ts_metadata63("design:type", Boolean)
], HospitalDepartment.prototype, "is_hidden", void 0);
_ts_decorate63([
  (0, import_typeorm63.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata63("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalDepartment.prototype, "created_at", void 0);
_ts_decorate63([
  (0, import_typeorm63.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata63("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalDepartment.prototype, "updated_at", void 0);
HospitalDepartment = _ts_decorate63([
  (0, import_typeorm63.Entity)("hospital_departments")
], HospitalDepartment);

// src/entity/hospitalDoctor.entity.ts
var import_typeorm64 = require("typeorm");
function _ts_decorate64(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate64, "_ts_decorate");
function _ts_metadata64(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata64, "_ts_metadata");
var HospitalDoctor = class {
  static {
    __name(this, "HospitalDoctor");
  }
  id;
  doctor;
  hospital;
  hospitalDepartment;
  isAvailable;
  createdAt;
  updatedAt;
};
_ts_decorate64([
  (0, import_typeorm64.PrimaryGeneratedColumn)(),
  _ts_metadata64("design:type", Number)
], HospitalDoctor.prototype, "id", void 0);
_ts_decorate64([
  (0, import_typeorm64.ManyToOne)(() => Doctor, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata64("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], HospitalDoctor.prototype, "doctor", void 0);
_ts_decorate64([
  (0, import_typeorm64.ManyToOne)(() => Hospital, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata64("design:type", typeof Hospital === "undefined" ? Object : Hospital)
], HospitalDoctor.prototype, "hospital", void 0);
_ts_decorate64([
  (0, import_typeorm64.ManyToOne)(() => HospitalDepartment, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata64("design:type", typeof HospitalDepartment === "undefined" ? Object : HospitalDepartment)
], HospitalDoctor.prototype, "hospitalDepartment", void 0);
_ts_decorate64([
  (0, import_typeorm64.Column)({
    default: false
  }),
  _ts_metadata64("design:type", Boolean)
], HospitalDoctor.prototype, "isAvailable", void 0);
_ts_decorate64([
  (0, import_typeorm64.CreateDateColumn)(),
  _ts_metadata64("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalDoctor.prototype, "createdAt", void 0);
_ts_decorate64([
  (0, import_typeorm64.UpdateDateColumn)(),
  _ts_metadata64("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalDoctor.prototype, "updatedAt", void 0);
HospitalDoctor = _ts_decorate64([
  (0, import_typeorm64.Entity)("hospital_doctors")
], HospitalDoctor);

// src/entity/hospitalDoctorWorkHour.entity.ts
var import_typeorm65 = require("typeorm");
function _ts_decorate65(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate65, "_ts_decorate");
function _ts_metadata65(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata65, "_ts_metadata");
var HospitalDoctorWorkHour = class {
  static {
    __name(this, "HospitalDoctorWorkHour");
  }
  id;
  hospitalDoctorId;
  hospitalId;
  day;
  startTime;
  dayTime;
  createdAt;
  updatedAt;
};
_ts_decorate65([
  (0, import_typeorm65.PrimaryGeneratedColumn)(),
  _ts_metadata65("design:type", Number)
], HospitalDoctorWorkHour.prototype, "id", void 0);
_ts_decorate65([
  (0, import_typeorm65.Column)(),
  _ts_metadata65("design:type", Number)
], HospitalDoctorWorkHour.prototype, "hospitalDoctorId", void 0);
_ts_decorate65([
  (0, import_typeorm65.Column)(),
  _ts_metadata65("design:type", Number)
], HospitalDoctorWorkHour.prototype, "hospitalId", void 0);
_ts_decorate65([
  (0, import_typeorm65.Column)(),
  _ts_metadata65("design:type", String)
], HospitalDoctorWorkHour.prototype, "day", void 0);
_ts_decorate65([
  (0, import_typeorm65.Column)(),
  _ts_metadata65("design:type", String)
], HospitalDoctorWorkHour.prototype, "startTime", void 0);
_ts_decorate65([
  (0, import_typeorm65.Column)(),
  _ts_metadata65("design:type", String)
], HospitalDoctorWorkHour.prototype, "dayTime", void 0);
_ts_decorate65([
  (0, import_typeorm65.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata65("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalDoctorWorkHour.prototype, "createdAt", void 0);
_ts_decorate65([
  (0, import_typeorm65.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata65("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalDoctorWorkHour.prototype, "updatedAt", void 0);
HospitalDoctorWorkHour = _ts_decorate65([
  (0, import_typeorm65.Entity)("hospital_doctor_work_hours")
], HospitalDoctorWorkHour);

// src/entity/hospitalHCP.entity.ts
var import_typeorm66 = require("typeorm");
function _ts_decorate66(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate66, "_ts_decorate");
function _ts_metadata66(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata66, "_ts_metadata");
var HospitalHcp = class {
  static {
    __name(this, "HospitalHcp");
  }
  id;
  hcp_id;
  hospital_id;
  hospital_hcp_department_id;
  is_available;
  created_at;
  updated_at;
};
_ts_decorate66([
  (0, import_typeorm66.PrimaryGeneratedColumn)(),
  _ts_metadata66("design:type", Number)
], HospitalHcp.prototype, "id", void 0);
_ts_decorate66([
  (0, import_typeorm66.Column)({
    type: "int"
  }),
  _ts_metadata66("design:type", Number)
], HospitalHcp.prototype, "hcp_id", void 0);
_ts_decorate66([
  (0, import_typeorm66.Column)({
    type: "int"
  }),
  _ts_metadata66("design:type", Number)
], HospitalHcp.prototype, "hospital_id", void 0);
_ts_decorate66([
  (0, import_typeorm66.Column)({
    type: "int"
  }),
  _ts_metadata66("design:type", Number)
], HospitalHcp.prototype, "hospital_hcp_department_id", void 0);
_ts_decorate66([
  (0, import_typeorm66.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata66("design:type", Boolean)
], HospitalHcp.prototype, "is_available", void 0);
_ts_decorate66([
  (0, import_typeorm66.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata66("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcp.prototype, "created_at", void 0);
_ts_decorate66([
  (0, import_typeorm66.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata66("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcp.prototype, "updated_at", void 0);
HospitalHcp = _ts_decorate66([
  (0, import_typeorm66.Entity)("hospital_hcps")
], HospitalHcp);

// src/entity/hospitalHCPAppointment.entity.ts
var import_typeorm67 = require("typeorm");
function _ts_decorate67(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate67, "_ts_decorate");
function _ts_metadata67(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata67, "_ts_metadata");
var HospitalHcpAppointment = class {
  static {
    __name(this, "HospitalHcpAppointment");
  }
  id;
  userId;
  hospitalId;
  hospitalHcpDepartmentId;
  hospitalHcpId;
  time;
  date;
  status;
  isRated;
  rating;
  ratingComment;
  price;
  bookedBy;
  dateTimeStamp;
  createdAt;
  updatedAt;
};
_ts_decorate67([
  (0, import_typeorm67.PrimaryGeneratedColumn)(),
  _ts_metadata67("design:type", Number)
], HospitalHcpAppointment.prototype, "id", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)(),
  _ts_metadata67("design:type", Number)
], HospitalHcpAppointment.prototype, "userId", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)(),
  _ts_metadata67("design:type", Number)
], HospitalHcpAppointment.prototype, "hospitalId", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)(),
  _ts_metadata67("design:type", Number)
], HospitalHcpAppointment.prototype, "hospitalHcpDepartmentId", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    nullable: true
  }),
  _ts_metadata67("design:type", Number)
], HospitalHcpAppointment.prototype, "hospitalHcpId", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    nullable: true
  }),
  _ts_metadata67("design:type", String)
], HospitalHcpAppointment.prototype, "time", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    nullable: true
  }),
  _ts_metadata67("design:type", String)
], HospitalHcpAppointment.prototype, "date", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    default: 0
  }),
  _ts_metadata67("design:type", Number)
], HospitalHcpAppointment.prototype, "status", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    default: false
  }),
  _ts_metadata67("design:type", Boolean)
], HospitalHcpAppointment.prototype, "isRated", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    default: 0
  }),
  _ts_metadata67("design:type", Number)
], HospitalHcpAppointment.prototype, "rating", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata67("design:type", String)
], HospitalHcpAppointment.prototype, "ratingComment", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    default: 0
  }),
  _ts_metadata67("design:type", Number)
], HospitalHcpAppointment.prototype, "price", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    default: "Not specified"
  }),
  _ts_metadata67("design:type", String)
], HospitalHcpAppointment.prototype, "bookedBy", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata67("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcpAppointment.prototype, "dateTimeStamp", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata67("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcpAppointment.prototype, "createdAt", void 0);
_ts_decorate67([
  (0, import_typeorm67.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata67("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcpAppointment.prototype, "updatedAt", void 0);
HospitalHcpAppointment = _ts_decorate67([
  (0, import_typeorm67.Entity)("hospital_hcp_appointments")
], HospitalHcpAppointment);

// src/entity/hospitalHCPDepartment.entity.ts
var import_typeorm68 = require("typeorm");
function _ts_decorate68(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate68, "_ts_decorate");
function _ts_metadata68(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata68, "_ts_metadata");
var HospitalHcpDepartment = class {
  static {
    __name(this, "HospitalHcpDepartment");
  }
  id;
  hospital_id;
  specialty_id;
  is_hidden;
  created_at;
  updated_at;
};
_ts_decorate68([
  (0, import_typeorm68.PrimaryGeneratedColumn)(),
  _ts_metadata68("design:type", Number)
], HospitalHcpDepartment.prototype, "id", void 0);
_ts_decorate68([
  (0, import_typeorm68.Column)({
    type: "int"
  }),
  _ts_metadata68("design:type", Number)
], HospitalHcpDepartment.prototype, "hospital_id", void 0);
_ts_decorate68([
  (0, import_typeorm68.Column)({
    type: "int"
  }),
  _ts_metadata68("design:type", Number)
], HospitalHcpDepartment.prototype, "specialty_id", void 0);
_ts_decorate68([
  (0, import_typeorm68.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata68("design:type", Boolean)
], HospitalHcpDepartment.prototype, "is_hidden", void 0);
_ts_decorate68([
  (0, import_typeorm68.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata68("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcpDepartment.prototype, "created_at", void 0);
_ts_decorate68([
  (0, import_typeorm68.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata68("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcpDepartment.prototype, "updated_at", void 0);
HospitalHcpDepartment = _ts_decorate68([
  (0, import_typeorm68.Entity)("hospital_hcp_departments")
], HospitalHcpDepartment);

// src/entity/hospitalHCPWorkHour.entity.ts
var import_typeorm69 = require("typeorm");
function _ts_decorate69(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate69, "_ts_decorate");
function _ts_metadata69(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata69, "_ts_metadata");
var HospitalHcpWorkHour = class {
  static {
    __name(this, "HospitalHcpWorkHour");
  }
  id;
  hospitalHcpId;
  hospitalId;
  day;
  startTime;
  dayTime;
  createdAt;
  updatedAt;
};
_ts_decorate69([
  (0, import_typeorm69.PrimaryGeneratedColumn)(),
  _ts_metadata69("design:type", Number)
], HospitalHcpWorkHour.prototype, "id", void 0);
_ts_decorate69([
  (0, import_typeorm69.Column)(),
  _ts_metadata69("design:type", Number)
], HospitalHcpWorkHour.prototype, "hospitalHcpId", void 0);
_ts_decorate69([
  (0, import_typeorm69.Column)(),
  _ts_metadata69("design:type", Number)
], HospitalHcpWorkHour.prototype, "hospitalId", void 0);
_ts_decorate69([
  (0, import_typeorm69.Column)(),
  _ts_metadata69("design:type", String)
], HospitalHcpWorkHour.prototype, "day", void 0);
_ts_decorate69([
  (0, import_typeorm69.Column)(),
  _ts_metadata69("design:type", String)
], HospitalHcpWorkHour.prototype, "startTime", void 0);
_ts_decorate69([
  (0, import_typeorm69.Column)(),
  _ts_metadata69("design:type", String)
], HospitalHcpWorkHour.prototype, "dayTime", void 0);
_ts_decorate69([
  (0, import_typeorm69.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata69("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcpWorkHour.prototype, "createdAt", void 0);
_ts_decorate69([
  (0, import_typeorm69.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata69("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalHcpWorkHour.prototype, "updatedAt", void 0);
HospitalHcpWorkHour = _ts_decorate69([
  (0, import_typeorm69.Entity)("hospital_hcp_work_hours")
], HospitalHcpWorkHour);

// src/entity/hospitalImg.entity.ts
var import_typeorm70 = require("typeorm");
function _ts_decorate70(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate70, "_ts_decorate");
function _ts_metadata70(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata70, "_ts_metadata");
var HospitalImg = class {
  static {
    __name(this, "HospitalImg");
  }
  id;
  hospital;
  img;
  created_at;
  updated_at;
};
_ts_decorate70([
  (0, import_typeorm70.PrimaryGeneratedColumn)(),
  _ts_metadata70("design:type", Number)
], HospitalImg.prototype, "id", void 0);
_ts_decorate70([
  (0, import_typeorm70.ManyToOne)(() => Hospital, (hospital) => hospital.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata70("design:type", typeof Hospital === "undefined" ? Object : Hospital)
], HospitalImg.prototype, "hospital", void 0);
_ts_decorate70([
  (0, import_typeorm70.Column)(),
  _ts_metadata70("design:type", String)
], HospitalImg.prototype, "img", void 0);
_ts_decorate70([
  (0, import_typeorm70.CreateDateColumn)(),
  _ts_metadata70("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalImg.prototype, "created_at", void 0);
_ts_decorate70([
  (0, import_typeorm70.UpdateDateColumn)(),
  _ts_metadata70("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalImg.prototype, "updated_at", void 0);
HospitalImg = _ts_decorate70([
  (0, import_typeorm70.Entity)("hospital_imgs")
], HospitalImg);

// src/entity/hospitalInsurance.entity.ts
var import_typeorm71 = require("typeorm");
function _ts_decorate71(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate71, "_ts_decorate");
function _ts_metadata71(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata71, "_ts_metadata");
var HospitalInsurance = class {
  static {
    __name(this, "HospitalInsurance");
  }
  id;
  insuranceCompanyId;
  hospitalId;
  createdAt;
  updatedAt;
};
_ts_decorate71([
  (0, import_typeorm71.PrimaryGeneratedColumn)(),
  _ts_metadata71("design:type", Number)
], HospitalInsurance.prototype, "id", void 0);
_ts_decorate71([
  (0, import_typeorm71.Column)(),
  _ts_metadata71("design:type", Number)
], HospitalInsurance.prototype, "insuranceCompanyId", void 0);
_ts_decorate71([
  (0, import_typeorm71.Column)(),
  _ts_metadata71("design:type", Number)
], HospitalInsurance.prototype, "hospitalId", void 0);
_ts_decorate71([
  (0, import_typeorm71.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata71("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalInsurance.prototype, "createdAt", void 0);
_ts_decorate71([
  (0, import_typeorm71.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata71("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalInsurance.prototype, "updatedAt", void 0);
HospitalInsurance = _ts_decorate71([
  (0, import_typeorm71.Entity)("hospital_insurances")
], HospitalInsurance);

// src/entity/hospitalLocation.entity.ts
var import_typeorm72 = require("typeorm");
function _ts_decorate72(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate72, "_ts_decorate");
function _ts_metadata72(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata72, "_ts_metadata");
var HospitalLocation = class {
  static {
    __name(this, "HospitalLocation");
  }
  id;
  hospital;
  address;
  created_at;
  updated_at;
};
_ts_decorate72([
  (0, import_typeorm72.PrimaryGeneratedColumn)(),
  _ts_metadata72("design:type", Number)
], HospitalLocation.prototype, "id", void 0);
_ts_decorate72([
  (0, import_typeorm72.ManyToOne)(() => Hospital, (hospital) => hospital.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata72("design:type", typeof Hospital === "undefined" ? Object : Hospital)
], HospitalLocation.prototype, "hospital", void 0);
_ts_decorate72([
  (0, import_typeorm72.Column)(),
  _ts_metadata72("design:type", String)
], HospitalLocation.prototype, "address", void 0);
_ts_decorate72([
  (0, import_typeorm72.CreateDateColumn)(),
  _ts_metadata72("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalLocation.prototype, "created_at", void 0);
_ts_decorate72([
  (0, import_typeorm72.UpdateDateColumn)(),
  _ts_metadata72("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalLocation.prototype, "updated_at", void 0);
HospitalLocation = _ts_decorate72([
  (0, import_typeorm72.Entity)("hospital_locations")
], HospitalLocation);

// src/entity/hospitalOtpPin.entity.ts
var import_typeorm73 = require("typeorm");
function _ts_decorate73(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate73, "_ts_decorate");
function _ts_metadata73(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata73, "_ts_metadata");
var HospitalOtpPin = class {
  static {
    __name(this, "HospitalOtpPin");
  }
  id;
  hospitalId;
  pin;
  createdAt;
  updatedAt;
};
_ts_decorate73([
  (0, import_typeorm73.PrimaryGeneratedColumn)(),
  _ts_metadata73("design:type", Number)
], HospitalOtpPin.prototype, "id", void 0);
_ts_decorate73([
  (0, import_typeorm73.Column)(),
  _ts_metadata73("design:type", Number)
], HospitalOtpPin.prototype, "hospitalId", void 0);
_ts_decorate73([
  (0, import_typeorm73.Column)(),
  _ts_metadata73("design:type", String)
], HospitalOtpPin.prototype, "pin", void 0);
_ts_decorate73([
  (0, import_typeorm73.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata73("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalOtpPin.prototype, "createdAt", void 0);
_ts_decorate73([
  (0, import_typeorm73.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata73("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalOtpPin.prototype, "updatedAt", void 0);
HospitalOtpPin = _ts_decorate73([
  (0, import_typeorm73.Entity)("hospital_otp_pins")
], HospitalOtpPin);

// src/entity/hospitalRating.entity.ts
var import_typeorm74 = require("typeorm");
function _ts_decorate74(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate74, "_ts_decorate");
function _ts_metadata74(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata74, "_ts_metadata");
var HospitalRating = class {
  static {
    __name(this, "HospitalRating");
  }
  id;
  rating;
  userId;
  user;
  hospitalId;
  hospital;
  comment;
  createdAt;
  updatedAt;
};
_ts_decorate74([
  (0, import_typeorm74.PrimaryGeneratedColumn)(),
  _ts_metadata74("design:type", Number)
], HospitalRating.prototype, "id", void 0);
_ts_decorate74([
  (0, import_typeorm74.Column)({
    type: "int"
  }),
  _ts_metadata74("design:type", Number)
], HospitalRating.prototype, "rating", void 0);
_ts_decorate74([
  (0, import_typeorm74.Column)({
    type: "int"
  }),
  _ts_metadata74("design:type", Number)
], HospitalRating.prototype, "userId", void 0);
_ts_decorate74([
  (0, import_typeorm74.ManyToOne)(() => User),
  (0, import_typeorm74.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata74("design:type", typeof User === "undefined" ? Object : User)
], HospitalRating.prototype, "user", void 0);
_ts_decorate74([
  (0, import_typeorm74.Column)({
    type: "int"
  }),
  _ts_metadata74("design:type", Number)
], HospitalRating.prototype, "hospitalId", void 0);
_ts_decorate74([
  (0, import_typeorm74.ManyToOne)(() => Hospital),
  (0, import_typeorm74.JoinColumn)({
    name: "hospital_id"
  }),
  _ts_metadata74("design:type", typeof Hospital === "undefined" ? Object : Hospital)
], HospitalRating.prototype, "hospital", void 0);
_ts_decorate74([
  (0, import_typeorm74.Column)({
    type: "text"
  }),
  _ts_metadata74("design:type", String)
], HospitalRating.prototype, "comment", void 0);
_ts_decorate74([
  (0, import_typeorm74.CreateDateColumn)(),
  _ts_metadata74("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalRating.prototype, "createdAt", void 0);
_ts_decorate74([
  (0, import_typeorm74.UpdateDateColumn)(),
  _ts_metadata74("design:type", typeof Date === "undefined" ? Object : Date)
], HospitalRating.prototype, "updatedAt", void 0);
HospitalRating = _ts_decorate74([
  (0, import_typeorm74.Entity)("hospital_ratings")
], HospitalRating);

// src/entity/insuranceCompany.entity.ts
var import_typeorm75 = require("typeorm");
function _ts_decorate75(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate75, "_ts_decorate");
function _ts_metadata75(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata75, "_ts_metadata");
var InsuranceCompany = class {
  static {
    __name(this, "InsuranceCompany");
  }
  id;
  country;
  name;
  name_ar;
  name_tr;
  logo;
  about_en;
  about_ar;
  about_tr;
  video_url;
  created_at;
  updated_at;
};
_ts_decorate75([
  (0, import_typeorm75.PrimaryGeneratedColumn)(),
  _ts_metadata75("design:type", Number)
], InsuranceCompany.prototype, "id", void 0);
_ts_decorate75([
  (0, import_typeorm75.ManyToOne)(() => Country, (country) => country.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata75("design:type", typeof Country === "undefined" ? Object : Country)
], InsuranceCompany.prototype, "country", void 0);
_ts_decorate75([
  (0, import_typeorm75.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata75("design:type", String)
], InsuranceCompany.prototype, "name", void 0);
_ts_decorate75([
  (0, import_typeorm75.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata75("design:type", String)
], InsuranceCompany.prototype, "name_ar", void 0);
_ts_decorate75([
  (0, import_typeorm75.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata75("design:type", String)
], InsuranceCompany.prototype, "name_tr", void 0);
_ts_decorate75([
  (0, import_typeorm75.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata75("design:type", String)
], InsuranceCompany.prototype, "logo", void 0);
_ts_decorate75([
  (0, import_typeorm75.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata75("design:type", String)
], InsuranceCompany.prototype, "about_en", void 0);
_ts_decorate75([
  (0, import_typeorm75.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata75("design:type", String)
], InsuranceCompany.prototype, "about_ar", void 0);
_ts_decorate75([
  (0, import_typeorm75.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata75("design:type", String)
], InsuranceCompany.prototype, "about_tr", void 0);
_ts_decorate75([
  (0, import_typeorm75.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata75("design:type", String)
], InsuranceCompany.prototype, "video_url", void 0);
_ts_decorate75([
  (0, import_typeorm75.CreateDateColumn)(),
  _ts_metadata75("design:type", typeof Date === "undefined" ? Object : Date)
], InsuranceCompany.prototype, "created_at", void 0);
_ts_decorate75([
  (0, import_typeorm75.UpdateDateColumn)(),
  _ts_metadata75("design:type", typeof Date === "undefined" ? Object : Date)
], InsuranceCompany.prototype, "updated_at", void 0);
InsuranceCompany = _ts_decorate75([
  (0, import_typeorm75.Entity)("insurance_companies")
], InsuranceCompany);

// src/entity/job.entity.ts
var import_typeorm76 = require("typeorm");
function _ts_decorate76(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate76, "_ts_decorate");
function _ts_metadata76(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata76, "_ts_metadata");
var Job = class {
  static {
    __name(this, "Job");
  }
  id;
  queue;
  payload;
  attempts;
  reserved_at;
  available_at;
  created_at;
};
_ts_decorate76([
  (0, import_typeorm76.PrimaryGeneratedColumn)("increment", {
    type: "bigint"
  }),
  _ts_metadata76("design:type", Number)
], Job.prototype, "id", void 0);
_ts_decorate76([
  (0, import_typeorm76.Column)(),
  (0, import_typeorm76.Index)(),
  _ts_metadata76("design:type", String)
], Job.prototype, "queue", void 0);
_ts_decorate76([
  (0, import_typeorm76.Column)({
    type: "longtext"
  }),
  _ts_metadata76("design:type", String)
], Job.prototype, "payload", void 0);
_ts_decorate76([
  (0, import_typeorm76.Column)({
    type: "tinyint",
    unsigned: true
  }),
  _ts_metadata76("design:type", Number)
], Job.prototype, "attempts", void 0);
_ts_decorate76([
  (0, import_typeorm76.Column)({
    type: "int",
    unsigned: true,
    nullable: true
  }),
  _ts_metadata76("design:type", Object)
], Job.prototype, "reserved_at", void 0);
_ts_decorate76([
  (0, import_typeorm76.Column)({
    type: "int",
    unsigned: true
  }),
  _ts_metadata76("design:type", Number)
], Job.prototype, "available_at", void 0);
_ts_decorate76([
  (0, import_typeorm76.Column)({
    type: "int",
    unsigned: true
  }),
  _ts_metadata76("design:type", Number)
], Job.prototype, "created_at", void 0);
Job = _ts_decorate76([
  (0, import_typeorm76.Entity)("jobs")
], Job);

// src/entity/laboratoryPage.entity.ts
var import_typeorm77 = require("typeorm");
function _ts_decorate77(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate77, "_ts_decorate");
function _ts_metadata77(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata77, "_ts_metadata");
var LaboratoryPage = class {
  static {
    __name(this, "LaboratoryPage");
  }
  id;
  countryId;
  nameEn;
  nameAr;
  nameTr;
  descriptionEn;
  descriptionAr;
  descriptionTr;
  contact;
  img;
  link;
  fbLink;
  igLink;
  twitterLink;
  whatsappLink;
  videoLink;
  isCreditCard;
  createdAt;
  updatedAt;
};
_ts_decorate77([
  (0, import_typeorm77.PrimaryGeneratedColumn)(),
  _ts_metadata77("design:type", Number)
], LaboratoryPage.prototype, "id", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    unique: true
  }),
  _ts_metadata77("design:type", Number)
], LaboratoryPage.prototype, "countryId", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)("text"),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "nameEn", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)("text", {
    nullable: true
  }),
  _ts_metadata77("design:type", Object)
], LaboratoryPage.prototype, "nameAr", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)("text", {
    nullable: true
  }),
  _ts_metadata77("design:type", Object)
], LaboratoryPage.prototype, "nameTr", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)("text"),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "descriptionEn", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)("text", {
    nullable: true
  }),
  _ts_metadata77("design:type", Object)
], LaboratoryPage.prototype, "descriptionAr", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)("text", {
    nullable: true
  }),
  _ts_metadata77("design:type", Object)
], LaboratoryPage.prototype, "descriptionTr", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)(),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "contact", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)(),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "img", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)(),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "link", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    nullable: true
  }),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "fbLink", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    nullable: true
  }),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "igLink", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    nullable: true
  }),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "twitterLink", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    nullable: true
  }),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "whatsappLink", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    nullable: true
  }),
  _ts_metadata77("design:type", String)
], LaboratoryPage.prototype, "videoLink", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    default: false
  }),
  _ts_metadata77("design:type", Boolean)
], LaboratoryPage.prototype, "isCreditCard", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata77("design:type", typeof Date === "undefined" ? Object : Date)
], LaboratoryPage.prototype, "createdAt", void 0);
_ts_decorate77([
  (0, import_typeorm77.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata77("design:type", typeof Date === "undefined" ? Object : Date)
], LaboratoryPage.prototype, "updatedAt", void 0);
LaboratoryPage = _ts_decorate77([
  (0, import_typeorm77.Entity)("laboratory_pages")
], LaboratoryPage);

// src/entity/labPageSlideImg.entity.ts
var import_typeorm78 = require("typeorm");
function _ts_decorate78(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate78, "_ts_decorate");
function _ts_metadata78(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata78, "_ts_metadata");
var LabPageSlideImg = class {
  static {
    __name(this, "LabPageSlideImg");
  }
  id;
  laboratoryPageId;
  imgPath;
  createdAt;
  updatedAt;
};
_ts_decorate78([
  (0, import_typeorm78.PrimaryGeneratedColumn)(),
  _ts_metadata78("design:type", Number)
], LabPageSlideImg.prototype, "id", void 0);
_ts_decorate78([
  (0, import_typeorm78.Column)(),
  _ts_metadata78("design:type", Number)
], LabPageSlideImg.prototype, "laboratoryPageId", void 0);
_ts_decorate78([
  (0, import_typeorm78.Column)(),
  _ts_metadata78("design:type", String)
], LabPageSlideImg.prototype, "imgPath", void 0);
_ts_decorate78([
  (0, import_typeorm78.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata78("design:type", typeof Date === "undefined" ? Object : Date)
], LabPageSlideImg.prototype, "createdAt", void 0);
_ts_decorate78([
  (0, import_typeorm78.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata78("design:type", typeof Date === "undefined" ? Object : Date)
], LabPageSlideImg.prototype, "updatedAt", void 0);
LabPageSlideImg = _ts_decorate78([
  (0, import_typeorm78.Entity)("lab_page_slide_imgs")
], LabPageSlideImg);

// src/entity/labRequest.entity.ts
var import_typeorm79 = require("typeorm");
function _ts_decorate79(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate79, "_ts_decorate");
function _ts_metadata79(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata79, "_ts_metadata");
var LabRequest = class {
  static {
    __name(this, "LabRequest");
  }
  id;
  countryId;
  userId;
  paymentType;
  price;
  currency;
  isPaid;
  status;
  dateTimeStamp;
  createdAt;
  updatedAt;
};
_ts_decorate79([
  (0, import_typeorm79.PrimaryGeneratedColumn)(),
  _ts_metadata79("design:type", Number)
], LabRequest.prototype, "id", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)("int"),
  _ts_metadata79("design:type", Number)
], LabRequest.prototype, "countryId", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)("int"),
  _ts_metadata79("design:type", Number)
], LabRequest.prototype, "userId", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)("varchar"),
  _ts_metadata79("design:type", String)
], LabRequest.prototype, "paymentType", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)("int", {
    default: 0
  }),
  _ts_metadata79("design:type", Number)
], LabRequest.prototype, "price", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)("varchar"),
  _ts_metadata79("design:type", String)
], LabRequest.prototype, "currency", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)("boolean", {
    default: false
  }),
  _ts_metadata79("design:type", Boolean)
], LabRequest.prototype, "isPaid", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)("int", {
    default: 0
  }),
  _ts_metadata79("design:type", Number)
], LabRequest.prototype, "status", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)("timestamp"),
  _ts_metadata79("design:type", typeof Date === "undefined" ? Object : Date)
], LabRequest.prototype, "dateTimeStamp", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata79("design:type", typeof Date === "undefined" ? Object : Date)
], LabRequest.prototype, "createdAt", void 0);
_ts_decorate79([
  (0, import_typeorm79.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata79("design:type", typeof Date === "undefined" ? Object : Date)
], LabRequest.prototype, "updatedAt", void 0);
LabRequest = _ts_decorate79([
  (0, import_typeorm79.Entity)("lab_requests")
], LabRequest);

// src/entity/labRequestTest.entity.ts
var import_typeorm81 = require("typeorm");

// src/entity/labTest.entity.ts
var import_typeorm80 = require("typeorm");
function _ts_decorate80(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate80, "_ts_decorate");
function _ts_metadata80(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata80, "_ts_metadata");
var LabTest = class {
  static {
    __name(this, "LabTest");
  }
  id;
  nameEn;
  nameAr;
  nameTr;
  descriptionEn;
  descriptionAr;
  descriptionTr;
  priceTurkey;
  priceQatar;
  orderInList;
  createdAt;
  updatedAt;
};
_ts_decorate80([
  (0, import_typeorm80.PrimaryGeneratedColumn)(),
  _ts_metadata80("design:type", Number)
], LabTest.prototype, "id", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)(),
  _ts_metadata80("design:type", String)
], LabTest.prototype, "nameEn", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)({
    nullable: true
  }),
  _ts_metadata80("design:type", String)
], LabTest.prototype, "nameAr", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)({
    nullable: true
  }),
  _ts_metadata80("design:type", String)
], LabTest.prototype, "nameTr", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)("text"),
  _ts_metadata80("design:type", String)
], LabTest.prototype, "descriptionEn", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)("text", {
    nullable: true
  }),
  _ts_metadata80("design:type", String)
], LabTest.prototype, "descriptionAr", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)("text", {
    nullable: true
  }),
  _ts_metadata80("design:type", String)
], LabTest.prototype, "descriptionTr", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)("int", {
    nullable: true
  }),
  _ts_metadata80("design:type", Number)
], LabTest.prototype, "priceTurkey", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)("int", {
    nullable: true
  }),
  _ts_metadata80("design:type", Number)
], LabTest.prototype, "priceQatar", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)("int", {
    default: 0
  }),
  _ts_metadata80("design:type", Number)
], LabTest.prototype, "orderInList", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata80("design:type", typeof Date === "undefined" ? Object : Date)
], LabTest.prototype, "createdAt", void 0);
_ts_decorate80([
  (0, import_typeorm80.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata80("design:type", typeof Date === "undefined" ? Object : Date)
], LabTest.prototype, "updatedAt", void 0);
LabTest = _ts_decorate80([
  (0, import_typeorm80.Entity)("lab_tests")
], LabTest);

// src/entity/labRequestTest.entity.ts
function _ts_decorate81(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate81, "_ts_decorate");
function _ts_metadata81(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata81, "_ts_metadata");
var LabRequestTest = class {
  static {
    __name(this, "LabRequestTest");
  }
  id;
  labRequestId;
  labTestId;
  price;
  labRequest;
  labTest;
  createdAt;
  updatedAt;
};
_ts_decorate81([
  (0, import_typeorm81.PrimaryGeneratedColumn)(),
  _ts_metadata81("design:type", Number)
], LabRequestTest.prototype, "id", void 0);
_ts_decorate81([
  (0, import_typeorm81.Column)("int"),
  _ts_metadata81("design:type", Number)
], LabRequestTest.prototype, "labRequestId", void 0);
_ts_decorate81([
  (0, import_typeorm81.Column)("int"),
  _ts_metadata81("design:type", Number)
], LabRequestTest.prototype, "labTestId", void 0);
_ts_decorate81([
  (0, import_typeorm81.Column)("int"),
  _ts_metadata81("design:type", Number)
], LabRequestTest.prototype, "price", void 0);
_ts_decorate81([
  (0, import_typeorm81.ManyToOne)(() => LabRequest, (labRequest) => labRequest.id),
  (0, import_typeorm81.JoinColumn)({
    name: "lab_request_id"
  }),
  _ts_metadata81("design:type", typeof LabRequest === "undefined" ? Object : LabRequest)
], LabRequestTest.prototype, "labRequest", void 0);
_ts_decorate81([
  (0, import_typeorm81.ManyToOne)(() => LabTest, (labTest) => labTest.id),
  (0, import_typeorm81.JoinColumn)({
    name: "lab_test_id"
  }),
  _ts_metadata81("design:type", typeof LabTest === "undefined" ? Object : LabTest)
], LabRequestTest.prototype, "labTest", void 0);
_ts_decorate81([
  (0, import_typeorm81.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata81("design:type", typeof Date === "undefined" ? Object : Date)
], LabRequestTest.prototype, "createdAt", void 0);
_ts_decorate81([
  (0, import_typeorm81.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata81("design:type", typeof Date === "undefined" ? Object : Date)
], LabRequestTest.prototype, "updatedAt", void 0);
LabRequestTest = _ts_decorate81([
  (0, import_typeorm81.Entity)("lab_request_tests")
], LabRequestTest);

// src/entity/medFAQ.entity.ts
var import_typeorm82 = require("typeorm");
function _ts_decorate82(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate82, "_ts_decorate");
function _ts_metadata82(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata82, "_ts_metadata");
var MedFaq = class {
  static {
    __name(this, "MedFaq");
  }
  id;
  medicalSpecialtyId;
  questionEn;
  questionAr;
  answerEn;
  answerAr;
  createdAt;
  updatedAt;
};
_ts_decorate82([
  (0, import_typeorm82.PrimaryGeneratedColumn)(),
  _ts_metadata82("design:type", Number)
], MedFaq.prototype, "id", void 0);
_ts_decorate82([
  (0, import_typeorm82.Column)({
    type: "int"
  }),
  _ts_metadata82("design:type", Number)
], MedFaq.prototype, "medicalSpecialtyId", void 0);
_ts_decorate82([
  (0, import_typeorm82.Column)({
    type: "varchar"
  }),
  _ts_metadata82("design:type", String)
], MedFaq.prototype, "questionEn", void 0);
_ts_decorate82([
  (0, import_typeorm82.Column)({
    type: "varchar"
  }),
  _ts_metadata82("design:type", String)
], MedFaq.prototype, "questionAr", void 0);
_ts_decorate82([
  (0, import_typeorm82.Column)({
    type: "text"
  }),
  _ts_metadata82("design:type", String)
], MedFaq.prototype, "answerEn", void 0);
_ts_decorate82([
  (0, import_typeorm82.Column)({
    type: "text"
  }),
  _ts_metadata82("design:type", String)
], MedFaq.prototype, "answerAr", void 0);
_ts_decorate82([
  (0, import_typeorm82.CreateDateColumn)(),
  _ts_metadata82("design:type", typeof Date === "undefined" ? Object : Date)
], MedFaq.prototype, "createdAt", void 0);
_ts_decorate82([
  (0, import_typeorm82.UpdateDateColumn)(),
  _ts_metadata82("design:type", typeof Date === "undefined" ? Object : Date)
], MedFaq.prototype, "updatedAt", void 0);
MedFaq = _ts_decorate82([
  (0, import_typeorm82.Entity)("med_faqs")
], MedFaq);

// src/entity/medicalDegree.entity.ts
var import_typeorm83 = require("typeorm");
function _ts_decorate83(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate83, "_ts_decorate");
function _ts_metadata83(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata83, "_ts_metadata");
var MedicalDegree = class {
  static {
    __name(this, "MedicalDegree");
  }
  id;
  doctor;
  title;
  img;
  degree_date;
  created_at;
  updated_at;
};
_ts_decorate83([
  (0, import_typeorm83.PrimaryGeneratedColumn)(),
  _ts_metadata83("design:type", Number)
], MedicalDegree.prototype, "id", void 0);
_ts_decorate83([
  (0, import_typeorm83.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata83("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], MedicalDegree.prototype, "doctor", void 0);
_ts_decorate83([
  (0, import_typeorm83.Column)({
    type: "varchar"
  }),
  _ts_metadata83("design:type", String)
], MedicalDegree.prototype, "title", void 0);
_ts_decorate83([
  (0, import_typeorm83.Column)({
    type: "varchar"
  }),
  _ts_metadata83("design:type", String)
], MedicalDegree.prototype, "img", void 0);
_ts_decorate83([
  (0, import_typeorm83.Column)({
    type: "varchar"
  }),
  _ts_metadata83("design:type", String)
], MedicalDegree.prototype, "degree_date", void 0);
_ts_decorate83([
  (0, import_typeorm83.CreateDateColumn)(),
  _ts_metadata83("design:type", typeof Date === "undefined" ? Object : Date)
], MedicalDegree.prototype, "created_at", void 0);
_ts_decorate83([
  (0, import_typeorm83.UpdateDateColumn)(),
  _ts_metadata83("design:type", typeof Date === "undefined" ? Object : Date)
], MedicalDegree.prototype, "updated_at", void 0);
MedicalDegree = _ts_decorate83([
  (0, import_typeorm83.Entity)("medical_degrees")
], MedicalDegree);

// src/entity/medicalSubspecialty.entity.ts
var import_typeorm84 = require("typeorm");
function _ts_decorate84(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate84, "_ts_decorate");
function _ts_metadata84(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata84, "_ts_metadata");
var MedicalSubspecialty = class {
  static {
    __name(this, "MedicalSubspecialty");
  }
  id;
  medicalSpecialty;
  name;
  name_ar;
  name_tr;
  description;
  createdAt;
  updatedAt;
};
_ts_decorate84([
  (0, import_typeorm84.PrimaryGeneratedColumn)(),
  _ts_metadata84("design:type", Number)
], MedicalSubspecialty.prototype, "id", void 0);
_ts_decorate84([
  (0, import_typeorm84.ManyToOne)(() => MedicalSpecialty, (specialty) => specialty.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata84("design:type", typeof MedicalSpecialty === "undefined" ? Object : MedicalSpecialty)
], MedicalSubspecialty.prototype, "medicalSpecialty", void 0);
_ts_decorate84([
  (0, import_typeorm84.Column)({
    unique: true
  }),
  _ts_metadata84("design:type", String)
], MedicalSubspecialty.prototype, "name", void 0);
_ts_decorate84([
  (0, import_typeorm84.Column)({
    unique: true
  }),
  _ts_metadata84("design:type", String)
], MedicalSubspecialty.prototype, "name_ar", void 0);
_ts_decorate84([
  (0, import_typeorm84.Column)({
    unique: true
  }),
  _ts_metadata84("design:type", String)
], MedicalSubspecialty.prototype, "name_tr", void 0);
_ts_decorate84([
  (0, import_typeorm84.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata84("design:type", String)
], MedicalSubspecialty.prototype, "description", void 0);
_ts_decorate84([
  (0, import_typeorm84.CreateDateColumn)(),
  _ts_metadata84("design:type", typeof Date === "undefined" ? Object : Date)
], MedicalSubspecialty.prototype, "createdAt", void 0);
_ts_decorate84([
  (0, import_typeorm84.UpdateDateColumn)(),
  _ts_metadata84("design:type", typeof Date === "undefined" ? Object : Date)
], MedicalSubspecialty.prototype, "updatedAt", void 0);
MedicalSubspecialty = _ts_decorate84([
  (0, import_typeorm84.Entity)("medical_subspecialties")
], MedicalSubspecialty);

// src/entity/medicinePurchaseOrder.entity.ts
var import_typeorm85 = require("typeorm");
function _ts_decorate85(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate85, "_ts_decorate");
function _ts_metadata85(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata85, "_ts_metadata");
var MedicinePurchaseOrder = class {
  static {
    __name(this, "MedicinePurchaseOrder");
  }
  id;
  userId;
  pharmStoreId;
  total;
  status;
  currency;
  address;
  prescription;
  createdAt;
  updatedAt;
};
_ts_decorate85([
  (0, import_typeorm85.PrimaryGeneratedColumn)(),
  _ts_metadata85("design:type", Number)
], MedicinePurchaseOrder.prototype, "id", void 0);
_ts_decorate85([
  (0, import_typeorm85.Column)({
    type: "int"
  }),
  _ts_metadata85("design:type", Number)
], MedicinePurchaseOrder.prototype, "userId", void 0);
_ts_decorate85([
  (0, import_typeorm85.Column)({
    type: "int",
    nullable: true
  }),
  _ts_metadata85("design:type", Number)
], MedicinePurchaseOrder.prototype, "pharmStoreId", void 0);
_ts_decorate85([
  (0, import_typeorm85.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata85("design:type", Number)
], MedicinePurchaseOrder.prototype, "total", void 0);
_ts_decorate85([
  (0, import_typeorm85.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata85("design:type", Number)
], MedicinePurchaseOrder.prototype, "status", void 0);
_ts_decorate85([
  (0, import_typeorm85.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata85("design:type", String)
], MedicinePurchaseOrder.prototype, "currency", void 0);
_ts_decorate85([
  (0, import_typeorm85.Column)({
    type: "text"
  }),
  _ts_metadata85("design:type", String)
], MedicinePurchaseOrder.prototype, "address", void 0);
_ts_decorate85([
  (0, import_typeorm85.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata85("design:type", String)
], MedicinePurchaseOrder.prototype, "prescription", void 0);
_ts_decorate85([
  (0, import_typeorm85.CreateDateColumn)(),
  _ts_metadata85("design:type", typeof Date === "undefined" ? Object : Date)
], MedicinePurchaseOrder.prototype, "createdAt", void 0);
_ts_decorate85([
  (0, import_typeorm85.UpdateDateColumn)(),
  _ts_metadata85("design:type", typeof Date === "undefined" ? Object : Date)
], MedicinePurchaseOrder.prototype, "updatedAt", void 0);
MedicinePurchaseOrder = _ts_decorate85([
  (0, import_typeorm85.Entity)("medicine_purchase_orders")
], MedicinePurchaseOrder);

// src/entity/membership.entity.ts
var import_typeorm86 = require("typeorm");
function _ts_decorate86(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate86, "_ts_decorate");
function _ts_metadata86(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata86, "_ts_metadata");
var Membership = class {
  static {
    __name(this, "Membership");
  }
  id;
  countryId;
  nameEn;
  nameAr;
  nameTr;
  price;
  priceDiscount;
  servicesEn;
  servicesAr;
  servicesTr;
  termsEn;
  termsAr;
  termsTr;
  duration;
  isShow;
  createdAt;
  updatedAt;
};
_ts_decorate86([
  (0, import_typeorm86.PrimaryGeneratedColumn)(),
  _ts_metadata86("design:type", Number)
], Membership.prototype, "id", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "int"
  }),
  _ts_metadata86("design:type", Number)
], Membership.prototype, "countryId", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "nameEn", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "nameAr", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "nameTr", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "int"
  }),
  _ts_metadata86("design:type", Number)
], Membership.prototype, "price", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "int"
  }),
  _ts_metadata86("design:type", Number)
], Membership.prototype, "priceDiscount", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "text"
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "servicesEn", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "text"
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "servicesAr", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "text"
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "servicesTr", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "text"
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "termsEn", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "text"
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "termsAr", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "text"
  }),
  _ts_metadata86("design:type", String)
], Membership.prototype, "termsTr", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "int",
    default: 365
  }),
  _ts_metadata86("design:type", Number)
], Membership.prototype, "duration", void 0);
_ts_decorate86([
  (0, import_typeorm86.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata86("design:type", Boolean)
], Membership.prototype, "isShow", void 0);
_ts_decorate86([
  (0, import_typeorm86.CreateDateColumn)(),
  _ts_metadata86("design:type", typeof Date === "undefined" ? Object : Date)
], Membership.prototype, "createdAt", void 0);
_ts_decorate86([
  (0, import_typeorm86.UpdateDateColumn)(),
  _ts_metadata86("design:type", typeof Date === "undefined" ? Object : Date)
], Membership.prototype, "updatedAt", void 0);
Membership = _ts_decorate86([
  (0, import_typeorm86.Entity)("memberships")
], Membership);

// src/entity/offer.entity.ts
var import_typeorm87 = require("typeorm");
function _ts_decorate87(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate87, "_ts_decorate");
function _ts_metadata87(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata87, "_ts_metadata");
var Offer = class {
  static {
    __name(this, "Offer");
  }
  id;
  countryId;
  medicalSpecialtyId;
  hospitalId;
  offerCategoryId;
  title;
  name;
  address;
  img;
  details;
  ptInstruction;
  price;
  priceBefore;
  discount;
  views;
  clicks;
  ratingTotal;
  ratingNumber;
  facebookLink;
  instagramLink;
  youtubeLink;
  website;
  phone;
  email;
  endDate;
  isOpen;
  isAppear;
  isShowPrice;
  createdAt;
  updatedAt;
};
_ts_decorate87([
  (0, import_typeorm87.PrimaryGeneratedColumn)(),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "id", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)(),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "countryId", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "medicalSpecialtyId", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "hospitalId", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "offerCategoryId", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)(),
  _ts_metadata87("design:type", String)
], Offer.prototype, "title", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)(),
  _ts_metadata87("design:type", String)
], Offer.prototype, "name", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", String)
], Offer.prototype, "address", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)(),
  _ts_metadata87("design:type", String)
], Offer.prototype, "img", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)("text"),
  _ts_metadata87("design:type", String)
], Offer.prototype, "details", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)("text"),
  _ts_metadata87("design:type", String)
], Offer.prototype, "ptInstruction", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)(),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "price", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)(),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "priceBefore", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)(),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "discount", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    default: 0
  }),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "views", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    default: 0
  }),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "clicks", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    default: 0
  }),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "ratingTotal", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    default: 0
  }),
  _ts_metadata87("design:type", Number)
], Offer.prototype, "ratingNumber", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", String)
], Offer.prototype, "facebookLink", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", String)
], Offer.prototype, "instagramLink", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", String)
], Offer.prototype, "youtubeLink", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", String)
], Offer.prototype, "website", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", String)
], Offer.prototype, "phone", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    nullable: true
  }),
  _ts_metadata87("design:type", String)
], Offer.prototype, "email", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)("timestamp"),
  _ts_metadata87("design:type", typeof Date === "undefined" ? Object : Date)
], Offer.prototype, "endDate", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    default: false
  }),
  _ts_metadata87("design:type", Boolean)
], Offer.prototype, "isOpen", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    default: false
  }),
  _ts_metadata87("design:type", Boolean)
], Offer.prototype, "isAppear", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    default: false
  }),
  _ts_metadata87("design:type", Boolean)
], Offer.prototype, "isShowPrice", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata87("design:type", typeof Date === "undefined" ? Object : Date)
], Offer.prototype, "createdAt", void 0);
_ts_decorate87([
  (0, import_typeorm87.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata87("design:type", typeof Date === "undefined" ? Object : Date)
], Offer.prototype, "updatedAt", void 0);
Offer = _ts_decorate87([
  (0, import_typeorm87.Entity)("offers")
], Offer);

// src/entity/offerAccessability.entity.ts
var import_typeorm88 = require("typeorm");
function _ts_decorate88(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate88, "_ts_decorate");
function _ts_metadata88(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata88, "_ts_metadata");
var OfferAccessibility = class {
  static {
    __name(this, "OfferAccessibility");
  }
  id;
  name;
  nameEn;
  nameAr;
  nameTr;
  icon;
  createdAt;
  updatedAt;
};
_ts_decorate88([
  (0, import_typeorm88.PrimaryGeneratedColumn)(),
  _ts_metadata88("design:type", Number)
], OfferAccessibility.prototype, "id", void 0);
_ts_decorate88([
  (0, import_typeorm88.Column)("varchar"),
  _ts_metadata88("design:type", String)
], OfferAccessibility.prototype, "name", void 0);
_ts_decorate88([
  (0, import_typeorm88.Column)("varchar"),
  _ts_metadata88("design:type", String)
], OfferAccessibility.prototype, "nameEn", void 0);
_ts_decorate88([
  (0, import_typeorm88.Column)("varchar"),
  _ts_metadata88("design:type", String)
], OfferAccessibility.prototype, "nameAr", void 0);
_ts_decorate88([
  (0, import_typeorm88.Column)("varchar"),
  _ts_metadata88("design:type", String)
], OfferAccessibility.prototype, "nameTr", void 0);
_ts_decorate88([
  (0, import_typeorm88.Column)("varchar"),
  _ts_metadata88("design:type", String)
], OfferAccessibility.prototype, "icon", void 0);
_ts_decorate88([
  (0, import_typeorm88.CreateDateColumn)(),
  _ts_metadata88("design:type", typeof Date === "undefined" ? Object : Date)
], OfferAccessibility.prototype, "createdAt", void 0);
_ts_decorate88([
  (0, import_typeorm88.UpdateDateColumn)(),
  _ts_metadata88("design:type", typeof Date === "undefined" ? Object : Date)
], OfferAccessibility.prototype, "updatedAt", void 0);
OfferAccessibility = _ts_decorate88([
  (0, import_typeorm88.Entity)("offer_accessabilities")
], OfferAccessibility);

// src/entity/offerCategory.entity.ts
var import_typeorm89 = require("typeorm");
function _ts_decorate89(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate89, "_ts_decorate");
function _ts_metadata89(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata89, "_ts_metadata");
var OfferCategory = class {
  static {
    __name(this, "OfferCategory");
  }
  id;
  name;
  nameAr;
  nameEn;
  nameTr;
  img;
  isAppear;
  isLargeImg;
  createdAt;
  updatedAt;
};
_ts_decorate89([
  (0, import_typeorm89.PrimaryGeneratedColumn)(),
  _ts_metadata89("design:type", Number)
], OfferCategory.prototype, "id", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)({
    unique: true
  }),
  _ts_metadata89("design:type", String)
], OfferCategory.prototype, "name", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)({
    unique: true,
    nullable: true
  }),
  _ts_metadata89("design:type", String)
], OfferCategory.prototype, "nameAr", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)({
    unique: true,
    nullable: true
  }),
  _ts_metadata89("design:type", String)
], OfferCategory.prototype, "nameEn", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)({
    unique: true,
    nullable: true
  }),
  _ts_metadata89("design:type", String)
], OfferCategory.prototype, "nameTr", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)(),
  _ts_metadata89("design:type", String)
], OfferCategory.prototype, "img", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)({
    default: false
  }),
  _ts_metadata89("design:type", Boolean)
], OfferCategory.prototype, "isAppear", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)({
    default: false
  }),
  _ts_metadata89("design:type", Boolean)
], OfferCategory.prototype, "isLargeImg", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata89("design:type", typeof Date === "undefined" ? Object : Date)
], OfferCategory.prototype, "createdAt", void 0);
_ts_decorate89([
  (0, import_typeorm89.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata89("design:type", typeof Date === "undefined" ? Object : Date)
], OfferCategory.prototype, "updatedAt", void 0);
OfferCategory = _ts_decorate89([
  (0, import_typeorm89.Entity)("offer_categories")
], OfferCategory);

// src/entity/offering.entity.ts
var import_typeorm90 = require("typeorm");
function _ts_decorate90(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate90, "_ts_decorate");
function _ts_metadata90(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata90, "_ts_metadata");
var Offering = class {
  static {
    __name(this, "Offering");
  }
  id;
  countryId;
  cityId;
  hospitalId;
  serviceProviderId;
  title;
  titleEn;
  titleAr;
  titleTr;
  details;
  detailsEn;
  detailsAr;
  detailsTr;
  instructions;
  instructionsEn;
  instructionsAr;
  instructionsTr;
  coverImg;
  whatsapp;
  email;
  website;
  facebookLink;
  instagramLink;
  twitterLink;
  youtubeLink;
  isPremium;
  isApproved;
  longitude;
  latitude;
  startDate;
  endDate;
  rating;
  ratingNumber;
  createdAt;
  updatedAt;
};
_ts_decorate90([
  (0, import_typeorm90.PrimaryGeneratedColumn)(),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "id", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "int"
  }),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "countryId", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "int",
    nullable: true
  }),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "cityId", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "int",
    nullable: true
  }),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "hospitalId", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "int",
    nullable: true
  }),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "serviceProviderId", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar"
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "title", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "titleEn", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "titleAr", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "titleTr", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "text"
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "details", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "detailsEn", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "detailsAr", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "detailsTr", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "text"
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "instructions", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "instructionsEn", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "instructionsAr", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "instructionsTr", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    default: "https://www.sehapracto.com/pics/logo.png"
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "coverImg", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar"
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "whatsapp", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar"
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "email", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "website", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "facebookLink", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "instagramLink", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "twitterLink", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata90("design:type", String)
], Offering.prototype, "youtubeLink", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata90("design:type", Boolean)
], Offering.prototype, "isPremium", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata90("design:type", Boolean)
], Offering.prototype, "isApproved", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "double",
    nullable: true
  }),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "longitude", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "double",
    nullable: true
  }),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "latitude", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata90("design:type", typeof Date === "undefined" ? Object : Date)
], Offering.prototype, "startDate", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata90("design:type", typeof Date === "undefined" ? Object : Date)
], Offering.prototype, "endDate", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "rating", void 0);
_ts_decorate90([
  (0, import_typeorm90.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata90("design:type", Number)
], Offering.prototype, "ratingNumber", void 0);
_ts_decorate90([
  (0, import_typeorm90.CreateDateColumn)(),
  _ts_metadata90("design:type", typeof Date === "undefined" ? Object : Date)
], Offering.prototype, "createdAt", void 0);
_ts_decorate90([
  (0, import_typeorm90.UpdateDateColumn)(),
  _ts_metadata90("design:type", typeof Date === "undefined" ? Object : Date)
], Offering.prototype, "updatedAt", void 0);
Offering = _ts_decorate90([
  (0, import_typeorm90.Entity)("offerings")
], Offering);

// src/entity/offeringCoupon.entity.ts
var import_typeorm91 = require("typeorm");
function _ts_decorate91(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate91, "_ts_decorate");
function _ts_metadata91(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata91, "_ts_metadata");
var OfferingCoupon = class {
  static {
    __name(this, "OfferingCoupon");
  }
  id;
  offeringId;
  // @JoinColumn({ name: 'offering_id' })
  offering;
  membershipId;
  // @JoinColumn({ name: 'membership_id' })
  membership;
  discountTypeId;
  //   @JoinColumn({ name: "discount_type_id" })
  discountType;
  title;
  howToUse;
  price;
  numberUses;
  useFrequency;
  savedAmount;
  discountPercentage;
  isActive;
  createdAt;
  updatedAt;
};
_ts_decorate91([
  (0, import_typeorm91.PrimaryGeneratedColumn)(),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "id", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "int"
  }),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "offeringId", void 0);
_ts_decorate91([
  (0, import_typeorm91.ManyToOne)(() => Offer, (offer) => offer.id),
  _ts_metadata91("design:type", typeof Offer === "undefined" ? Object : Offer)
], OfferingCoupon.prototype, "offering", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "int",
    nullable: true
  }),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "membershipId", void 0);
_ts_decorate91([
  (0, import_typeorm91.ManyToOne)(() => Membership, (membership) => membership.id, {
    nullable: true
  }),
  _ts_metadata91("design:type", typeof Membership === "undefined" ? Object : Membership)
], OfferingCoupon.prototype, "membership", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "int"
  }),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "discountTypeId", void 0);
_ts_decorate91([
  (0, import_typeorm91.ManyToOne)(() => DiscountType, (discountType) => discountType.id),
  _ts_metadata91("design:type", typeof DiscountType === "undefined" ? Object : DiscountType)
], OfferingCoupon.prototype, "discountType", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata91("design:type", String)
], OfferingCoupon.prototype, "title", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "text"
  }),
  _ts_metadata91("design:type", String)
], OfferingCoupon.prototype, "howToUse", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "price", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "int",
    default: 1
  }),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "numberUses", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "int"
  }),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "useFrequency", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "savedAmount", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata91("design:type", Number)
], OfferingCoupon.prototype, "discountPercentage", void 0);
_ts_decorate91([
  (0, import_typeorm91.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata91("design:type", Boolean)
], OfferingCoupon.prototype, "isActive", void 0);
_ts_decorate91([
  (0, import_typeorm91.CreateDateColumn)(),
  _ts_metadata91("design:type", typeof Date === "undefined" ? Object : Date)
], OfferingCoupon.prototype, "createdAt", void 0);
_ts_decorate91([
  (0, import_typeorm91.UpdateDateColumn)(),
  _ts_metadata91("design:type", typeof Date === "undefined" ? Object : Date)
], OfferingCoupon.prototype, "updatedAt", void 0);
OfferingCoupon = _ts_decorate91([
  (0, import_typeorm91.Entity)("offering_coupons")
], OfferingCoupon);

// src/entity/offeringRating.entity.ts
var import_typeorm92 = require("typeorm");
function _ts_decorate92(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate92, "_ts_decorate");
function _ts_metadata92(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata92, "_ts_metadata");
var OfferingRating = class {
  static {
    __name(this, "OfferingRating");
  }
  id;
  rating;
  userId;
  // @JoinColumn({ name: 'user_id' })
  user;
  offeringId;
  // @JoinColumn({ name: 'offering_id' })
  offering;
  comment;
  createdAt;
  updatedAt;
};
_ts_decorate92([
  (0, import_typeorm92.PrimaryGeneratedColumn)(),
  _ts_metadata92("design:type", Number)
], OfferingRating.prototype, "id", void 0);
_ts_decorate92([
  (0, import_typeorm92.Column)({
    type: "int"
  }),
  _ts_metadata92("design:type", Number)
], OfferingRating.prototype, "rating", void 0);
_ts_decorate92([
  (0, import_typeorm92.Column)({
    type: "int"
  }),
  _ts_metadata92("design:type", Number)
], OfferingRating.prototype, "userId", void 0);
_ts_decorate92([
  (0, import_typeorm92.ManyToOne)(() => User, (user) => user.id),
  _ts_metadata92("design:type", typeof User === "undefined" ? Object : User)
], OfferingRating.prototype, "user", void 0);
_ts_decorate92([
  (0, import_typeorm92.Column)({
    type: "int"
  }),
  _ts_metadata92("design:type", Number)
], OfferingRating.prototype, "offeringId", void 0);
_ts_decorate92([
  (0, import_typeorm92.ManyToOne)(() => Offer, (offer) => offer.id),
  _ts_metadata92("design:type", typeof Offer === "undefined" ? Object : Offer)
], OfferingRating.prototype, "offering", void 0);
_ts_decorate92([
  (0, import_typeorm92.Column)({
    type: "text"
  }),
  _ts_metadata92("design:type", String)
], OfferingRating.prototype, "comment", void 0);
_ts_decorate92([
  (0, import_typeorm92.CreateDateColumn)(),
  _ts_metadata92("design:type", typeof Date === "undefined" ? Object : Date)
], OfferingRating.prototype, "createdAt", void 0);
_ts_decorate92([
  (0, import_typeorm92.UpdateDateColumn)(),
  _ts_metadata92("design:type", typeof Date === "undefined" ? Object : Date)
], OfferingRating.prototype, "updatedAt", void 0);
OfferingRating = _ts_decorate92([
  (0, import_typeorm92.Entity)("offering_ratings")
], OfferingRating);

// src/entity/offeringSelectedCategory.entity.ts
var import_typeorm93 = require("typeorm");
function _ts_decorate93(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate93, "_ts_decorate");
function _ts_metadata93(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata93, "_ts_metadata");
var OfferingSelectedCategory = class {
  static {
    __name(this, "OfferingSelectedCategory");
  }
  id;
  offeringId;
  // @JoinColumn({ name: 'offering_id' })
  offering;
  offerCategoryId;
  //   @JoinColumn({ name: "offer_category_id" })
  offerCategory;
  createdAt;
  updatedAt;
};
_ts_decorate93([
  (0, import_typeorm93.PrimaryGeneratedColumn)(),
  _ts_metadata93("design:type", Number)
], OfferingSelectedCategory.prototype, "id", void 0);
_ts_decorate93([
  (0, import_typeorm93.Column)({
    type: "int"
  }),
  _ts_metadata93("design:type", Number)
], OfferingSelectedCategory.prototype, "offeringId", void 0);
_ts_decorate93([
  (0, import_typeorm93.ManyToOne)(() => Offer, (offer) => offer.id),
  _ts_metadata93("design:type", typeof Offer === "undefined" ? Object : Offer)
], OfferingSelectedCategory.prototype, "offering", void 0);
_ts_decorate93([
  (0, import_typeorm93.Column)({
    type: "int"
  }),
  _ts_metadata93("design:type", Number)
], OfferingSelectedCategory.prototype, "offerCategoryId", void 0);
_ts_decorate93([
  (0, import_typeorm93.ManyToOne)(() => OfferCategory, (category) => category.id),
  _ts_metadata93("design:type", typeof OfferCategory === "undefined" ? Object : OfferCategory)
], OfferingSelectedCategory.prototype, "offerCategory", void 0);
_ts_decorate93([
  (0, import_typeorm93.CreateDateColumn)(),
  _ts_metadata93("design:type", typeof Date === "undefined" ? Object : Date)
], OfferingSelectedCategory.prototype, "createdAt", void 0);
_ts_decorate93([
  (0, import_typeorm93.UpdateDateColumn)(),
  _ts_metadata93("design:type", typeof Date === "undefined" ? Object : Date)
], OfferingSelectedCategory.prototype, "updatedAt", void 0);
OfferingSelectedCategory = _ts_decorate93([
  (0, import_typeorm93.Entity)("offering_selected_categories")
], OfferingSelectedCategory);

// src/entity/offeringSlideImg.entity.ts
var import_typeorm94 = require("typeorm");
function _ts_decorate94(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate94, "_ts_decorate");
function _ts_metadata94(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata94, "_ts_metadata");
var OfferingSlideImg = class {
  static {
    __name(this, "OfferingSlideImg");
  }
  id;
  offeringId;
  // @JoinColumn({ name: 'offering_id' })
  offering;
  imgPath;
  createdAt;
  updatedAt;
};
_ts_decorate94([
  (0, import_typeorm94.PrimaryGeneratedColumn)(),
  _ts_metadata94("design:type", Number)
], OfferingSlideImg.prototype, "id", void 0);
_ts_decorate94([
  (0, import_typeorm94.Column)({
    type: "int"
  }),
  _ts_metadata94("design:type", Number)
], OfferingSlideImg.prototype, "offeringId", void 0);
_ts_decorate94([
  (0, import_typeorm94.ManyToOne)(() => Offer, (offer) => offer.id),
  _ts_metadata94("design:type", typeof Offer === "undefined" ? Object : Offer)
], OfferingSlideImg.prototype, "offering", void 0);
_ts_decorate94([
  (0, import_typeorm94.Column)({
    type: "varchar"
  }),
  _ts_metadata94("design:type", String)
], OfferingSlideImg.prototype, "imgPath", void 0);
_ts_decorate94([
  (0, import_typeorm94.CreateDateColumn)(),
  _ts_metadata94("design:type", typeof Date === "undefined" ? Object : Date)
], OfferingSlideImg.prototype, "createdAt", void 0);
_ts_decorate94([
  (0, import_typeorm94.UpdateDateColumn)(),
  _ts_metadata94("design:type", typeof Date === "undefined" ? Object : Date)
], OfferingSlideImg.prototype, "updatedAt", void 0);
OfferingSlideImg = _ts_decorate94([
  (0, import_typeorm94.Entity)("offering_slide_imgs")
], OfferingSlideImg);

// src/entity/offerSubCategory.entity.ts
var import_typeorm95 = require("typeorm");
function _ts_decorate95(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate95, "_ts_decorate");
function _ts_metadata95(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata95, "_ts_metadata");
var OfferSubCategory = class {
  static {
    __name(this, "OfferSubCategory");
  }
  id;
  // @JoinColumn({ name: "offer_category_id" })
  offerCategory;
  nameEn;
  nameAr;
  nameTr;
  createdAt;
  updatedAt;
};
_ts_decorate95([
  (0, import_typeorm95.PrimaryGeneratedColumn)(),
  _ts_metadata95("design:type", Number)
], OfferSubCategory.prototype, "id", void 0);
_ts_decorate95([
  (0, import_typeorm95.ManyToOne)(() => OfferCategory, (category) => category.id),
  _ts_metadata95("design:type", typeof OfferCategory === "undefined" ? Object : OfferCategory)
], OfferSubCategory.prototype, "offerCategory", void 0);
_ts_decorate95([
  (0, import_typeorm95.Column)("varchar", {
    unique: true
  }),
  _ts_metadata95("design:type", String)
], OfferSubCategory.prototype, "nameEn", void 0);
_ts_decorate95([
  (0, import_typeorm95.Column)("varchar", {
    unique: true
  }),
  _ts_metadata95("design:type", String)
], OfferSubCategory.prototype, "nameAr", void 0);
_ts_decorate95([
  (0, import_typeorm95.Column)("varchar", {
    unique: true
  }),
  _ts_metadata95("design:type", String)
], OfferSubCategory.prototype, "nameTr", void 0);
_ts_decorate95([
  (0, import_typeorm95.CreateDateColumn)(),
  _ts_metadata95("design:type", typeof Date === "undefined" ? Object : Date)
], OfferSubCategory.prototype, "createdAt", void 0);
_ts_decorate95([
  (0, import_typeorm95.UpdateDateColumn)(),
  _ts_metadata95("design:type", typeof Date === "undefined" ? Object : Date)
], OfferSubCategory.prototype, "updatedAt", void 0);
OfferSubCategory = _ts_decorate95([
  (0, import_typeorm95.Entity)("offer_sub_categories")
], OfferSubCategory);

// src/entity/passwordReset.entity.ts
var import_typeorm96 = require("typeorm");
function _ts_decorate96(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate96, "_ts_decorate");
function _ts_metadata96(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata96, "_ts_metadata");
var PasswordReset = class {
  static {
    __name(this, "PasswordReset");
  }
  email;
  token;
  created_at;
};
_ts_decorate96([
  (0, import_typeorm96.PrimaryColumn)(),
  _ts_metadata96("design:type", String)
], PasswordReset.prototype, "email", void 0);
_ts_decorate96([
  (0, import_typeorm96.Column)(),
  _ts_metadata96("design:type", String)
], PasswordReset.prototype, "token", void 0);
_ts_decorate96([
  (0, import_typeorm96.CreateDateColumn)({
    nullable: true
  }),
  _ts_metadata96("design:type", typeof Date === "undefined" ? Object : Date)
], PasswordReset.prototype, "created_at", void 0);
PasswordReset = _ts_decorate96([
  (0, import_typeorm96.Entity)("password_resets")
], PasswordReset);

// src/entity/patientHCPConversation.entity.ts
var import_typeorm97 = require("typeorm");
function _ts_decorate97(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate97, "_ts_decorate");
function _ts_metadata97(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata97, "_ts_metadata");
var PatientHcpConversation = class {
  static {
    __name(this, "PatientHcpConversation");
  }
  id;
  hcp;
  user;
  createdAt;
  updatedAt;
};
_ts_decorate97([
  (0, import_typeorm97.PrimaryGeneratedColumn)(),
  _ts_metadata97("design:type", Number)
], PatientHcpConversation.prototype, "id", void 0);
_ts_decorate97([
  (0, import_typeorm97.ManyToOne)(() => HCP, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata97("design:type", typeof HCP === "undefined" ? Object : HCP)
], PatientHcpConversation.prototype, "hcp", void 0);
_ts_decorate97([
  (0, import_typeorm97.ManyToOne)(() => User, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata97("design:type", typeof User === "undefined" ? Object : User)
], PatientHcpConversation.prototype, "user", void 0);
_ts_decorate97([
  (0, import_typeorm97.CreateDateColumn)(),
  _ts_metadata97("design:type", typeof Date === "undefined" ? Object : Date)
], PatientHcpConversation.prototype, "createdAt", void 0);
_ts_decorate97([
  (0, import_typeorm97.UpdateDateColumn)(),
  _ts_metadata97("design:type", typeof Date === "undefined" ? Object : Date)
], PatientHcpConversation.prototype, "updatedAt", void 0);
PatientHcpConversation = _ts_decorate97([
  (0, import_typeorm97.Entity)("patient_hcp_conversations")
], PatientHcpConversation);

// src/entity/patientHCPMessage.entity.ts
var import_typeorm98 = require("typeorm");
function _ts_decorate98(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate98, "_ts_decorate");
function _ts_metadata98(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata98, "_ts_metadata");
var PatientHcpMessage = class {
  static {
    __name(this, "PatientHcpMessage");
  }
  id;
  patientHcpConversation;
  sender;
  message;
  msgType;
  fileLink;
  isSeen;
  createdAt;
  updatedAt;
};
_ts_decorate98([
  (0, import_typeorm98.PrimaryGeneratedColumn)(),
  _ts_metadata98("design:type", Number)
], PatientHcpMessage.prototype, "id", void 0);
_ts_decorate98([
  (0, import_typeorm98.ManyToOne)(() => PatientHcpConversation, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata98("design:type", typeof PatientHcpConversation === "undefined" ? Object : PatientHcpConversation)
], PatientHcpMessage.prototype, "patientHcpConversation", void 0);
_ts_decorate98([
  (0, import_typeorm98.Column)(),
  _ts_metadata98("design:type", String)
], PatientHcpMessage.prototype, "sender", void 0);
_ts_decorate98([
  (0, import_typeorm98.Column)("text"),
  _ts_metadata98("design:type", String)
], PatientHcpMessage.prototype, "message", void 0);
_ts_decorate98([
  (0, import_typeorm98.Column)({
    default: "txt"
  }),
  _ts_metadata98("design:type", String)
], PatientHcpMessage.prototype, "msgType", void 0);
_ts_decorate98([
  (0, import_typeorm98.Column)({
    nullable: true
  }),
  _ts_metadata98("design:type", String)
], PatientHcpMessage.prototype, "fileLink", void 0);
_ts_decorate98([
  (0, import_typeorm98.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata98("design:type", Boolean)
], PatientHcpMessage.prototype, "isSeen", void 0);
_ts_decorate98([
  (0, import_typeorm98.CreateDateColumn)(),
  _ts_metadata98("design:type", typeof Date === "undefined" ? Object : Date)
], PatientHcpMessage.prototype, "createdAt", void 0);
_ts_decorate98([
  (0, import_typeorm98.UpdateDateColumn)(),
  _ts_metadata98("design:type", typeof Date === "undefined" ? Object : Date)
], PatientHcpMessage.prototype, "updatedAt", void 0);
PatientHcpMessage = _ts_decorate98([
  (0, import_typeorm98.Entity)("patient_hcp_messages")
], PatientHcpMessage);

// src/entity/personalAccessToken.entity.ts
var import_typeorm99 = require("typeorm");
function _ts_decorate99(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate99, "_ts_decorate");
function _ts_metadata99(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata99, "_ts_metadata");
var PersonalAccessToken = class {
  static {
    __name(this, "PersonalAccessToken");
  }
  id;
  tokenable_type;
  tokenable_id;
  name;
  token;
  abilities;
  last_used_at;
  created_at;
  updated_at;
};
_ts_decorate99([
  (0, import_typeorm99.PrimaryGeneratedColumn)(),
  _ts_metadata99("design:type", Number)
], PersonalAccessToken.prototype, "id", void 0);
_ts_decorate99([
  (0, import_typeorm99.Column)(),
  _ts_metadata99("design:type", String)
], PersonalAccessToken.prototype, "tokenable_type", void 0);
_ts_decorate99([
  (0, import_typeorm99.Column)(),
  _ts_metadata99("design:type", Number)
], PersonalAccessToken.prototype, "tokenable_id", void 0);
_ts_decorate99([
  (0, import_typeorm99.Column)(),
  _ts_metadata99("design:type", String)
], PersonalAccessToken.prototype, "name", void 0);
_ts_decorate99([
  (0, import_typeorm99.Column)({
    length: 64,
    unique: true
  }),
  _ts_metadata99("design:type", String)
], PersonalAccessToken.prototype, "token", void 0);
_ts_decorate99([
  (0, import_typeorm99.Column)("text", {
    nullable: true
  }),
  _ts_metadata99("design:type", String)
], PersonalAccessToken.prototype, "abilities", void 0);
_ts_decorate99([
  (0, import_typeorm99.Column)({
    nullable: true
  }),
  _ts_metadata99("design:type", typeof Date === "undefined" ? Object : Date)
], PersonalAccessToken.prototype, "last_used_at", void 0);
_ts_decorate99([
  (0, import_typeorm99.CreateDateColumn)(),
  _ts_metadata99("design:type", typeof Date === "undefined" ? Object : Date)
], PersonalAccessToken.prototype, "created_at", void 0);
_ts_decorate99([
  (0, import_typeorm99.CreateDateColumn)(),
  _ts_metadata99("design:type", typeof Date === "undefined" ? Object : Date)
], PersonalAccessToken.prototype, "updated_at", void 0);
PersonalAccessToken = _ts_decorate99([
  (0, import_typeorm99.Entity)("personal_access_tokens")
], PersonalAccessToken);

// src/entity/pharmacy.entity.ts
var import_typeorm100 = require("typeorm");
function _ts_decorate100(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate100, "_ts_decorate");
function _ts_metadata100(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata100, "_ts_metadata");
var Pharmacy = class {
  static {
    __name(this, "Pharmacy");
  }
  id;
  country;
  city;
  name;
  createdAt;
  updatedAt;
};
_ts_decorate100([
  (0, import_typeorm100.PrimaryGeneratedColumn)(),
  _ts_metadata100("design:type", Number)
], Pharmacy.prototype, "id", void 0);
_ts_decorate100([
  (0, import_typeorm100.ManyToOne)(() => Country, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata100("design:type", typeof Country === "undefined" ? Object : Country)
], Pharmacy.prototype, "country", void 0);
_ts_decorate100([
  (0, import_typeorm100.ManyToOne)(() => City, {
    nullable: true,
    onDelete: "SET NULL"
  }),
  _ts_metadata100("design:type", typeof City === "undefined" ? Object : City)
], Pharmacy.prototype, "city", void 0);
_ts_decorate100([
  (0, import_typeorm100.Column)(),
  _ts_metadata100("design:type", String)
], Pharmacy.prototype, "name", void 0);
_ts_decorate100([
  (0, import_typeorm100.CreateDateColumn)(),
  _ts_metadata100("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "createdAt", void 0);
_ts_decorate100([
  (0, import_typeorm100.UpdateDateColumn)(),
  _ts_metadata100("design:type", typeof Date === "undefined" ? Object : Date)
], Pharmacy.prototype, "updatedAt", void 0);
Pharmacy = _ts_decorate100([
  (0, import_typeorm100.Entity)("pharmacies")
], Pharmacy);

// src/entity/pharmStore.entity.ts
var import_typeorm101 = require("typeorm");
function _ts_decorate101(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate101, "_ts_decorate");
function _ts_metadata101(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata101, "_ts_metadata");
var PharmStore = class {
  static {
    __name(this, "PharmStore");
  }
  id;
  countryId;
  pharmacyId;
  name;
  email;
  emailVerifiedAt;
  phone;
  phoneVerifiedAt;
  password;
  isActive;
  createdAt;
  updatedAt;
};
_ts_decorate101([
  (0, import_typeorm101.PrimaryGeneratedColumn)(),
  _ts_metadata101("design:type", Number)
], PharmStore.prototype, "id", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)(),
  _ts_metadata101("design:type", Number)
], PharmStore.prototype, "countryId", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)(),
  _ts_metadata101("design:type", Number)
], PharmStore.prototype, "pharmacyId", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)({
    unique: true
  }),
  _ts_metadata101("design:type", String)
], PharmStore.prototype, "name", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)({
    unique: true
  }),
  _ts_metadata101("design:type", String)
], PharmStore.prototype, "email", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata101("design:type", Object)
], PharmStore.prototype, "emailVerifiedAt", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)({
    unique: true
  }),
  _ts_metadata101("design:type", String)
], PharmStore.prototype, "phone", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata101("design:type", Object)
], PharmStore.prototype, "phoneVerifiedAt", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)(),
  _ts_metadata101("design:type", String)
], PharmStore.prototype, "password", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)({
    default: false
  }),
  _ts_metadata101("design:type", Boolean)
], PharmStore.prototype, "isActive", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata101("design:type", typeof Date === "undefined" ? Object : Date)
], PharmStore.prototype, "createdAt", void 0);
_ts_decorate101([
  (0, import_typeorm101.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata101("design:type", typeof Date === "undefined" ? Object : Date)
], PharmStore.prototype, "updatedAt", void 0);
PharmStore = _ts_decorate101([
  (0, import_typeorm101.Entity)("pharm_stores")
], PharmStore);

// src/entity/popupAd.entity.ts
var import_typeorm102 = require("typeorm");
function _ts_decorate102(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate102, "_ts_decorate");
function _ts_metadata102(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata102, "_ts_metadata");
var PopupAd = class {
  static {
    __name(this, "PopupAd");
  }
  id;
  countryId;
  img;
  action;
  actionId;
  actionUrl;
  createdAt;
  updatedAt;
};
_ts_decorate102([
  (0, import_typeorm102.PrimaryGeneratedColumn)(),
  _ts_metadata102("design:type", Number)
], PopupAd.prototype, "id", void 0);
_ts_decorate102([
  (0, import_typeorm102.Column)(),
  _ts_metadata102("design:type", Number)
], PopupAd.prototype, "countryId", void 0);
_ts_decorate102([
  (0, import_typeorm102.Column)(),
  _ts_metadata102("design:type", String)
], PopupAd.prototype, "img", void 0);
_ts_decorate102([
  (0, import_typeorm102.Column)({
    nullable: true
  }),
  _ts_metadata102("design:type", String)
], PopupAd.prototype, "action", void 0);
_ts_decorate102([
  (0, import_typeorm102.Column)({
    nullable: true
  }),
  _ts_metadata102("design:type", String)
], PopupAd.prototype, "actionId", void 0);
_ts_decorate102([
  (0, import_typeorm102.Column)({
    nullable: true
  }),
  _ts_metadata102("design:type", String)
], PopupAd.prototype, "actionUrl", void 0);
_ts_decorate102([
  (0, import_typeorm102.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata102("design:type", typeof Date === "undefined" ? Object : Date)
], PopupAd.prototype, "createdAt", void 0);
_ts_decorate102([
  (0, import_typeorm102.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata102("design:type", typeof Date === "undefined" ? Object : Date)
], PopupAd.prototype, "updatedAt", void 0);
PopupAd = _ts_decorate102([
  (0, import_typeorm102.Entity)("popup_ads")
], PopupAd);

// src/entity/practice.entity.ts
var import_typeorm103 = require("typeorm");
function _ts_decorate103(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate103, "_ts_decorate");
function _ts_metadata103(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata103, "_ts_metadata");
var Practice = class {
  static {
    __name(this, "Practice");
  }
  id;
  country;
  doctor;
  name;
  img;
  phone;
  created_at;
  updated_at;
};
_ts_decorate103([
  (0, import_typeorm103.PrimaryGeneratedColumn)(),
  _ts_metadata103("design:type", Number)
], Practice.prototype, "id", void 0);
_ts_decorate103([
  (0, import_typeorm103.ManyToOne)(() => Country, (country) => country.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata103("design:type", typeof Country === "undefined" ? Object : Country)
], Practice.prototype, "country", void 0);
_ts_decorate103([
  (0, import_typeorm103.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata103("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], Practice.prototype, "doctor", void 0);
_ts_decorate103([
  (0, import_typeorm103.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata103("design:type", String)
], Practice.prototype, "name", void 0);
_ts_decorate103([
  (0, import_typeorm103.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata103("design:type", String)
], Practice.prototype, "img", void 0);
_ts_decorate103([
  (0, import_typeorm103.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata103("design:type", String)
], Practice.prototype, "phone", void 0);
_ts_decorate103([
  (0, import_typeorm103.CreateDateColumn)(),
  _ts_metadata103("design:type", typeof Date === "undefined" ? Object : Date)
], Practice.prototype, "created_at", void 0);
_ts_decorate103([
  (0, import_typeorm103.UpdateDateColumn)(),
  _ts_metadata103("design:type", typeof Date === "undefined" ? Object : Date)
], Practice.prototype, "updated_at", void 0);
Practice = _ts_decorate103([
  (0, import_typeorm103.Entity)("practices")
], Practice);

// src/entity/practiceDoctor.entity.ts
var import_typeorm104 = require("typeorm");
function _ts_decorate104(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate104, "_ts_decorate");
function _ts_metadata104(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata104, "_ts_metadata");
var PracticeDoctor = class {
  static {
    __name(this, "PracticeDoctor");
  }
  id;
  practice;
  doctor;
  created_at;
  updated_at;
};
_ts_decorate104([
  (0, import_typeorm104.PrimaryGeneratedColumn)(),
  _ts_metadata104("design:type", Number)
], PracticeDoctor.prototype, "id", void 0);
_ts_decorate104([
  (0, import_typeorm104.ManyToOne)(() => Practice, (practice) => practice.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata104("design:type", typeof Practice === "undefined" ? Object : Practice)
], PracticeDoctor.prototype, "practice", void 0);
_ts_decorate104([
  (0, import_typeorm104.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata104("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], PracticeDoctor.prototype, "doctor", void 0);
_ts_decorate104([
  (0, import_typeorm104.CreateDateColumn)(),
  _ts_metadata104("design:type", typeof Date === "undefined" ? Object : Date)
], PracticeDoctor.prototype, "created_at", void 0);
_ts_decorate104([
  (0, import_typeorm104.UpdateDateColumn)(),
  _ts_metadata104("design:type", typeof Date === "undefined" ? Object : Date)
], PracticeDoctor.prototype, "updated_at", void 0);
PracticeDoctor = _ts_decorate104([
  (0, import_typeorm104.Entity)("practice_doctors")
], PracticeDoctor);

// src/entity/practiceInsurance.entity.ts
var import_typeorm105 = require("typeorm");
function _ts_decorate105(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate105, "_ts_decorate");
function _ts_metadata105(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata105, "_ts_metadata");
var PracticeInsurance = class {
  static {
    __name(this, "PracticeInsurance");
  }
  id;
  insuranceCompany;
  practice;
  created_at;
  updated_at;
};
_ts_decorate105([
  (0, import_typeorm105.PrimaryGeneratedColumn)(),
  _ts_metadata105("design:type", Number)
], PracticeInsurance.prototype, "id", void 0);
_ts_decorate105([
  (0, import_typeorm105.ManyToOne)(() => InsuranceCompany, (insuranceCompany) => insuranceCompany.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata105("design:type", typeof InsuranceCompany === "undefined" ? Object : InsuranceCompany)
], PracticeInsurance.prototype, "insuranceCompany", void 0);
_ts_decorate105([
  (0, import_typeorm105.ManyToOne)(() => Practice, (practice) => practice.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata105("design:type", typeof Practice === "undefined" ? Object : Practice)
], PracticeInsurance.prototype, "practice", void 0);
_ts_decorate105([
  (0, import_typeorm105.CreateDateColumn)(),
  _ts_metadata105("design:type", typeof Date === "undefined" ? Object : Date)
], PracticeInsurance.prototype, "created_at", void 0);
_ts_decorate105([
  (0, import_typeorm105.UpdateDateColumn)(),
  _ts_metadata105("design:type", typeof Date === "undefined" ? Object : Date)
], PracticeInsurance.prototype, "updated_at", void 0);
PracticeInsurance = _ts_decorate105([
  (0, import_typeorm105.Entity)("practice_insurances")
], PracticeInsurance);

// src/entity/practiceLocation.entity.ts
var import_typeorm106 = require("typeorm");
function _ts_decorate106(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate106, "_ts_decorate");
function _ts_metadata106(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata106, "_ts_metadata");
var PracticeLocation = class {
  static {
    __name(this, "PracticeLocation");
  }
  id;
  practice;
  location;
  created_at;
  updated_at;
};
_ts_decorate106([
  (0, import_typeorm106.PrimaryGeneratedColumn)(),
  _ts_metadata106("design:type", Number)
], PracticeLocation.prototype, "id", void 0);
_ts_decorate106([
  (0, import_typeorm106.ManyToOne)(() => Practice, (practice) => practice.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata106("design:type", typeof Practice === "undefined" ? Object : Practice)
], PracticeLocation.prototype, "practice", void 0);
_ts_decorate106([
  (0, import_typeorm106.Column)(),
  _ts_metadata106("design:type", String)
], PracticeLocation.prototype, "location", void 0);
_ts_decorate106([
  (0, import_typeorm106.CreateDateColumn)(),
  _ts_metadata106("design:type", typeof Date === "undefined" ? Object : Date)
], PracticeLocation.prototype, "created_at", void 0);
_ts_decorate106([
  (0, import_typeorm106.UpdateDateColumn)(),
  _ts_metadata106("design:type", typeof Date === "undefined" ? Object : Date)
], PracticeLocation.prototype, "updated_at", void 0);
PracticeLocation = _ts_decorate106([
  (0, import_typeorm106.Entity)("practice_locations")
], PracticeLocation);

// src/entity/province.entity.ts
var import_typeorm107 = require("typeorm");
function _ts_decorate107(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate107, "_ts_decorate");
function _ts_metadata107(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata107, "_ts_metadata");
var Province = class {
  static {
    __name(this, "Province");
  }
  id;
  city;
  name;
  nameAr;
  createdAt;
  updatedAt;
};
_ts_decorate107([
  (0, import_typeorm107.PrimaryGeneratedColumn)(),
  _ts_metadata107("design:type", Number)
], Province.prototype, "id", void 0);
_ts_decorate107([
  (0, import_typeorm107.ManyToOne)(() => City, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata107("design:type", typeof City === "undefined" ? Object : City)
], Province.prototype, "city", void 0);
_ts_decorate107([
  (0, import_typeorm107.Column)({
    unique: true
  }),
  _ts_metadata107("design:type", String)
], Province.prototype, "name", void 0);
_ts_decorate107([
  (0, import_typeorm107.Column)({
    unique: true
  }),
  _ts_metadata107("design:type", String)
], Province.prototype, "nameAr", void 0);
_ts_decorate107([
  (0, import_typeorm107.CreateDateColumn)(),
  _ts_metadata107("design:type", typeof Date === "undefined" ? Object : Date)
], Province.prototype, "createdAt", void 0);
_ts_decorate107([
  (0, import_typeorm107.UpdateDateColumn)(),
  _ts_metadata107("design:type", typeof Date === "undefined" ? Object : Date)
], Province.prototype, "updatedAt", void 0);
Province = _ts_decorate107([
  (0, import_typeorm107.Entity)("provinces")
], Province);

// src/entity/purchasedMedicine.entity.ts
var import_typeorm108 = require("typeorm");
function _ts_decorate108(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate108, "_ts_decorate");
function _ts_metadata108(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata108, "_ts_metadata");
var PurchasedMedicine = class {
  static {
    __name(this, "PurchasedMedicine");
  }
  id;
  medicinePurchaseOrderId;
  medicineId;
  nameEn;
  nameAr;
  nameTr;
  img;
  count;
  price;
  createdAt;
  updatedAt;
};
_ts_decorate108([
  (0, import_typeorm108.PrimaryGeneratedColumn)(),
  _ts_metadata108("design:type", Number)
], PurchasedMedicine.prototype, "id", void 0);
_ts_decorate108([
  (0, import_typeorm108.Column)({
    type: "int"
  }),
  _ts_metadata108("design:type", Number)
], PurchasedMedicine.prototype, "medicinePurchaseOrderId", void 0);
_ts_decorate108([
  (0, import_typeorm108.Column)({
    type: "int"
  }),
  _ts_metadata108("design:type", Number)
], PurchasedMedicine.prototype, "medicineId", void 0);
_ts_decorate108([
  (0, import_typeorm108.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata108("design:type", String)
], PurchasedMedicine.prototype, "nameEn", void 0);
_ts_decorate108([
  (0, import_typeorm108.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata108("design:type", String)
], PurchasedMedicine.prototype, "nameAr", void 0);
_ts_decorate108([
  (0, import_typeorm108.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata108("design:type", String)
], PurchasedMedicine.prototype, "nameTr", void 0);
_ts_decorate108([
  (0, import_typeorm108.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata108("design:type", String)
], PurchasedMedicine.prototype, "img", void 0);
_ts_decorate108([
  (0, import_typeorm108.Column)({
    type: "int"
  }),
  _ts_metadata108("design:type", Number)
], PurchasedMedicine.prototype, "count", void 0);
_ts_decorate108([
  (0, import_typeorm108.Column)({
    type: "int"
  }),
  _ts_metadata108("design:type", Number)
], PurchasedMedicine.prototype, "price", void 0);
_ts_decorate108([
  (0, import_typeorm108.CreateDateColumn)(),
  _ts_metadata108("design:type", typeof Date === "undefined" ? Object : Date)
], PurchasedMedicine.prototype, "createdAt", void 0);
_ts_decorate108([
  (0, import_typeorm108.UpdateDateColumn)(),
  _ts_metadata108("design:type", typeof Date === "undefined" ? Object : Date)
], PurchasedMedicine.prototype, "updatedAt", void 0);
PurchasedMedicine = _ts_decorate108([
  (0, import_typeorm108.Entity)("purchased_medicines")
], PurchasedMedicine);

// src/entity/questionDoctor.entity.ts
var import_typeorm109 = require("typeorm");
function _ts_decorate109(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate109, "_ts_decorate");
function _ts_metadata109(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata109, "_ts_metadata");
var QuestionDoctor = class {
  static {
    __name(this, "QuestionDoctor");
  }
  id;
  userId;
  doctorId;
  medicalSpecialtyId;
  content;
  isAppear;
  status;
  views;
  createdAt;
  updatedAt;
};
_ts_decorate109([
  (0, import_typeorm109.PrimaryGeneratedColumn)(),
  _ts_metadata109("design:type", Number)
], QuestionDoctor.prototype, "id", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)(),
  _ts_metadata109("design:type", Number)
], QuestionDoctor.prototype, "userId", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)({
    nullable: true
  }),
  _ts_metadata109("design:type", Number)
], QuestionDoctor.prototype, "doctorId", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)({
    default: 0
  }),
  _ts_metadata109("design:type", Number)
], QuestionDoctor.prototype, "medicalSpecialtyId", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)("text"),
  _ts_metadata109("design:type", String)
], QuestionDoctor.prototype, "content", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)({
    default: false
  }),
  _ts_metadata109("design:type", Boolean)
], QuestionDoctor.prototype, "isAppear", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)({
    default: 0
  }),
  _ts_metadata109("design:type", Number)
], QuestionDoctor.prototype, "status", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)({
    default: 0
  }),
  _ts_metadata109("design:type", Number)
], QuestionDoctor.prototype, "views", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata109("design:type", typeof Date === "undefined" ? Object : Date)
], QuestionDoctor.prototype, "createdAt", void 0);
_ts_decorate109([
  (0, import_typeorm109.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata109("design:type", typeof Date === "undefined" ? Object : Date)
], QuestionDoctor.prototype, "updatedAt", void 0);
QuestionDoctor = _ts_decorate109([
  (0, import_typeorm109.Entity)("question_doctors")
], QuestionDoctor);

// src/entity/reminder.entity.ts
var import_typeorm110 = require("typeorm");
function _ts_decorate110(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate110, "_ts_decorate");
function _ts_metadata110(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata110, "_ts_metadata");
var Reminder = class {
  static {
    __name(this, "Reminder");
  }
  id;
  userNumber;
  userFcmToken;
  originalTime;
  reminderTime;
  createdAt;
  updatedAt;
};
_ts_decorate110([
  (0, import_typeorm110.PrimaryGeneratedColumn)(),
  _ts_metadata110("design:type", Number)
], Reminder.prototype, "id", void 0);
_ts_decorate110([
  (0, import_typeorm110.Column)({
    nullable: true
  }),
  _ts_metadata110("design:type", String)
], Reminder.prototype, "userNumber", void 0);
_ts_decorate110([
  (0, import_typeorm110.Column)({
    nullable: true
  }),
  _ts_metadata110("design:type", String)
], Reminder.prototype, "userFcmToken", void 0);
_ts_decorate110([
  (0, import_typeorm110.Column)({
    type: "timestamp"
  }),
  _ts_metadata110("design:type", typeof Date === "undefined" ? Object : Date)
], Reminder.prototype, "originalTime", void 0);
_ts_decorate110([
  (0, import_typeorm110.Column)({
    type: "timestamp"
  }),
  _ts_metadata110("design:type", typeof Date === "undefined" ? Object : Date)
], Reminder.prototype, "reminderTime", void 0);
_ts_decorate110([
  (0, import_typeorm110.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata110("design:type", typeof Date === "undefined" ? Object : Date)
], Reminder.prototype, "createdAt", void 0);
_ts_decorate110([
  (0, import_typeorm110.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata110("design:type", typeof Date === "undefined" ? Object : Date)
], Reminder.prototype, "updatedAt", void 0);
Reminder = _ts_decorate110([
  (0, import_typeorm110.Entity)("reminders")
], Reminder);

// src/entity/rewardPoint.entityt.ts
var import_typeorm111 = require("typeorm");
function _ts_decorate111(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate111, "_ts_decorate");
function _ts_metadata111(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata111, "_ts_metadata");
var RewardPoints = class {
  static {
    __name(this, "RewardPoints");
  }
  id;
  bookAppointment;
  bookOnlineAppointment;
  offerReview;
  bookOffer;
  updateProfile;
  bookLabTest;
  blogComment;
  createdAt;
  updatedAt;
};
_ts_decorate111([
  (0, import_typeorm111.PrimaryGeneratedColumn)(),
  _ts_metadata111("design:type", Number)
], RewardPoints.prototype, "id", void 0);
_ts_decorate111([
  (0, import_typeorm111.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata111("design:type", Number)
], RewardPoints.prototype, "bookAppointment", void 0);
_ts_decorate111([
  (0, import_typeorm111.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata111("design:type", Number)
], RewardPoints.prototype, "bookOnlineAppointment", void 0);
_ts_decorate111([
  (0, import_typeorm111.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata111("design:type", Number)
], RewardPoints.prototype, "offerReview", void 0);
_ts_decorate111([
  (0, import_typeorm111.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata111("design:type", Number)
], RewardPoints.prototype, "bookOffer", void 0);
_ts_decorate111([
  (0, import_typeorm111.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata111("design:type", Number)
], RewardPoints.prototype, "updateProfile", void 0);
_ts_decorate111([
  (0, import_typeorm111.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata111("design:type", Number)
], RewardPoints.prototype, "bookLabTest", void 0);
_ts_decorate111([
  (0, import_typeorm111.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata111("design:type", Number)
], RewardPoints.prototype, "blogComment", void 0);
_ts_decorate111([
  (0, import_typeorm111.CreateDateColumn)(),
  _ts_metadata111("design:type", typeof Date === "undefined" ? Object : Date)
], RewardPoints.prototype, "createdAt", void 0);
_ts_decorate111([
  (0, import_typeorm111.UpdateDateColumn)(),
  _ts_metadata111("design:type", typeof Date === "undefined" ? Object : Date)
], RewardPoints.prototype, "updatedAt", void 0);
RewardPoints = _ts_decorate111([
  (0, import_typeorm111.Entity)("reward_points")
], RewardPoints);

// src/entity/serviceProvider.entity.ts
var import_typeorm112 = require("typeorm");
function _ts_decorate112(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate112, "_ts_decorate");
function _ts_metadata112(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata112, "_ts_metadata");
var ServiceProvider = class {
  static {
    __name(this, "ServiceProvider");
  }
  id;
  countryId;
  cityId;
  uniqueId;
  specialCode;
  name;
  nameAr;
  nameEn;
  nameTr;
  email;
  emailVerifiedAt;
  phone;
  phoneVerifiedAt;
  balance;
  password;
  profileImg;
  address;
  addressAr;
  addressEn;
  addressTr;
  longitude;
  latitude;
  bio;
  bioAr;
  bioEn;
  bioTr;
  facebookLink;
  instagramLink;
  twitterLink;
  linkedinLink;
  youtubeLink;
  rating;
  numberRatings;
  isActive;
  fcmToken;
  isToDelete;
  deleteDate;
  isDeleted;
  createdAt;
  updatedAt;
};
_ts_decorate112([
  (0, import_typeorm112.PrimaryGeneratedColumn)(),
  _ts_metadata112("design:type", Number)
], ServiceProvider.prototype, "id", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("int"),
  _ts_metadata112("design:type", Number)
], ServiceProvider.prototype, "countryId", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("int", {
    nullable: true
  }),
  _ts_metadata112("design:type", Number)
], ServiceProvider.prototype, "cityId", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar"),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "uniqueId", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    unique: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "specialCode", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar"),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "name", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "nameAr", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "nameEn", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "nameTr", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    unique: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "email", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("timestamp", {
    nullable: true
  }),
  _ts_metadata112("design:type", typeof Date === "undefined" ? Object : Date)
], ServiceProvider.prototype, "emailVerifiedAt", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    unique: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "phone", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("timestamp", {
    nullable: true
  }),
  _ts_metadata112("design:type", typeof Date === "undefined" ? Object : Date)
], ServiceProvider.prototype, "phoneVerifiedAt", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("int", {
    default: 0
  }),
  _ts_metadata112("design:type", Number)
], ServiceProvider.prototype, "balance", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "password", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true,
    default: "https://sehapracto-images.s3.us-east-2.amazonaws.com/newavatar.png"
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "profileImg", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "address", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "addressAr", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "addressEn", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "addressTr", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("double", {
    nullable: true
  }),
  _ts_metadata112("design:type", Number)
], ServiceProvider.prototype, "longitude", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("double", {
    nullable: true
  }),
  _ts_metadata112("design:type", Number)
], ServiceProvider.prototype, "latitude", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("text", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "bio", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("text", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "bioAr", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("text", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "bioEn", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("text", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "bioTr", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "facebookLink", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "instagramLink", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "twitterLink", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "linkedinLink", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "youtubeLink", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("int", {
    default: 0
  }),
  _ts_metadata112("design:type", Number)
], ServiceProvider.prototype, "rating", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("int", {
    default: 0
  }),
  _ts_metadata112("design:type", Number)
], ServiceProvider.prototype, "numberRatings", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("boolean", {
    default: false
  }),
  _ts_metadata112("design:type", Boolean)
], ServiceProvider.prototype, "isActive", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata112("design:type", String)
], ServiceProvider.prototype, "fcmToken", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("boolean", {
    default: false,
    nullable: true
  }),
  _ts_metadata112("design:type", Boolean)
], ServiceProvider.prototype, "isToDelete", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("timestamp", {
    nullable: true
  }),
  _ts_metadata112("design:type", typeof Date === "undefined" ? Object : Date)
], ServiceProvider.prototype, "deleteDate", void 0);
_ts_decorate112([
  (0, import_typeorm112.Column)("boolean", {
    default: false
  }),
  _ts_metadata112("design:type", Boolean)
], ServiceProvider.prototype, "isDeleted", void 0);
_ts_decorate112([
  (0, import_typeorm112.CreateDateColumn)(),
  _ts_metadata112("design:type", typeof Date === "undefined" ? Object : Date)
], ServiceProvider.prototype, "createdAt", void 0);
_ts_decorate112([
  (0, import_typeorm112.UpdateDateColumn)(),
  _ts_metadata112("design:type", typeof Date === "undefined" ? Object : Date)
], ServiceProvider.prototype, "updatedAt", void 0);
ServiceProvider = _ts_decorate112([
  (0, import_typeorm112.Entity)("service_providers")
], ServiceProvider);

// src/entity/serviceProviderAccessability.entity.ts
var import_typeorm113 = require("typeorm");
function _ts_decorate113(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate113, "_ts_decorate");
function _ts_metadata113(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata113, "_ts_metadata");
var ServiceProviderAccessability = class {
  static {
    __name(this, "ServiceProviderAccessability");
  }
  id;
  // @JoinColumn({ name: "offer_accessability_id" })
  offerAccessability;
  // @JoinColumn({ name: "service_provider_id" })
  serviceProvider;
  createdAt;
  updatedAt;
};
_ts_decorate113([
  (0, import_typeorm113.PrimaryGeneratedColumn)(),
  _ts_metadata113("design:type", Number)
], ServiceProviderAccessability.prototype, "id", void 0);
_ts_decorate113([
  (0, import_typeorm113.ManyToOne)(() => OfferAccessibility, (accessability) => accessability.id),
  _ts_metadata113("design:type", typeof OfferAccessibility === "undefined" ? Object : OfferAccessibility)
], ServiceProviderAccessability.prototype, "offerAccessability", void 0);
_ts_decorate113([
  (0, import_typeorm113.ManyToOne)(() => ServiceProvider, (provider) => provider.id),
  _ts_metadata113("design:type", typeof ServiceProvider === "undefined" ? Object : ServiceProvider)
], ServiceProviderAccessability.prototype, "serviceProvider", void 0);
_ts_decorate113([
  (0, import_typeorm113.CreateDateColumn)(),
  _ts_metadata113("design:type", typeof Date === "undefined" ? Object : Date)
], ServiceProviderAccessability.prototype, "createdAt", void 0);
_ts_decorate113([
  (0, import_typeorm113.UpdateDateColumn)(),
  _ts_metadata113("design:type", typeof Date === "undefined" ? Object : Date)
], ServiceProviderAccessability.prototype, "updatedAt", void 0);
ServiceProviderAccessability = _ts_decorate113([
  (0, import_typeorm113.Entity)("service_provider_accessabilities")
], ServiceProviderAccessability);

// src/entity/session.entity.ts
var import_typeorm114 = require("typeorm");
function _ts_decorate114(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate114, "_ts_decorate");
function _ts_metadata114(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata114, "_ts_metadata");
var Session = class {
  static {
    __name(this, "Session");
  }
  id;
  user_id;
  ip_address;
  user_agent;
  payload;
  last_activity;
};
_ts_decorate114([
  (0, import_typeorm114.PrimaryColumn)(),
  _ts_metadata114("design:type", String)
], Session.prototype, "id", void 0);
_ts_decorate114([
  (0, import_typeorm114.ManyToOne)(() => User, (user) => user.id, {
    nullable: true,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm114.Index)(),
  _ts_metadata114("design:type", typeof User === "undefined" ? Object : User)
], Session.prototype, "user_id", void 0);
_ts_decorate114([
  (0, import_typeorm114.Column)({
    type: "varchar",
    length: 45,
    nullable: true
  }),
  _ts_metadata114("design:type", Object)
], Session.prototype, "ip_address", void 0);
_ts_decorate114([
  (0, import_typeorm114.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata114("design:type", Object)
], Session.prototype, "user_agent", void 0);
_ts_decorate114([
  (0, import_typeorm114.Column)({
    type: "text"
  }),
  _ts_metadata114("design:type", String)
], Session.prototype, "payload", void 0);
_ts_decorate114([
  (0, import_typeorm114.Column)({
    type: "int"
  }),
  (0, import_typeorm114.Index)(),
  _ts_metadata114("design:type", Number)
], Session.prototype, "last_activity", void 0);
Session = _ts_decorate114([
  (0, import_typeorm114.Entity)("sessions")
], Session);

// src/entity/slide.entity.ts
var import_typeorm115 = require("typeorm");
function _ts_decorate115(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate115, "_ts_decorate");
function _ts_metadata115(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata115, "_ts_metadata");
var Slide = class {
  static {
    __name(this, "Slide");
  }
  id;
  country;
  name;
  name_ar;
  name_en;
  name_tr;
  description;
  description_ar;
  description_en;
  description_tr;
  contact;
  img;
  link;
  fb_link;
  ig_link;
  twitter_link;
  whatsapp_link;
  video_link;
  client_name;
  client_adress;
  duration;
  clicks;
  views;
  is_active;
  created_at;
  updated_at;
};
_ts_decorate115([
  (0, import_typeorm115.PrimaryGeneratedColumn)(),
  _ts_metadata115("design:type", Number)
], Slide.prototype, "id", void 0);
_ts_decorate115([
  (0, import_typeorm115.ManyToOne)(() => Country, (country) => country.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata115("design:type", typeof Country === "undefined" ? Object : Country)
], Slide.prototype, "country", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "text"
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "name", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "name_ar", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "name_en", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "name_tr", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "text"
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "description", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "description_ar", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "description_en", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "description_tr", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "contact", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "img", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "link", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "fb_link", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "ig_link", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "twitter_link", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "whatsapp_link", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255,
    nullable: true
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "video_link", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "client_name", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "client_adress", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata115("design:type", String)
], Slide.prototype, "duration", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata115("design:type", Number)
], Slide.prototype, "clicks", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata115("design:type", Number)
], Slide.prototype, "views", void 0);
_ts_decorate115([
  (0, import_typeorm115.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata115("design:type", Boolean)
], Slide.prototype, "is_active", void 0);
_ts_decorate115([
  (0, import_typeorm115.CreateDateColumn)(),
  _ts_metadata115("design:type", typeof Date === "undefined" ? Object : Date)
], Slide.prototype, "created_at", void 0);
_ts_decorate115([
  (0, import_typeorm115.UpdateDateColumn)(),
  _ts_metadata115("design:type", typeof Date === "undefined" ? Object : Date)
], Slide.prototype, "updated_at", void 0);
Slide = _ts_decorate115([
  (0, import_typeorm115.Entity)("slides")
], Slide);

// src/entity/slideImage.entity.ts
var import_typeorm116 = require("typeorm");
function _ts_decorate116(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate116, "_ts_decorate");
function _ts_metadata116(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata116, "_ts_metadata");
var SlideImage = class {
  static {
    __name(this, "SlideImage");
  }
  id;
  slide_id;
  img_path;
  created_at;
  updated_at;
};
_ts_decorate116([
  (0, import_typeorm116.PrimaryGeneratedColumn)(),
  _ts_metadata116("design:type", Number)
], SlideImage.prototype, "id", void 0);
_ts_decorate116([
  (0, import_typeorm116.Column)(),
  _ts_metadata116("design:type", Number)
], SlideImage.prototype, "slide_id", void 0);
_ts_decorate116([
  (0, import_typeorm116.Column)(),
  _ts_metadata116("design:type", String)
], SlideImage.prototype, "img_path", void 0);
_ts_decorate116([
  (0, import_typeorm116.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata116("design:type", typeof Date === "undefined" ? Object : Date)
], SlideImage.prototype, "created_at", void 0);
_ts_decorate116([
  (0, import_typeorm116.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata116("design:type", typeof Date === "undefined" ? Object : Date)
], SlideImage.prototype, "updated_at", void 0);
SlideImage = _ts_decorate116([
  (0, import_typeorm116.Entity)("slide_images")
], SlideImage);

// src/entity/slideService.entity.ts
var import_typeorm117 = require("typeorm");
function _ts_decorate117(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate117, "_ts_decorate");
function _ts_metadata117(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata117, "_ts_metadata");
var SlideService = class {
  static {
    __name(this, "SlideService");
  }
  id;
  slide_id;
  name;
  img_path;
  price;
  created_at;
  updated_at;
};
_ts_decorate117([
  (0, import_typeorm117.PrimaryGeneratedColumn)(),
  _ts_metadata117("design:type", Number)
], SlideService.prototype, "id", void 0);
_ts_decorate117([
  (0, import_typeorm117.Column)(),
  _ts_metadata117("design:type", Number)
], SlideService.prototype, "slide_id", void 0);
_ts_decorate117([
  (0, import_typeorm117.Column)(),
  _ts_metadata117("design:type", String)
], SlideService.prototype, "name", void 0);
_ts_decorate117([
  (0, import_typeorm117.Column)(),
  _ts_metadata117("design:type", String)
], SlideService.prototype, "img_path", void 0);
_ts_decorate117([
  (0, import_typeorm117.Column)({
    default: 0
  }),
  _ts_metadata117("design:type", Number)
], SlideService.prototype, "price", void 0);
_ts_decorate117([
  (0, import_typeorm117.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata117("design:type", typeof Date === "undefined" ? Object : Date)
], SlideService.prototype, "created_at", void 0);
_ts_decorate117([
  (0, import_typeorm117.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata117("design:type", typeof Date === "undefined" ? Object : Date)
], SlideService.prototype, "updated_at", void 0);
SlideService = _ts_decorate117([
  (0, import_typeorm117.Entity)("slide_services")
], SlideService);

// src/entity/specialty.entity.ts
var import_typeorm118 = require("typeorm");
function _ts_decorate118(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate118, "_ts_decorate");
function _ts_metadata118(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata118, "_ts_metadata");
var Specialty = class {
  static {
    __name(this, "Specialty");
  }
  id;
  name;
  name_ar;
  img;
  description;
  meta_desc_en;
  meta_desc_ar;
  created_at;
  updated_at;
};
_ts_decorate118([
  (0, import_typeorm118.PrimaryGeneratedColumn)(),
  _ts_metadata118("design:type", Number)
], Specialty.prototype, "id", void 0);
_ts_decorate118([
  (0, import_typeorm118.Column)({
    type: "varchar",
    unique: true
  }),
  _ts_metadata118("design:type", String)
], Specialty.prototype, "name", void 0);
_ts_decorate118([
  (0, import_typeorm118.Column)({
    type: "varchar",
    unique: true
  }),
  _ts_metadata118("design:type", String)
], Specialty.prototype, "name_ar", void 0);
_ts_decorate118([
  (0, import_typeorm118.Column)({
    type: "varchar"
  }),
  _ts_metadata118("design:type", String)
], Specialty.prototype, "img", void 0);
_ts_decorate118([
  (0, import_typeorm118.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata118("design:type", String)
], Specialty.prototype, "description", void 0);
_ts_decorate118([
  (0, import_typeorm118.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata118("design:type", String)
], Specialty.prototype, "meta_desc_en", void 0);
_ts_decorate118([
  (0, import_typeorm118.Column)({
    type: "text",
    nullable: true
  }),
  _ts_metadata118("design:type", String)
], Specialty.prototype, "meta_desc_ar", void 0);
_ts_decorate118([
  (0, import_typeorm118.CreateDateColumn)(),
  _ts_metadata118("design:type", typeof Date === "undefined" ? Object : Date)
], Specialty.prototype, "created_at", void 0);
_ts_decorate118([
  (0, import_typeorm118.UpdateDateColumn)(),
  _ts_metadata118("design:type", typeof Date === "undefined" ? Object : Date)
], Specialty.prototype, "updated_at", void 0);
Specialty = _ts_decorate118([
  (0, import_typeorm118.Entity)("specialties")
], Specialty);

// src/entity/transaction.entity.ts
var import_typeorm119 = require("typeorm");
function _ts_decorate119(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate119, "_ts_decorate");
function _ts_metadata119(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata119, "_ts_metadata");
var Transaction = class {
  static {
    __name(this, "Transaction");
  }
  id;
  type;
  typeId;
  userType;
  userId;
  orderId;
  transactionType;
  value;
  currency;
  createdAt;
  updatedAt;
};
_ts_decorate119([
  (0, import_typeorm119.PrimaryGeneratedColumn)(),
  _ts_metadata119("design:type", Number)
], Transaction.prototype, "id", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)("varchar"),
  _ts_metadata119("design:type", String)
], Transaction.prototype, "type", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)("varchar"),
  _ts_metadata119("design:type", String)
], Transaction.prototype, "typeId", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)("varchar"),
  _ts_metadata119("design:type", String)
], Transaction.prototype, "userType", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)("varchar"),
  _ts_metadata119("design:type", String)
], Transaction.prototype, "userId", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)("varchar", {
    nullable: true
  }),
  _ts_metadata119("design:type", String)
], Transaction.prototype, "orderId", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)("varchar"),
  _ts_metadata119("design:type", String)
], Transaction.prototype, "transactionType", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)("int"),
  _ts_metadata119("design:type", Number)
], Transaction.prototype, "value", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)("varchar"),
  _ts_metadata119("design:type", String)
], Transaction.prototype, "currency", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata119("design:type", typeof Date === "undefined" ? Object : Date)
], Transaction.prototype, "createdAt", void 0);
_ts_decorate119([
  (0, import_typeorm119.Column)({
    type: "timestamp",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata119("design:type", typeof Date === "undefined" ? Object : Date)
], Transaction.prototype, "updatedAt", void 0);
Transaction = _ts_decorate119([
  (0, import_typeorm119.Entity)("transactions")
], Transaction);

// src/entity/userCoupon.entity.ts
var import_typeorm120 = require("typeorm");
function _ts_decorate120(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate120, "_ts_decorate");
function _ts_metadata120(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata120, "_ts_metadata");
var UserCoupon = class {
  static {
    __name(this, "UserCoupon");
  }
  id;
  userId;
  user;
  offeringCouponId;
  offeringCoupon;
  offeringId;
  // @JoinColumn({ name: 'offering_id' })
  offering;
  serviceProviderId;
  serviceProvider;
  maxAllowedUses;
  numberUsed;
  status;
  frequency;
  uniqueCode;
  lastUsed;
  createdAt;
  updatedAt;
};
_ts_decorate120([
  (0, import_typeorm120.PrimaryGeneratedColumn)(),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "id", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "int"
  }),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "userId", void 0);
_ts_decorate120([
  (0, import_typeorm120.ManyToOne)(() => User),
  (0, import_typeorm120.JoinColumn)({
    name: "user_id"
  }),
  _ts_metadata120("design:type", typeof User === "undefined" ? Object : User)
], UserCoupon.prototype, "user", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "int"
  }),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "offeringCouponId", void 0);
_ts_decorate120([
  (0, import_typeorm120.ManyToOne)(() => OfferingCoupon),
  (0, import_typeorm120.JoinColumn)({
    name: "offering_coupon_id"
  }),
  _ts_metadata120("design:type", typeof OfferingCoupon === "undefined" ? Object : OfferingCoupon)
], UserCoupon.prototype, "offeringCoupon", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "int"
  }),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "offeringId", void 0);
_ts_decorate120([
  (0, import_typeorm120.ManyToOne)(() => Offer, (offer) => offer.id),
  _ts_metadata120("design:type", typeof Offer === "undefined" ? Object : Offer)
], UserCoupon.prototype, "offering", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "int"
  }),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "serviceProviderId", void 0);
_ts_decorate120([
  (0, import_typeorm120.ManyToOne)(() => ServiceProvider),
  (0, import_typeorm120.JoinColumn)({
    name: "service_provider_id"
  }),
  _ts_metadata120("design:type", typeof ServiceProvider === "undefined" ? Object : ServiceProvider)
], UserCoupon.prototype, "serviceProvider", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "int"
  }),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "maxAllowedUses", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "numberUsed", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "int",
    default: 0
  }),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "status", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "int"
  }),
  _ts_metadata120("design:type", Number)
], UserCoupon.prototype, "frequency", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata120("design:type", String)
], UserCoupon.prototype, "uniqueCode", void 0);
_ts_decorate120([
  (0, import_typeorm120.Column)({
    type: "timestamp",
    nullable: true
  }),
  _ts_metadata120("design:type", Object)
], UserCoupon.prototype, "lastUsed", void 0);
_ts_decorate120([
  (0, import_typeorm120.CreateDateColumn)(),
  _ts_metadata120("design:type", typeof Date === "undefined" ? Object : Date)
], UserCoupon.prototype, "createdAt", void 0);
_ts_decorate120([
  (0, import_typeorm120.UpdateDateColumn)(),
  _ts_metadata120("design:type", typeof Date === "undefined" ? Object : Date)
], UserCoupon.prototype, "updatedAt", void 0);
UserCoupon = _ts_decorate120([
  (0, import_typeorm120.Entity)("user_coupons")
], UserCoupon);

// src/entity/userNotification.entity.ts
var import_typeorm121 = require("typeorm");
function _ts_decorate121(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate121, "_ts_decorate");
function _ts_metadata121(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata121, "_ts_metadata");
var UserNotification = class {
  static {
    __name(this, "UserNotification");
  }
  id;
  user;
  title;
  titleAr;
  context;
  contextAr;
  action;
  isRead;
  createdAt;
  updatedAt;
};
_ts_decorate121([
  (0, import_typeorm121.PrimaryGeneratedColumn)(),
  _ts_metadata121("design:type", Number)
], UserNotification.prototype, "id", void 0);
_ts_decorate121([
  (0, import_typeorm121.ManyToOne)(() => User, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata121("design:type", typeof User === "undefined" ? Object : User)
], UserNotification.prototype, "user", void 0);
_ts_decorate121([
  (0, import_typeorm121.Column)(),
  _ts_metadata121("design:type", String)
], UserNotification.prototype, "title", void 0);
_ts_decorate121([
  (0, import_typeorm121.Column)(),
  _ts_metadata121("design:type", String)
], UserNotification.prototype, "titleAr", void 0);
_ts_decorate121([
  (0, import_typeorm121.Column)(),
  _ts_metadata121("design:type", String)
], UserNotification.prototype, "context", void 0);
_ts_decorate121([
  (0, import_typeorm121.Column)(),
  _ts_metadata121("design:type", String)
], UserNotification.prototype, "contextAr", void 0);
_ts_decorate121([
  (0, import_typeorm121.Column)({
    nullable: true
  }),
  _ts_metadata121("design:type", String)
], UserNotification.prototype, "action", void 0);
_ts_decorate121([
  (0, import_typeorm121.Column)({
    type: "boolean",
    default: false
  }),
  _ts_metadata121("design:type", Boolean)
], UserNotification.prototype, "isRead", void 0);
_ts_decorate121([
  (0, import_typeorm121.CreateDateColumn)(),
  _ts_metadata121("design:type", typeof Date === "undefined" ? Object : Date)
], UserNotification.prototype, "createdAt", void 0);
_ts_decorate121([
  (0, import_typeorm121.UpdateDateColumn)(),
  _ts_metadata121("design:type", typeof Date === "undefined" ? Object : Date)
], UserNotification.prototype, "updatedAt", void 0);
UserNotification = _ts_decorate121([
  (0, import_typeorm121.Entity)("user_notifications")
], UserNotification);

// src/entity/userOtpPin.entity.ts
var import_typeorm122 = require("typeorm");
function _ts_decorate122(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate122, "_ts_decorate");
function _ts_metadata122(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata122, "_ts_metadata");
var UserOtpPin = class {
  static {
    __name(this, "UserOtpPin");
  }
  id;
  user_id;
  pin;
  created_at;
  updated_at;
};
_ts_decorate122([
  (0, import_typeorm122.PrimaryGeneratedColumn)(),
  _ts_metadata122("design:type", Number)
], UserOtpPin.prototype, "id", void 0);
_ts_decorate122([
  (0, import_typeorm122.Column)({
    type: "int"
  }),
  _ts_metadata122("design:type", Number)
], UserOtpPin.prototype, "user_id", void 0);
_ts_decorate122([
  (0, import_typeorm122.Column)({
    type: "varchar",
    length: 255
  }),
  _ts_metadata122("design:type", String)
], UserOtpPin.prototype, "pin", void 0);
_ts_decorate122([
  (0, import_typeorm122.CreateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata122("design:type", typeof Date === "undefined" ? Object : Date)
], UserOtpPin.prototype, "created_at", void 0);
_ts_decorate122([
  (0, import_typeorm122.UpdateDateColumn)({
    type: "timestamp"
  }),
  _ts_metadata122("design:type", typeof Date === "undefined" ? Object : Date)
], UserOtpPin.prototype, "updated_at", void 0);
UserOtpPin = _ts_decorate122([
  (0, import_typeorm122.Entity)("user_otp_pins")
], UserOtpPin);

// src/entity/userPoint.entity.ts
var import_typeorm123 = require("typeorm");
function _ts_decorate123(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate123, "_ts_decorate");
function _ts_metadata123(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata123, "_ts_metadata");
var UserPoints = class {
  static {
    __name(this, "UserPoints");
  }
  id;
  userId;
  points;
  reason;
  isAdd;
  endDate;
  createdAt;
  updatedAt;
};
_ts_decorate123([
  (0, import_typeorm123.PrimaryGeneratedColumn)(),
  _ts_metadata123("design:type", Number)
], UserPoints.prototype, "id", void 0);
_ts_decorate123([
  (0, import_typeorm123.Column)({
    type: "int"
  }),
  _ts_metadata123("design:type", Number)
], UserPoints.prototype, "userId", void 0);
_ts_decorate123([
  (0, import_typeorm123.Column)({
    type: "int"
  }),
  _ts_metadata123("design:type", Number)
], UserPoints.prototype, "points", void 0);
_ts_decorate123([
  (0, import_typeorm123.Column)({
    type: "varchar"
  }),
  _ts_metadata123("design:type", String)
], UserPoints.prototype, "reason", void 0);
_ts_decorate123([
  (0, import_typeorm123.Column)({
    type: "boolean"
  }),
  _ts_metadata123("design:type", Boolean)
], UserPoints.prototype, "isAdd", void 0);
_ts_decorate123([
  (0, import_typeorm123.Column)({
    type: "timestamp"
  }),
  _ts_metadata123("design:type", typeof Date === "undefined" ? Object : Date)
], UserPoints.prototype, "endDate", void 0);
_ts_decorate123([
  (0, import_typeorm123.CreateDateColumn)(),
  _ts_metadata123("design:type", typeof Date === "undefined" ? Object : Date)
], UserPoints.prototype, "createdAt", void 0);
_ts_decorate123([
  (0, import_typeorm123.UpdateDateColumn)(),
  _ts_metadata123("design:type", typeof Date === "undefined" ? Object : Date)
], UserPoints.prototype, "updatedAt", void 0);
UserPoints = _ts_decorate123([
  (0, import_typeorm123.Entity)("user_points")
], UserPoints);

// src/entity/userTransactionRecord.entity.ts
var import_typeorm124 = require("typeorm");
function _ts_decorate124(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate124, "_ts_decorate");
function _ts_metadata124(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata124, "_ts_metadata");
var UserTransactionRecord = class {
  static {
    __name(this, "UserTransactionRecord");
  }
  id;
  user;
  admin;
  type;
  amount;
  balanceBefore;
  balanceAfter;
  explanation;
  createdAt;
  updatedAt;
};
_ts_decorate124([
  (0, import_typeorm124.PrimaryGeneratedColumn)(),
  _ts_metadata124("design:type", Number)
], UserTransactionRecord.prototype, "id", void 0);
_ts_decorate124([
  (0, import_typeorm124.ManyToOne)(() => User, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata124("design:type", typeof User === "undefined" ? Object : User)
], UserTransactionRecord.prototype, "user", void 0);
_ts_decorate124([
  (0, import_typeorm124.ManyToOne)(() => Admin, {
    nullable: false,
    onDelete: "CASCADE"
  }),
  _ts_metadata124("design:type", typeof Admin === "undefined" ? Object : Admin)
], UserTransactionRecord.prototype, "admin", void 0);
_ts_decorate124([
  (0, import_typeorm124.Column)(),
  _ts_metadata124("design:type", String)
], UserTransactionRecord.prototype, "type", void 0);
_ts_decorate124([
  (0, import_typeorm124.Column)({
    type: "int"
  }),
  _ts_metadata124("design:type", Number)
], UserTransactionRecord.prototype, "amount", void 0);
_ts_decorate124([
  (0, import_typeorm124.Column)({
    type: "int"
  }),
  _ts_metadata124("design:type", Number)
], UserTransactionRecord.prototype, "balanceBefore", void 0);
_ts_decorate124([
  (0, import_typeorm124.Column)({
    type: "int"
  }),
  _ts_metadata124("design:type", Number)
], UserTransactionRecord.prototype, "balanceAfter", void 0);
_ts_decorate124([
  (0, import_typeorm124.Column)("text"),
  _ts_metadata124("design:type", String)
], UserTransactionRecord.prototype, "explanation", void 0);
_ts_decorate124([
  (0, import_typeorm124.CreateDateColumn)(),
  _ts_metadata124("design:type", typeof Date === "undefined" ? Object : Date)
], UserTransactionRecord.prototype, "createdAt", void 0);
_ts_decorate124([
  (0, import_typeorm124.UpdateDateColumn)(),
  _ts_metadata124("design:type", typeof Date === "undefined" ? Object : Date)
], UserTransactionRecord.prototype, "updatedAt", void 0);
UserTransactionRecord = _ts_decorate124([
  (0, import_typeorm124.Entity)("user_transaction_records")
], UserTransactionRecord);

// src/entity/workingHour.entity.ts
var import_typeorm125 = require("typeorm");
function _ts_decorate125(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate125, "_ts_decorate");
function _ts_metadata125(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata125, "_ts_metadata");
var WorkingHour = class {
  static {
    __name(this, "WorkingHour");
  }
  id;
  doctor;
  start;
  end;
  day_time;
  created_at;
  updated_at;
};
_ts_decorate125([
  (0, import_typeorm125.PrimaryGeneratedColumn)(),
  _ts_metadata125("design:type", Number)
], WorkingHour.prototype, "id", void 0);
_ts_decorate125([
  (0, import_typeorm125.ManyToOne)(() => Doctor, (doctor) => doctor.id, {
    onDelete: "CASCADE"
  }),
  _ts_metadata125("design:type", typeof Doctor === "undefined" ? Object : Doctor)
], WorkingHour.prototype, "doctor", void 0);
_ts_decorate125([
  (0, import_typeorm125.Column)({
    type: "varchar"
  }),
  _ts_metadata125("design:type", String)
], WorkingHour.prototype, "start", void 0);
_ts_decorate125([
  (0, import_typeorm125.Column)({
    type: "varchar"
  }),
  _ts_metadata125("design:type", String)
], WorkingHour.prototype, "end", void 0);
_ts_decorate125([
  (0, import_typeorm125.Column)({
    type: "varchar"
  }),
  _ts_metadata125("design:type", String)
], WorkingHour.prototype, "day_time", void 0);
_ts_decorate125([
  (0, import_typeorm125.CreateDateColumn)(),
  _ts_metadata125("design:type", typeof Date === "undefined" ? Object : Date)
], WorkingHour.prototype, "created_at", void 0);
_ts_decorate125([
  (0, import_typeorm125.UpdateDateColumn)(),
  _ts_metadata125("design:type", typeof Date === "undefined" ? Object : Date)
], WorkingHour.prototype, "updated_at", void 0);
WorkingHour = _ts_decorate125([
  (0, import_typeorm125.Entity)("working_hours")
], WorkingHour);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdSpace,
  Admin,
  AdminBlogPost,
  AdminBlogPostComment,
  AdminBlogPostFavorite,
  AdminBlogPostLike,
  AnswerDoctor,
  Appointment,
  BlogCategory,
  BlogPost,
  BookedOffer,
  CartMedicine,
  City,
  Company,
  CompanyEmployee,
  Country,
  Degree,
  Department,
  DiscountType,
  Doctor,
  DoctorBlogPost,
  DoctorBlogPostComment,
  DoctorBlogPostFavorite,
  DoctorBlogPostLike,
  DoctorDepartmentService,
  DoctorLanguage,
  DoctorNotification,
  DoctorOnlineAppointment,
  DoctorOtpPin,
  DoctorPatientConversation,
  DoctorPatientMessage,
  DoctorRating,
  DoctorService,
  DoctorTransactionRecord,
  DoctorWorkLocation,
  EmailVerification,
  FailedJob,
  FavoriteDoctor,
  FavoriteHcp,
  HCP,
  HCPLanguage,
  HcpAppointment,
  HcpBlogPost,
  HcpBlogPostComment,
  HcpBlogPostFavorite,
  HcpBlogPostLike,
  HcpNotification,
  HcpRating,
  HcpTransactionRecord,
  HcpWorkLocation,
  HcpWorkingHour,
  Hospital,
  HospitalAdmin,
  HospitalAppointment,
  HospitalBranch,
  HospitalBranchDoctor,
  HospitalDepartment,
  HospitalDoctor,
  HospitalDoctorWorkHour,
  HospitalHcp,
  HospitalHcpAppointment,
  HospitalHcpDepartment,
  HospitalHcpWorkHour,
  HospitalImg,
  HospitalInsurance,
  HospitalLocation,
  HospitalOtpPin,
  HospitalRating,
  InsuranceCompany,
  Job,
  LabPageSlideImg,
  LabRequest,
  LabRequestTest,
  LabTest,
  LaboratoryPage,
  Language,
  MedFaq,
  MedicalDegree,
  MedicalSpecialty,
  MedicalSubspecialty,
  Medicine,
  MedicineCategory,
  MedicinePurchaseOrder,
  MedicineSubcategory,
  Membership,
  Offer,
  OfferAccessibility,
  OfferCategory,
  OfferSubCategory,
  Offering,
  OfferingCoupon,
  OfferingRating,
  OfferingSelectedCategory,
  OfferingSlideImg,
  PasswordReset,
  PatientHcpConversation,
  PatientHcpMessage,
  PersonalAccessToken,
  PharmStore,
  Pharmacy,
  PopupAd,
  Practice,
  PracticeDoctor,
  PracticeInsurance,
  PracticeLocation,
  Province,
  PurchasedMedicine,
  QuestionDoctor,
  Reminder,
  RewardPoints,
  ServiceProvider,
  ServiceProviderAccessability,
  Session,
  Slide,
  SlideImage,
  SlideService,
  Specialty,
  Transaction,
  User,
  UserCoupon,
  UserNotification,
  UserOtpPin,
  UserPoints,
  UserTransactionRecord,
  WorkingHour
});
