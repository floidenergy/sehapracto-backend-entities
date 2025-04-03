import { BaseEntity } from './baseEntity.entity.cjs';
import { Country } from './country.entity.cjs';
import { APP_TYPE } from '../types/userType.enum.cjs';

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
    password?: string;
    profile_img: string;
    types: APP_TYPE;
    hashPassword(): Promise<void>;
    validatePassword(plainPassword: string): Promise<boolean>;
}

export { User };
