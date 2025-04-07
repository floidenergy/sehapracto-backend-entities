import { BaseEntity } from './entities/baseEntity.entity.js';
import { User } from './entities/user.entity.js';
import { OrderStatus } from './types/orderStatus.js';
import { P as Product } from './category.entity-XstyC_79.js';

declare class OrderItem extends BaseEntity {
    order: Order;
    quantity: number;
    price: number;
    product: Product;
}

declare class Order extends BaseEntity {
    customer: User;
    status: OrderStatus;
    price: number;
    orderItems: OrderItem[];
}

export { Order as O, OrderItem as a };
