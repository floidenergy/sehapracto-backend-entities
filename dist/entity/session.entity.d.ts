import { User } from './user.entity';
export declare class Session {
    id: string;
    user_id: User;
    ip_address: string | null;
    user_agent: string | null;
    payload: string;
    last_activity: number;
}
