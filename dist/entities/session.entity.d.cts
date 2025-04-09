import { User } from './user.entity.cjs';
import { BaseEntity } from './baseEntity.entity.cjs';
import { APP_TYPE } from '../types/userType.enum.cjs';
import './country.entity.cjs';

declare class Session extends BaseEntity {
    accessKey: string;
    refreshKey: string;
    user: User;
    ipAddress: string;
    sessionRole: APP_TYPE;
    createTokens(): Promise<void>;
}

export { Session };
