import { Doctor } from './doctor.entity';
import { Admin } from './admin.entity';
export declare class DoctorTransactionRecord {
    id: number;
    doctor: Doctor;
    admin: Admin;
    type: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    explanation: string;
    createdAt: Date;
    updatedAt: Date;
}
