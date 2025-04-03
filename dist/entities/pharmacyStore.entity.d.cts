import { BaseEntity } from './baseEntity.entity.cjs';
import { Pharmacy } from './pharmacy.entity.cjs';
import { Country } from './country.entity.cjs';
import './user.entity.cjs';
import '../types/userType.enum.cjs';

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
