import { BaseEntity } from 'typeorm';
import { Sale } from './sale.entity.cjs';
import './baseEntity.entity.cjs';
import './patient.entity.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../order.entity-tzrL2zrB.cjs';
import '../types/orderStatus.cjs';
import '../category.entity-ejYyv947.cjs';

declare class SalesRefunds extends BaseEntity {
    total: number;
    status: string;
    refunded_date: Date;
    reason: number;
    sale: Sale;
}

export { SalesRefunds };
