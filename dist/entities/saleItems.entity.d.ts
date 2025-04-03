import { BaseEntity } from './baseEntity.entity.js';
import { P as Product } from '../category.entity-XstyC_79.js';
import { Sale } from './sale.entity.js';
import './patient.entity.js';
import './user.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';
import '../order.entity-D-2EbKBW.js';

declare class SaleItem extends BaseEntity {
    product: Product;
    sale: Sale;
    quantity: number;
    selling_price: number;
    total_price: number;
}

export { SaleItem };
