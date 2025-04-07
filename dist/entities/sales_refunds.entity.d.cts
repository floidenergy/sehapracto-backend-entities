import { BaseEntity } from 'typeorm';
import { Sale } from './sale.entity.cjs';
import './baseEntity.entity.cjs';
import './patient.entity.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';
import '../order.entity-DBg6HcyU.cjs';
import '../types/orderStatus.cjs';
import '../category.entity-DugzkOj6.cjs';

declare class SalesRefunds extends BaseEntity {
    total: number;
    status: number;
    refunded_date: Date;
    reason: number;
    sale: Sale;
}

export { SalesRefunds };
