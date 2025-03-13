import { User } from './user.entity';
import { Admin } from './admin.entity';
export declare class UserTransactionRecord {
    id: number;
    user: User;
    admin: Admin;
    type: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    explanation: string;
    createdAt: Date;
    updatedAt: Date;
}
