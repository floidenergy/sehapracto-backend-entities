import { User } from './user.entity.cjs';
import './baseEntity.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';

declare class Pharmacy {
    pharmacy_id: number;
    readonly pharmacy_createdAt: Date;
    readonly pharmacy_updatedAt: Date;
    pharmacy_deletedAt: Date;
    password: string;
    user: User;
}

export { Pharmacy };
