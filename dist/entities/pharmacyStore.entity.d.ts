import { BaseEntity } from './baseEntity.entity.js';
import { Pharmacy } from './pharmacy.entity.js';
import { Country } from './country.entity.js';
import './user.entity.js';
import '../types/userType.enum.js';

declare class PharmacyStore extends BaseEntity {
    manager: Pharmacy;
    pharmacy_business: Pharmacy;
    profile_img: string;
    cover_img: string;
    name: string;
    address: string;
    country: Country;
    phone: string;
    email: string;
}

export { PharmacyStore };
