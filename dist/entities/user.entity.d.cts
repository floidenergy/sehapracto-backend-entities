import { BaseEntity } from './baseEntity.entity.cjs';
import { Country } from './country.entity.cjs';

declare class User extends BaseEntity {
    first_name: string;
    last_name: string;
    gender: string;
    birthdate: Date;
    email: string;
    email_verified_at: string;
    phone: string;
    phone_verified_at: string;
    country: Country;
    password: string;
    profile_img: string;
}

export { User };
