import { User } from './user.entity.js';
import './baseEntity.entity.js';
import './country.entity.js';

declare class Patient {
    patientId: number;
    readonly patientCreatedAt: Date;
    readonly patientUpdatedAt: Date;
    patientDeletedAt: Date;
    balance: number;
    password: string;
    bloodGroup: string;
    user: User;
}

export { Patient };
