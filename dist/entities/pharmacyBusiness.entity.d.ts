import { BaseEntity } from './baseEntity.entity.js';
import { Pharmacy } from './pharmacy.entity.js';
import { Country } from './country.entity.js';
import './user.entity.js';

declare class PharmacyBusiness extends BaseEntity {
    owner: Pharmacy;
    name: string;
    country: Country;
    phone: string;
    email: string;
}

export { PharmacyBusiness };
