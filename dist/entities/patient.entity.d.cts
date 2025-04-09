import { User } from './user.entity.cjs';
import './baseEntity.entity.cjs';
import './country.entity.cjs';

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
