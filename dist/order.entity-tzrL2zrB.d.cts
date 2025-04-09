import { BaseEntity } from './entities/baseEntity.entity.cjs';
import { Patient } from './entities/patient.entity.cjs';
import { OrderStatus } from './types/orderStatus.cjs';
import { P as Product } from './category.entity-ejYyv947.cjs';

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
