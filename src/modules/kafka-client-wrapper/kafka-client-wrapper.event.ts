import {
  AttachementApprovedPayload,
  FailedPayload,
  OrderInQueuePayload,
  StockApprovedPayload,
} from "./kafka-client-wrapper.payload";

export const KafkaEvents = {
  ORDER: {
    ORDER_INQUEUE: "order.inqueue",
    STOCK_FAILED: "order.stock.failed",
    STOCK_APPROVED: "order.stock.approved",
    ATTACHEMENT_APPROVED: "order.attachement.approved",
    ATTACHEMENT_FAILED: "order.attachement.failed",
  },
  AUTH: {
    USER_SIGNIN: "auth.user.signin",
    PATIENT_SIGNIN: "auth.patient.signin",
    PHARMACY_SIGNIN: "auth.pharmacy.signin",
    USER_SIGNOUT: "auth.user.signout",
    PATIENT_SIGNOUT: "auth.patient.signout",
    PHARMACY_SIGNOUT: "auth.pharmacy.signout",
  },
  USERS: {
    USER_CREATED: "users.user.created",
    USER_UPDATED: "users.user.updated",

    PATIENT_CREATED: "users.patient.created",
    PATIENT_UPDATED: "users.patient.updated",

    PHARMACY_CREATED: "users.pharmacy.created",
    PHARMACY_UPDATED: "users.pharmacy.updated",
  },
  BUSINESS: {},
  STORE: {},
} as const;

export type KafkaEventMap = {
  // ORDERS
  [KafkaEvents.ORDER.ORDER_INQUEUE]: OrderInQueuePayload;
  [KafkaEvents.ORDER.STOCK_APPROVED]: StockApprovedPayload;
  [KafkaEvents.ORDER.STOCK_FAILED]: FailedPayload;
  [KafkaEvents.ORDER.ATTACHEMENT_APPROVED]: AttachementApprovedPayload;
  [KafkaEvents.ORDER.ATTACHEMENT_FAILED]: FailedPayload;

  // AUTH

  // USERS

  // BUSINESS

  // STORE
};


type ExtractValues<T> = T extends object
  ? { [K in keyof T]: ExtractValues<T[K]> }[keyof T]
  : T;

export type KafkaEventNames = ExtractValues<typeof KafkaEvents>;