import { User } from './user.entity.cjs';
import { BaseEntity } from './baseEntity.entity.cjs';
import './country.entity.cjs';
import '../types/userType.enum.cjs';

declare class Session extends BaseEntity {
    accessKey: string;
    refreshKey: string;
    user: User;
    ipAddress: string;
    createTokens(): Promise<void>;
}

export { Session };
