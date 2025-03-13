import { User } from './user.entity';
export declare class UserNotification {
    id: number;
    user: User;
    title: string;
    titleAr: string;
    context: string;
    contextAr: string;
    action: string;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
}
