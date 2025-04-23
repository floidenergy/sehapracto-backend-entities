import { User } from './user.entity.js';
import './baseEntity.entity.js';
import './country.entity.js';

declare class Pharmacy {
    pharmacyId: number;
    readonly pharmacyCreatedAt: Date;
    readonly pharmacyUpdatedAt: Date;
    readonly pharmacyDeletedAt?: Date;
    password?: string;
    active: boolean;
    user: User;
}

export { Pharmacy };
