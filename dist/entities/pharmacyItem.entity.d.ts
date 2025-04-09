import { BaseEntity } from './baseEntity.entity.js';
import { P as Product } from '../category.entity-DtJYY43Y.js';
import { PharmacyStore } from './pharmacyStore.entity.js';
import './pharmacy.entity.js';
import './user.entity.js';
import './country.entity.js';

declare class PharmacyItem extends BaseEntity {
    product: Product;
    quantity: number;
    pharmacyStore: PharmacyStore;
}

export { PharmacyItem };
