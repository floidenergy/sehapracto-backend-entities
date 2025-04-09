import { BaseEntity } from './baseEntity.entity.js';

declare class Country extends BaseEntity {
    name: string;
    nameAr: string;
    telCode: string;
    customerSupport: string;
    currency: string;
    currencyVsDollar: string;
    timezone: string;
    flagIcon: string;
    isActive: boolean;
}

export { Country };
