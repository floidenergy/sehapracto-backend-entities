import { BaseEntity } from './baseEntity.entity.js';

declare class PharmacyStore extends BaseEntity {
    manager: number;
    pharmacyBusiness: number;
    profileImg: string;
    coverImg: string;
    name: string;
    address: string;
    country: number;
    phone: string;
    email: string;
}

export { PharmacyStore };
