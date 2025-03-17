import { User } from './user.entity.cjs';
import { BaseEntity } from './baseEntity.entity.cjs';
import './country.entity.cjs';

declare class Session extends BaseEntity {
    accessToken: string;
    refreshToken: string;
    user: User;
    ipAddress: string;
}

export { Session };
