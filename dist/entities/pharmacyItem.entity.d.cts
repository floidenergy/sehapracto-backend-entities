import { BaseEntity } from './baseEntity.entity.cjs';
import { P as Product } from '../category.entity-ejYyv947.cjs';
import { PharmacyStore } from './pharmacyStore.entity.cjs';
import './pharmacy.entity.cjs';
import './user.entity.cjs';
import './country.entity.cjs';

declare class PharmacyItem extends BaseEntity {
    product: Product;
    quantity: number;
    pharmacyStore: PharmacyStore;
}

export { PharmacyItem };
