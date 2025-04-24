import { BaseEntity } from './baseEntity.entity.cjs';
import { PharmacyStore } from './pharmacyStore.entity.cjs';

declare class PharmacyItem extends BaseEntity {
    product: number;
    quantity: number;
    pharmacyStore: PharmacyStore;
}

export { PharmacyItem };
