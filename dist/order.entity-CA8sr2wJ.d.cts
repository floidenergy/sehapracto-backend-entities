import { BaseEntity } from './entities/baseEntity.entity.cjs';
import { User } from './entities/user.entity.cjs';
import { P as Product } from './category.entity-DugzkOj6.cjs';

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
