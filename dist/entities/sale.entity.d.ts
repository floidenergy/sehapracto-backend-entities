import { BaseEntity } from './baseEntity.entity.js';
import { Patient } from './patient.entity.js';
import { O as Order } from '../order.entity-D-2EbKBW.js';
import './user.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';
import '../category.entity-XstyC_79.js';

declare class Sale extends BaseEntity {
    customer: Patient;
    order: Order;
    total_amount: number;
    status: string;
    payment_methode: string;
    sale_date: Date;
    items: string;
}

export { Sale };
