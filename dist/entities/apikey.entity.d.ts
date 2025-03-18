import { APP_TYPE } from '../types/userType.enum.js';
import { BaseEntity } from './baseEntity.entity.js';

declare class ApiKey extends BaseEntity {
    key: string;
    type: APP_TYPE;
    actif: boolean;
    description?: string;
    version: number;
}

export { ApiKey };
