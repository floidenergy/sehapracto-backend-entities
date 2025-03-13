import { HCP } from './hcp.entity';
import { Admin } from './admin.entity';
export declare class HcpTransactionRecord {
    id: number;
    healthcareProvider: HCP;
    admin: Admin;
    type: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    explanation: string;
    createdAt: Date;
    updatedAt: Date;
}
