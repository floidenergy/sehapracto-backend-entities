import { BaseEntity } from './baseEntity.entity.cjs';
import { Patient } from './patient.entity.cjs';
import { O as Order } from '../order.entity-DBg6HcyU.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';
import '../types/orderStatus.cjs';
import '../category.entity-DugzkOj6.cjs';

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
