import { BaseEntity } from './entities/baseEntity.entity.js';
import { User } from './entities/user.entity.js';
import { P as Product } from './category.entity-XstyC_79.js';

declare class OrderItem extends BaseEntity {
    order: Order;
    quantity: number;
    price: number;
    product: Product;
}

declare enum OrderStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    REJECTED = "REJECTED",
    CLOSED = "CLOSED"
}
declare class Order extends BaseEntity {
    customer: User;
    status: OrderStatus;
    price: number;
    orderItems: OrderItem[];
}

export { OrderStatus as O, Order as a, OrderItem as b };
