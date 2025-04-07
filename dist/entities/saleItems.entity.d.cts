import { BaseEntity } from './baseEntity.entity.cjs';
import { P as Product } from '../category.entity-DugzkOj6.cjs';
import { Sale } from './sale.entity.cjs';
import './patient.entity.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';
import '../order.entity-DBg6HcyU.cjs';
import '../types/orderStatus.cjs';

declare class SaleItem extends BaseEntity {
    product: Product;
    sale: Sale;
    quantity: number;
    selling_price: number;
}

export { SaleItem };
