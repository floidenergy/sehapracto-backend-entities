var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/types/permission.enum.ts
var permission_enum_exports = {};
__export(permission_enum_exports, {
  PERMISSIONS: () => PERMISSIONS
});
module.exports = __toCommonJS(permission_enum_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PERMISSIONS
});
