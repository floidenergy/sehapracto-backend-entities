import { BaseEntity } from './baseEntity.entity.js';
import { P as Product } from '../category.entity-DtJYY43Y.js';
import { Sale } from './sale.entity.js';
import './patient.entity.js';
import './user.entity.js';
import './country.entity.js';
import '../order.entity-C2AagUHV.js';
import '../types/orderStatus.js';

declare class SaleItem extends BaseEntity {
    product: Product;
    sale: Sale;
    quantity: number;
    sellingPrice: number;
}

export { SaleItem };
