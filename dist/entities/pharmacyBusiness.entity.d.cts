import { BaseEntity } from './baseEntity.entity.cjs';
import { Pharmacy } from './pharmacy.entity.cjs';
import { Country } from './country.entity.cjs';
import './user.entity.cjs';
import '../types/userType.enum.cjs';

declare class PharmacyBusiness extends BaseEntity {
    owner: Pharmacy;
    name: string;
    country: Country;
    phone: string;
    email: string;
}

export { PharmacyBusiness };
