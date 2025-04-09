import { User } from './user.entity.cjs';
import './baseEntity.entity.cjs';
import './country.entity.cjs';

declare class Pharmacy {
    pharmacyId: number;
    readonly pharmacyCreatedAt: Date;
    readonly pharmacyUpdatedAt: Date;
    pharmacyDeletedAt: Date;
    password: string;
    user: User;
}

export { Pharmacy };
