import { User } from './user.entity.cjs';
import './baseEntity.entity.cjs';
import './country.entity.cjs';

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
