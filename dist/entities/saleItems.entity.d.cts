import { BaseEntity } from './baseEntity.entity.cjs';
import { P as Product } from '../category.entity-ejYyv947.cjs';
import { Sale } from './sale.entity.cjs';
import './patient.entity.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../order.entity-tzrL2zrB.cjs';
import '../types/orderStatus.cjs';

declare class SaleItem extends BaseEntity {
    product: Product;
    sale: Sale;
    quantity: number;
    sellingPrice: number;
}

export { SaleItem };
