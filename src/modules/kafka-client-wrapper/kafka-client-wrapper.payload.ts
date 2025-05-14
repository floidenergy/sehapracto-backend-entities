import { StoreItem } from "../../entities";
import { OrderStatus, OrderType, PaymentMethod } from "../../types";

export interface UploadImageRequest {
  id: string;
  key: string;
  buffer: Uint8Array;
  mimeType?: string | undefined;
}

export interface SavedAttachemet {
  order: number;
  patient: number;
  attachement: number;
}

interface orderItm {
  productId: number;
  quantity: number;
}

export interface OrderInQueuePayload {
  orderItems: orderItm[];
  price: number;
  prescriptions: UploadImageRequest[];
  patient: number;
  orderType: OrderType;
  adress: string;
  phone: string;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

export interface FailedPayload {
  orderId: number;
  reason: string;
}

export interface StockApprovedPayload {
  orderId: number;
  orderedItems: StoreItem[];
  total: number;
  prescriptions: UploadImageRequest[];
  patient: number;
}

export interface AttachementApprovedPayload {
  orderId: number;
  attachements: SavedAttachemet[];
  orderedItems: StoreItem[];
  total: number;
}
