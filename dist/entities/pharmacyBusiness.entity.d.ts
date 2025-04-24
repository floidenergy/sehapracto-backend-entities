import { BaseEntity } from './baseEntity.entity.js';

declare class PharmacyBusiness extends BaseEntity {
    owner: number;
    name: string;
    country: number;
    phone: string;
    email: string;
}

export { PharmacyBusiness };
