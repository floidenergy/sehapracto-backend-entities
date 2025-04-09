import { BaseEntity } from './baseEntity.entity.cjs';
import { Patient } from './patient.entity.cjs';
import { O as Order } from '../order.entity-tzrL2zrB.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../types/orderStatus.cjs';
import '../category.entity-ejYyv947.cjs';

declare class Sale extends BaseEntity {
    customer: Patient;
    order: Order;
    totalAmount: number;
    status: string;
    paymentMethode: string;
    saleDate: Date;
    items: string;
}

export { Sale };
