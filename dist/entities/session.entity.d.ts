import { User } from './user.entity.js';
import { BaseEntity } from './baseEntity.entity.js';
import './country.entity.js';

declare class Session extends BaseEntity {
    accessToken: string;
    refreshToken: string;
    user: User;
    ipAddress: string;
}

export { Session };
