import { BaseEntity } from './baseEntity.entity.cjs';
import { Country } from './country.entity.cjs';

declare class User extends BaseEntity {
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    birthdate: Date;
    email: string;
    emailVerifiedAt: Date;
    phone: string;
    phoneVerifiedAt: Date;
    country: Country;
    profileImg: string;
}

export { User };
