import { BaseEntity } from 'typeorm';
import { Sale } from './sale.entity.js';
import './baseEntity.entity.js';
import './patient.entity.js';
import './user.entity.js';
import './country.entity.js';
import '../order.entity-C2AagUHV.js';
import '../types/orderStatus.js';
import '../category.entity-DtJYY43Y.js';

declare class SalesRefunds extends BaseEntity {
    total: number;
    status: string;
    refunded_date: Date;
    reason: number;
    sale: Sale;
}

export { SalesRefunds };
