import { User } from './user.entity.js';
import { BaseEntity } from './baseEntity.entity.js';
import './country.entity.js';
import '../types/userType.enum.js';

declare class Session extends BaseEntity {
    accessKey: string;
    refreshKey: string;
    user: User;
    ipAddress: string;
    createTokens(): Promise<void>;
}

export { Session };
