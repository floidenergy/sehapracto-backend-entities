import { BaseEntity } from './baseEntity.entity.js';
import { P as Product } from '../category.entity-XstyC_79.js';
import { PharmacyStore } from './pharmacyStore.entity.js';
import './pharmacy.entity.js';
import './user.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';

declare class PharmacyItem extends BaseEntity {
    product: Product;
    quantity: number;
    pharmacy_store: PharmacyStore;
}

export { PharmacyItem };
