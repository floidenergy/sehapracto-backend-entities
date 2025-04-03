import { BaseEntity } from './baseEntity.entity.js';
import { User } from './user.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';

declare class Pharmacy extends BaseEntity {
    password: string;
    user: User;
}

export { Pharmacy };
