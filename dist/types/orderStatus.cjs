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

// src/types/orderStatus.ts
var orderStatus_exports = {};
__export(orderStatus_exports, {
  OrderStatus: () => OrderStatus
});
module.exports = __toCommonJS(orderStatus_exports);
var OrderStatus = /* @__PURE__ */ function(OrderStatus2) {
  OrderStatus2["PENDING"] = "PENDING";
  OrderStatus2["CONFIRMED"] = "CONFIRMED";
  OrderStatus2["REJECTED"] = "REJECTED";
  OrderStatus2["CLOSED"] = "CLOSED";
  return OrderStatus2;
}({});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OrderStatus
});
