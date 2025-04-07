import { BaseEntity } from './baseEntity.entity.cjs';
import { P as Product } from '../category.entity-DugzkOj6.cjs';
import { PharmacyStore } from './pharmacyStore.entity.cjs';
import './pharmacy.entity.cjs';
import './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';

declare class PharmacyItem extends BaseEntity {
    product: Product;
    quantity: number;
    pharmacy_store: PharmacyStore;
}

export { PharmacyItem };
