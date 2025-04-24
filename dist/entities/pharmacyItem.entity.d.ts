import { BaseEntity } from './baseEntity.entity.js';
import { PharmacyStore } from './pharmacyStore.entity.js';

declare class PharmacyItem extends BaseEntity {
    product: number;
    quantity: number;
    pharmacyStore: PharmacyStore;
}

export { PharmacyItem };
