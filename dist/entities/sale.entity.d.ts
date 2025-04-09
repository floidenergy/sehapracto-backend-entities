import { BaseEntity } from './baseEntity.entity.js';
import { Patient } from './patient.entity.js';
import { O as Order } from '../order.entity-C2AagUHV.js';
import './user.entity.js';
import './country.entity.js';
import '../types/orderStatus.js';
import '../category.entity-DtJYY43Y.js';

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
