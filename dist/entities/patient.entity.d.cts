import { BaseEntity } from './baseEntity.entity.cjs';
import { User } from './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';

declare class Patient extends BaseEntity {
    balance: number;
    password: string;
    blood_group: string;
    user: User;
}

export { Patient };
