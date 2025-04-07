import { User } from './user.entity.js';
import './baseEntity.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';

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
