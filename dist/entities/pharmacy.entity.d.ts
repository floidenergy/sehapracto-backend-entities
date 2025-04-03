import { User } from './user.entity.js';
import './baseEntity.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';

declare class Pharmacy {
    pharmacy_id: number;
    readonly pharmacy_createdAt: Date;
    readonly pharmacy_updatedAt: Date;
    pharmacy_deletedAt: Date;
    password: string;
    user: User;
}

export { Pharmacy };
