import { BaseEntity } from './baseEntity.entity.js';
import { User } from './user.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';

declare class Patient extends BaseEntity {
    balance: number;
    password: string;
    blood_group: string;
    user: User;
}

export { Patient };
