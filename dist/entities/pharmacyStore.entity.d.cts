import { BaseEntity } from './baseEntity.entity.cjs';
import { Pharmacy } from './pharmacy.entity.cjs';
import { Country } from './country.entity.cjs';
import './user.entity.cjs';

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
