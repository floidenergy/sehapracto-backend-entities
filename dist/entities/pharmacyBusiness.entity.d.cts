import { BaseEntity } from './baseEntity.entity.cjs';

declare class PharmacyBusiness extends BaseEntity {
    owner: number;
    name: string;
    country: number;
    phone: string;
    email: string;
}

export { PharmacyBusiness };
