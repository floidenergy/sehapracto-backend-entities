import { BaseEntity } from './baseEntity.entity.cjs';
import { User } from './user.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';

declare class Pharmacy extends BaseEntity {
    password: string;
    user: User;
}

export { Pharmacy };
