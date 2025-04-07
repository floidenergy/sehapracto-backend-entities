import { User } from './user.entity.cjs';
import './baseEntity.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';

declare class Patient {
    patient_id: number;
    readonly patient_createdAt: Date;
    readonly patient_updatedAt: Date;
    patient_deletedAt: Date;
    balance: number;
    password: string;
    blood_group: string;
    user: User;
}

export { Patient };
