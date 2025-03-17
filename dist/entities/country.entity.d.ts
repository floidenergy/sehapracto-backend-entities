import { BaseEntity } from './baseEntity.entity.js';

declare class Country extends BaseEntity {
    name: string;
    name_ar: string;
    tel_code: string;
    customer_support: string;
    currency: string;
    currency_vs_dollar: string;
    timezone: string;
    flag_icon: string;
    is_active: boolean;
}

export { Country };
