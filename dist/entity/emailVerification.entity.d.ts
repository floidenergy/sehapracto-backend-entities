import { User } from './user.entity';
export declare class EmailVerification {
    id: number;
    userId: number;
    user: User;
    userType: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
}
