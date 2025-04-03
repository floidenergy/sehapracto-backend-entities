import { BaseEntity } from './baseEntity.entity.cjs';
import { Patient } from './patient.entity.cjs';
import { a as Order } from '../order.entity-CA8sr2wJ.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';
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
