import { User } from './user.entity.js';
import './baseEntity.entity.js';
import './country.entity.js';

declare class Patient {
    patientId: number;
    readonly patientCreatedAt: Date;
    readonly patientUpdatedAt: Date;
    readonly patientDeletedAt: Date;
    balance: number;
    password?: string;
    bloodGroup: string;
    active: boolean;
    user: User;
}

export { Patient };
