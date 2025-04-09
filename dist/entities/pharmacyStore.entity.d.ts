import { BaseEntity } from './baseEntity.entity.js';
import { Pharmacy } from './pharmacy.entity.js';
import { Country } from './country.entity.js';
import './user.entity.js';

declare class PharmacyStore extends BaseEntity {
    manager: Pharmacy;
    pharmacyBusiness: Pharmacy;
    profileImg: string;
    coverImg: string;
    name: string;
    address: string;
    country: Country;
    phone: string;
    email: string;
}

export { PharmacyStore };
