import { User } from './user.entity.js';
import { BaseEntity } from './baseEntity.entity.js';
import { APP_TYPE } from '../types/userType.enum.js';
import './country.entity.js';

declare class Session extends BaseEntity {
    accessKey: string;
    refreshKey: string;
    user: User;
    ipAddress: string;
    session_role: APP_TYPE;
    createTokens(): Promise<void>;
}

export { Session };
