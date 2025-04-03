import { BaseEntity } from './entities/baseEntity.entity.cjs';
import { User } from './entities/user.entity.cjs';
import { P as Product } from './category.entity-DugzkOj6.cjs';

declare class OrderItem extends BaseEntity {
    order: Order;
    quantity: number;
    price: number;
    product: Product;
}

declare class Order extends BaseEntity {
    customer: User;
    status: string;
    price: number;
    orderItems: OrderItem[];
}

export { Order as O, OrderItem as a };
