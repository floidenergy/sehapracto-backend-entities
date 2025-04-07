import { BaseEntity } from './entities/baseEntity.entity.js';
import { Patient } from './entities/patient.entity.js';
import { OrderStatus } from './types/orderStatus.js';
import { P as Product } from './category.entity-XstyC_79.js';

declare class OrderItem extends BaseEntity {
    order: Order;
    quantity: number;
    price: number;
    product: Product;
}

declare class Order extends BaseEntity {
    patient: Patient;
    status: OrderStatus;
    price: number;
    orderItems: OrderItem[];
}

export { Order as O, OrderItem as a };
